# test-app beleza na web

## Install
``` bash
# Clone the repository
$ git clone https://github.com/alexrili/test-app

# Go into the repository
$ cd test-app

# Install dependencies
$ npm install or yarn
```

## Usage
First you need to generate the binar.
``` bash
# For IOS devices
$ react-native run-ios

# For Android devices
$ react-native devices
```

## Last Step
``` bash
# Close any terminal window that opened during compilation and then
$ yarn start or npm start
```
### Troubleshooting:
Becouse of babel-module-resolver plugin, you may have a troble to compile the the js bundle
To solve this problem, just compile the bundle inside the project root folder, in this case cd /test-app run "yarn start"
the bundle will be compiled en everything must doing good.
