// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  plugins: [require('prettier-plugin-tailwindcss')],
}
