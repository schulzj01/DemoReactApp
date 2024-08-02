import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
//import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
      //'readable-tailwind': eslintPluginReadableTailwind,
    },

    // Team specific overrides and additional linting rules to help guide code style and format
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'off', // Newer versions of React (that we're on, don't need to import)
      'react/react-in-jsx-scope': 'off', // Newer versions of React (that we're on, don't need to import)
      'prefer-const': 'off', // https://www.epicweb.dev/talks/let-me-be
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
      /*  '@stylistic/indent': ['warn', 2],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/comma-dangle': ['warn', 'always-multiline'],
      '@stylistic/max-len': ['warn', {
        code: 140,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
      '@stylistic/quote-props': ['warn', 'as-needed'],
      // Change tailwind styling rules  https://github.com/schoero/eslint-plugin-readable-tailwind  enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      'readable-tailwind/multiline': ['warn', {
        group: 'never',
        printWidth: 140,
      }], */
      // 'eslint-config-prettier/prettier':"error",
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
  eslintConfigPrettier,
];
