module.exports = {
  preset: 'react-native',

  roots: ['./src/__tests__'],
  modulePathIgnorePatterns: ['./src/__tests__/__mocks__'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },

  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-native/extend-expect',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
