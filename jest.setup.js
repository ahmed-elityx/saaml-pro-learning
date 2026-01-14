// Mock React Native modules
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Platform: {
      OS: 'ios',
      select: jest.fn((obj) => obj.ios || obj.default),
    },
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const mockModule = jest.requireActual('react-native-safe-area-context');
  return {
    ...mockModule,
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

// Mock @react-navigation/native
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      dispatch: jest.fn(),
      getParent: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    CommonActions: {
      navigate: jest.fn(),
      reset: jest.fn(),
    },
  };
});

// Mock react-redux Provider
jest.mock('react-redux', () => {
  const actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux,
    Provider: ({ children }) => children,
    useDispatch: () => jest.fn(),
    useSelector: (selector) => selector({}),
  };
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
