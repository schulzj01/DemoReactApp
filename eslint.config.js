import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import globals from 'globals';
import tseslint from 'typescript-eslint';


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'react-refresh': pluginReactRefresh,
      'readable-tailwind': eslintPluginReadableTailwind,
      '@stylistic': stylistic,
    },
    //This controls which rules are overriding ones set in the 'extends' property below
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-uses-react': 'off', //Newer versions of React (that we're on, don't need to import)
      'react/react-in-jsx-scope': 'off', //Newer versions of React (that we're on, don't need to import)
      'prefer-const': 'off', //https://www.epicweb.dev/talks/let-me-be
      '@stylistic/indent': ['warn', 2],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/quotes': ['warn','single'],
      '@stylistic/comma-dangle': ['warn','always-multiline'],
      '@stylistic/max-len': ['warn', {
        code: 140,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/jsx-quotes': ['warn','prefer-single'],
      '@stylistic/quote-props': ['warn','as-needed'],
      //Change tailwind styling rules  https://github.com/schoero/eslint-plugin-readable-tailwind  enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      'readable-tailwind/multiline': ['warn',{
        group : 'never',
        printWidth : 140,
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },{ //Ignores has to be its own object https://github.com/eslint/eslint/discussions/18304
    ignores: ['dist/', 'coverage/','public/'], //Currently the public folder is excluded because of MSW, but this will change

  },

  //Customization of ES Lint styling rules: https://eslint.style/packages/default
/*	stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
		'comma-dangle': 'always',
		'max-len': 140,
		'quote-props': 'as-needed',
		'jsx-quotes': 'prefer-single',
		//singleAttributePerLine: true,

    // ...
  }),*/
];
