import * as React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components/native'
import ProductList from './ProductList'
import rootReducer from '../../stores/rootReducer'
import { defaultTheme } from '../../themes'

const mockStore = configureStore([thunk])
const createState = initialState => actions => actions.reduce(rootReducer, initialState)

const initialState = {
  products: {
    items: [],
    selectedItem: null,
    isFetchingList: false,
    isFetchingDetails: false,
    error: null,
    lastPage: 0,
    finished: false
  }
}

test('button dispatch redux action to loads more items', async () => {
  const store = mockStore(initialState)
  const mockFn = jest.fn()
  const itemsPerRequest = 3

  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ProductList itemsPerRequest={itemsPerRequest} onButtonPress={mockFn} />
      </Provider>
    </ThemeProvider>
  )

  // when ProductList mounts, a 'FETCH_PRODUCTS' action type is always dispatched
  expect(store.getActions()).toContainEqual({ type: 'FETCH_PRODUCTS' })

  await waitFor(() => getByText('Carregar mais produtos'))
  fireEvent.press(getByText('Carregar mais produtos'))

  // one more 'FETCH_PRODUCTS' action type must be dispatched when button is pressed, this is why we expect the actions array to have 'FETCH_PRODUCTS' twice
  expect(store.getActions().reduce((n, x) => n + (x.type === 'FETCH_PRODUCTS'), 0)).toBe(2)
})

test('flatlist initializes with no items', async () => {
  const store = mockStore(initialState)
  const mockFn = jest.fn()
  const itemsPerRequest = 3

  const { queryAllByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ProductList itemsPerRequest={itemsPerRequest} onButtonPress={mockFn} />
      </Provider>
    </ThemeProvider>
  )

  const listItemButton = queryAllByText('VER DETALHES')

  expect(listItemButton.length).toBe(0)
})

test('flatlist items changes according to product store items', async () => {
  const item1 = {
    sku: '1',
    name: 'Item 1',
    imageObjects: [
      {
        featured: true,
        thumbnail: '',
        small: '',
        medium: '',
        large: '',
        extraLarge: '',
        imageUrl: ''
      }
    ],
    priceSpecification: {
      price: 310.9,
      originalPrice: 310.9,
      maxPrice: 449
    }
  }

  const item2 = {
    ...item1,
    sku: '2',
    name: 'Item 2'
  }

  const store = mockStore(
    createState({ ...initialState, products: { ...initialState.products, items: [item1] } })
  )
  const mockFn = jest.fn()
  const itemsPerRequest = 0

  const { queryAllByText, getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ProductList itemsPerRequest={itemsPerRequest} onButtonPress={mockFn} />
      </Provider>
    </ThemeProvider>
  )

  expect(queryAllByText('Item 1')).toBeTruthy()

  act(() => {
    store.dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', products: [item2] })
  })

  await waitFor(() => getByText('Item 2'))
  expect(queryAllByText('Item 2')).toBeTruthy()
})

test('loading component shows up when data is fetching', async () => {
  const store = mockStore(createState(initialState))
  const mockFn = jest.fn()
  const itemsPerRequest = 0

  const { queryByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ProductList itemsPerRequest={itemsPerRequest} onButtonPress={mockFn} />
      </Provider>
    </ThemeProvider>
  )

  expect(queryByTestId('LoadingComponent')).toBeNull()

  act(() => {
    store.dispatch({ type: 'FETCH_PRODUCTS' })
  })

  expect(queryByTestId('LoadingComponent')).toBeTruthy()
})
