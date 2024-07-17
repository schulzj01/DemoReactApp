module.exports = {
  root: true,
  env: { browser: true, es2020: true },

  ignorePatterns: ['dist', '.eslintrc.cjs','vite.config.ts'],
  parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json','./tsconfig.node.json'],
	},
  plugins: ['react-refresh'],
	//This controls which rules are overriding ones set in the 'extends' property below
  rules: {
    'react-refresh/only-export-components': [ 'warn',{ allowConstantExport: true }],
		"react/jsx-uses-react": "off", //Newer versions of React (that we're on, don't need to import)
		"react/react-in-jsx-scope": "off", //Newer versions of React (that we're on, don't need to import)
		"spaced-comment": "off", //No longer recommended, but should be resolved in AirBnb 9 [See https://github.com/airbnb/javascript/issues/2961]
  },
  extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'prettier'
	]
}
