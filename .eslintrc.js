module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox'],
  env: {
    'jest/globals': true,
    'detox/detox': true,
  },
};
