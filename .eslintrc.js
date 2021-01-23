module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'eslint:recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'react/prop-types': 'off',
  },
};
