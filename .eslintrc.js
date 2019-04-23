module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prefer-stateless-function": 0,
        "no-plusplus": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-restricted-syntax": 0,
        "import/no-extraneous-dependencies": 0,
        "react/react-in-jsx-scope": 0,
        "no-use-before-define": 0,
        "import/named": 0,
        "sort-keys": "error"
    }
};
