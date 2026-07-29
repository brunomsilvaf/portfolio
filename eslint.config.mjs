import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

// Flat config (ESLint 9+/10). Replaces the legacy .eslintrc.js.
export default [
  {
    ignores: ['build/**', 'coverage/**', 'node_modules/**']
  },
  js.configs.recommended,
  {
    // Application source: React + hooks + accessibility rules.
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    settings: {
      // Pinned explicitly: eslint-plugin-react's "detect" path uses an API
      // removed in ESLint 10 and would otherwise crash.
      react: { version: '19.2' }
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  {
    // Build/tooling config files run in Node.
    files: ['*.config.{js,mjs}', 'vite.config.js', 'eslint.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  }
];
