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

### Troubleshooting:
If you have troble during bundle compilation, may be a babel-module-resolver plugin
To solve this problem, just compile the bundle inside the project root folder, in this case cd /test-app run "yarn start"
the bundle will be compiled en everything must doing good.
``` bash
# Go into the repository and run 
$ cd test-app yarn start
```
