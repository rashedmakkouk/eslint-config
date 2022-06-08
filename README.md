# ESLint Config

Opinionated linting rules providing a standardized developer experience across projects.

## Installation

Install package in your project.

```shell
# NPM
npm install @rashedmakkouk/eslint-config --dev

# Yarn
yarn add @rashedmakkouk/eslint-config --dev
```

## IDE Integration

## VS Code

Before you begin, it is recommended that you use [VS Code Workspace][vscode-workspace]
configuration file insde your project. You may use your own, or get a copy of
`code-workspace.base.json` file provided with this package from `bases` directory that you can use
out-of-the-box.

*Make sure to rename the file to `your-project.code-workspace`.*

> node_modules/@rashedmakkouk/eslint-config/lib/bases/code-worksapce.base.json

Install [dbaeumer.vscode-eslint][vs-marketplace-vscode-eslint] Extension from VS Marketplace.

Add the setting below to VS Code Settings to turn on Auto Fix for ESLint provider:

> Turn on Auto Fix only for needed providers to avoid overrides and/or unexpected results.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Configure ESLint plugin behavior:

```json
{
  "eslint.run": "onType", // Options: onType, onSave
  "eslint.alwaysShowStatus": true,
  "eslint.packageManager": "yarn", // Options: yarn, npm
  // Also accpets array of string paths you want to apply rules to.
  // Example: "eslint.workingDirectories": [ "./src", "./libs/client" ]
  "eslint.workingDirectories": [
    {
      "mode": "location", // Options: location, auto
      "pattern": "./src/*/" // Optional: A glob pattern to match a working directory
    }
  ],
  "eslint.validate": [
    "typescript",
    "typescriptreact",
    "javascript",
    "javascriptreact"
  ],
  "eslint.options": {
    "extensions": [
      ".ts",
      ".tsx",
      ".js",
      ".jsx"
    ]
  },
}
```

## Configuration

> Update `./node_modules/..` path, where referenced, as needed if you are working in a monorepo or
> you don't have the directory at the root of your project.

### [eslint][eslint-npm]

Identify and report code patterns.

Add `.eslintrc.js` file to the root of your project and add the following configurations:

> .eslintrc.js

```javascript
module.exports = {
  extends: [
    ...
    "@rashedmakkouk/eslint-config"
  ],
};
```

Optional: You can also apply rules overrides locally that are specific to your project; add the
following configuration attributes to `.eslintrc.js` file and customize as needed:

> .eslintrc.js

```javascript
module.exports = {
  ...
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:custom/recommended", // You may extend as many linting rules as you need.
    "@rashedmakkouk/eslint-config" // Add to the end of your list to override previous rules.
  ],
  overrides: [
    {
      files: ["*"],
      rules: {
        "react/prop-types": "off" // Add rules you want to override.
      }
    }
  ],
  parserOptions: {
    jsx: true // If your project uses React.
  },
  plugins: [
    "custom-plugin" // You may add as many plugins as you need.
  ],
  settings: {
    react: {
      version: "latest"
    }
  },
};
```

### [prettier][prettier-npm]

Code formatting styling standards.

Defined rules are part of ESLint main configuration, you do not need to install any additional
Extensions or make any changes.

### [@microsoft/tsdoc][microsoft-tsdoc-npm]

TypeScript comment block standards.

Add `.tsdoc.json` file to the root of your project and add the following configurations:

> tsdoc.json

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
  "extends": ["@rashedmakkouk/eslint-config/lib/bases/tsdoc.base.json"]
}
```

### [markdownlint][markdownlint-npm]

Code comment block styling standards.

Install [DavidAnson.vscode-markdownlint][vs-marketplace-vscode-markdownlint] Extension from VS Marketplace.

Add the setting below to VS Code Settings to turn on Auto Fix for Markdownlint provider:

```json
{
  "editor.codeActionsOnSave": {
    ...
    "source.fixAll.markdownlint": true
  }
}
```

Add the following configuration to `.markdownlint.json` file in the root of your project:

> .markdownlint.json

```json
{
  "extends": "./node_modules/@rashedmakkouk/eslint-config/lib/bases/.markdownlint.base.json"
}
```

### [typescript][typescript-npm]

TypeScript compiler options may be extended to set default options.

Add the following configuration to your `tsconfig.json` file, and update any project specific
overrides:

> tsconfig.json

```json
{
  "extends": "./node_modules/@rashedmakkouk/eslint-config/lib/bases/tsconfig.base.json"
}
```

You may also need to update what file patterns to scan for depending on your project:

  > tsconfig.json

```json
{
  "include": [
    ...
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    ...
    "**/node_modules",
    "**/build",
    "**/dist",
    "**/__tests__/*"
  ]
}
```

## Git

Git commit linting and templates [WIP].

## Community

Head over to [Discussions][discussions] where you can ask questions, request to add support to new
plugins or voice your ideas and suggestions.

- [`Plugins`][discussions-plugins]
- [`Rules`][discussions-rules]
- [`Ideas`][discussions-ideas]
- [`Q&A`][discussions-q-a]

## License

This package is available under the [MIT license][mit-license]. It also includes external libraries
that are available under a variety of licenses. See [LICENSE][mit-license-repo] for the full
license text.

[vs-marketplace-vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vs-marketplace-vscode-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[microsoft-tsdoc-npm]: https://www.npmjs.com/package/@microsoft/tsdoc
[markdownlint-npm]: https://www.npmjs.com/package/markdownlint
[eslint-npm]: https://www.npmjs.com/package/eslint
[prettier-npm]:https://www.npmjs.com/package/prettier
[typescript-npm]: https://www.npmjs.com/package/typescript
[discussions]: https://github.com/rashedmakkouk/eslint-config/discussions
[discussions-plugins]:https://github.com/rashedmakkouk/eslint-config/discussions/categories/plugins
[discussions-ideas]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/ideas
[discussions-rules]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/rules
[discussions-q-a]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/q-a
[issues]: https://github.com/rashedmakkouk/eslint-config/issues
[mit-license]:https://opensource.org/licenses/MIT
[mit-license-repo]: https://github.com/rashedmakkouk/eslint-config/blob/main/LICENSE
[vscode-workspace]: https://code.visualstudio.com/docs/editor/workspaces
