module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    es6: true
  },
  plugins: [
    "prettier",
    "eslint-plugin-tsdoc"
  ],
  extends: [
    "plugin:prettier/recommended",
    "plugin:import/typescript"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "auto",
        insertPragma: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        proseWrap: "preserve",
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5"
      }
    ],
    "sort-keys": [
      1,
      "asc",
      {
        caseSensitive: true,
        natural: false
      }
    ],
    "sort-vars": [
      1,
      {
        ignoreCase: false
      }
    ],
    "tsdoc/syntax": 1
  }
}