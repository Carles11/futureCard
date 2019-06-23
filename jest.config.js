module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './__mocks__/fileMock',
    ),
    '\\.(css|less|sass|scss)$': require.resolve('./__mocks__/styleMock'),
    '^@src(.*)$': '<rootDir>/src$1',
  },
  setupFilesAfterEnv: [require.resolve('./__mocks__/localStorageMock')],
};
