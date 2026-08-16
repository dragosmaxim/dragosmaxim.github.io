import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '.nuxt',
      '.output',
      'my-nuxt-app',
      'dist',
      'build',
      'coverage',
      'node_modules',
      '*.min.js'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser
    }
  }
);
