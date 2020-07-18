module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
};
