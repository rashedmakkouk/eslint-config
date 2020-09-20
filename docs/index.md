# Documentation

Package includes all implemenations and linting rules to provide a standardized\
coding experience across projects and packages.

Following is the list of tools used to apply linting rules or serve as a source\
config file that can be extended.

## ESLint

Code linting standards.

> Part of the core package.

## Prettier

Code formatting styling standards.

> Part of the core package.

## TSDoc

TypeScript comments linting rules.

> `tsdoc.base.json`

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
  "extends": ["@limo/eslint-config/tsdoc.base.json"]
}
```

## MarkdownLint

Code styling standards.

> `.markdownlint.base.json`

```json
{
  "extends": "./node_modules/@limo/eslint-config/.markdownlint.base.json"
}
```

## Git

Git commit templates and guidelines.

> `.gitmessage.txt`

## TypeScript

`TypeScript` compiler options may be extended from `tsconfig.base.json` file,\
and it includes all declaration and sourcemap options enabled by default.

Local configuration should include path related properties to avoid relative\
path pointing to 'node_modules'.

> `tsconfig.base.json`

```json
{
  "extends": "./node_modules/@limo/eslint-config/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist/types",
    "outDir": "./dist/lib",
    "rootDir": "./src",
    "baseUrl": "./",
  },
  "exclude": [
    "node_modules",
    "dist",
    "docs"
  ]
}
```
