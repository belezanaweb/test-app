const xhrMockClass = () => ({
  open            : jest.fn(),
  send            : jest.fn(),
  setRequestHeader: jest.fn(),
  abort           : jest.fn(),
  onreadystatechange: jest.fn(),
  readyState: 4,
  status: 200,
  responseText: JSON.stringify({
    response: {
      body: { test: 1 }
    }
  }),
})

XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)
