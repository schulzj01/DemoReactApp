/**
 * Configuration file for prettier code formatting.  These are team based settings.
 * Any changes should be coordinated
 *
 * https://prettier.io/docs/en/options
 */
module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 140,
  tabWidth: 2,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
};
