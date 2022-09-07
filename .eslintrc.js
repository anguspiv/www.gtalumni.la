module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', '@emotion'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    '@emotion/pkg-renaming': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/no-vanilla': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/*.test.js?(x)', './__tests__/**/*.js?(x)'],
      plugins: ['jest', 'testing-library', 'jest-dom'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended', 'plugin:jest/all'],
    },
  ],
};
