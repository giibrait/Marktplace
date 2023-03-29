module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jsx-ally', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extensions': ['warn', {extensions: ['.jsx', '.js']}],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
  },
};
