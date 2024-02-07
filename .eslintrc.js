module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'react/jsx-props-no-spreading': ['off']
  },
  plugins: ['prettier']
};
