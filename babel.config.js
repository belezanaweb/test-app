module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@containers': './src/containers',
          '@router': './src/router',
          '@services': './src/services',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
