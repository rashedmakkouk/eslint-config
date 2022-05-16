# Overview

Opinionated implemenations and linting rules to provide a standardized developer experience across
projects and packages.

Following is the list of tools used to apply linting rules or serve as a source config file that
can be extended.

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
  "extends": ["@scope/eslint-config/tsdoc.base.json"]
}
```

## MarkdownLint

Code styling standards.

> `.markdownlint.base.json`

```json
{
  "extends": "./node_modules/@scope/eslint-config/.markdownlint.base.json"
}
```

## Git

Git commit templates and guidelines.

> `.gitmessage.txt`

## TypeScript

TypeScript compiler options may be extended to set default options.

Path properties are to be configured locally at the package level instead of at
the base to ensure proper location pointers.

> `tsconfig.base.json`

```json
{
  "extends": "./node_modules/@scope/eslint-config/tsconfig.base.json"
}
```
