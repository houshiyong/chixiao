module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended', 
    'eslint:recommended', 
    'standard' 
  ], 
  rules: { 
    'camelcase': [0, { 
      'properties': 'always' 
    }], 
    'no-console': 'off', 
    'no-debugger': 'off',
    "eqeqeq":["off"] 
  }, 
  parserOptions: { 
    parser: 'babel-eslint' 
  }
}
