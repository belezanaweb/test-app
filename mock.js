jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('@react-navigation/native', () => {
  const mockedNavigate = jest.fn()
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: mockedNavigate,
      goBack: mockedNavigate
    })
  }
})
