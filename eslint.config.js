import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// @todo Need to add in eslint-plugin-jsx-a11y once we have ESLint 9 Support: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/978

export default [
  // Add recommended programatic linting options
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'react-refresh': pluginReactRefresh,
    },

    // Team specific overrides and additional linting rules to help guide code style and format
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'off', // Newer versions of React (that we're on, don't need to import)
      'react/react-in-jsx-scope': 'off', // Newer versions of React (that we're on, don't need to import)
      'react/jsx-pascal-case': ['error', { allowNamespace: true }],
      'prefer-const': 'off', // https://www.epicweb.dev/talks/let-me-be
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
      'prefer-template': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    // Ignores has to be its own object https://github.com/eslint/eslint/discussions/18304
    ignores: ['dist/', 'coverage/', 'public/'], // Currently the public folder is excluded because of MSW, but this will change
  },
  //Remove linting rules that may conflict with prettier
  eslintConfigPrettier,
];
