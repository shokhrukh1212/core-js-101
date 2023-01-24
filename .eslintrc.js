module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-plusplus': 0,
    "no-unused-vars": 0,
    "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
    "no-labels": ["error", { "allowLoop": true }],
    "indent": ["error"],
    "no-param-reassign": "error",
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
    "max-len": ["error", { "code": 200 }],
    "eol-last": ["error", "never"]
  },
};
