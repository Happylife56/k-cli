module.exports = {
  // 转义
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  roots: ['<rootDir>/src', '<rootDir>/packages'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
