module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|react-native|@react-native|@react-navigation|react-redux|@reduxjs/toolkit|@react-native-community|react-native-gesture-handler|react-native-screens|react-native-safe-area-context)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
  ],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs'],
};
