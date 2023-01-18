# ESLint Config

![npm (scoped with tag)](https://img.shields.io/npm/v/@rashedmakkouk/eslint-config/latest)
![ecmascript-version-supported](https://img.shields.io/badge/ECMAScript-2022-%23F27B10)

Opinionated linting rules providing a standardized developer experience across projects.

## v0.8.0

This package has gone through an overhaul and `v0.8.0` introduces many changes, including:

- New plugins support.
- Added/enabled new linting rules.
- Removed previously set rules custom overrides.
- Better support for TypeScript source code including stricter rules.
- Updated peer dependencies.
- And more, see [What's Included](#whats-included) section for details.

These changes will most likely output new errors and warnings in your project(s) codebase that will
need to be updated/refactored.

This README file has been updated with the latest changes along with configuration examples.

## Installation

Install the package in your project.

```bash
# NPM
npm install @rashedmakkouk/eslint-config --dev

# Yarn
yarn add @rashedmakkouk/eslint-config --dev
```

## Configuration

> For consistency, all configuration files use '.json' file extension.

### ESLint

Add `.eslintrc.json` file to the root of your project, or to each of your packages if you are
working on a monorepo, and add the following configuration:

> .eslintrc.json

```json
{
  "extends": [
    ...
    /**
    * If you already have a .eslintrc.* file, add this line to the end of the list if you want to
    * override preceding configurations.
    */
    "@rashedmakkouk/eslint-config"
  ],
  /**
    * ESLint looks for configuration files in successive parent directories all the way up to the
    * root directory of the filesystem (/). See 'Cascading and Hierarchy' for more details.
    * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#cascading-and-hierarchy
    *
    * To prevent this behavior, set 'root' property to true in your root project directory. This
    * tells ESLint to stop looking for other configuration files when it reaches this directory.
    *
    * If you are using this package in a monorepo, see 'Monorepos' for more details.
    * https://typescript-eslint.io/linting/typed-linting/monorepos
    */
  "root": true
}
```

### Supported File Extensions

This package supports both JavaScript and TypeScript file extensions by default:

- .js
- .ts

#### React

If you are using React in your project, this package supports [JSX][jsx-github] file extensions by
default:

- .jsx
- .tsx

To **Enable** JSX syntax support, add the following configuration:

> .eslintrc.json

```json
{
  ...
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true // Add this.
    }
  }
}
```

You may also want to install and configure [eslint-plugin-react][eslint-plugin-react-npm] for
language-specific rules, and add the following configuration:

> .eslintrc.json

```json
{
  ...
  "settings": {
    "react": {
      "version": "detect" // Add this.
    }
  }
}
```

#### Node.js

This package can be used in back-end Node.js projects out-of-the-box.

You may also want to install and configure [eslint-plugin-node][eslint-plugin-node-npm] for
language-specific rules, and add the following configuration:

> .eslintrc.json

```json
{
  ...
  "extends": [
    "plugin:node/recommended", // Add this.
    "@rashedmakkouk/eslint-config"
  ]
}
```

#### Other Frameworks

If you use other frameworks in your project like [eslint-plugin-vue][eslint-plugin-vue-npm] or
[eslint-plugin-svelte][eslint-plugin-svelte-npm], you can add custom file extensions support after
installing and configuring respective plugin as follows:

> .eslintrc.json

```json
{
  ...
  "extraFileExtensions": [".vue"],
  ...
}
```

See [Using Plugins](#using-plugins) section below for more details.

### Ignored Patterns

Ignored file and directory patterns from scanning and linting:

```json
{
  "ignorePatterns": [
    "**/node_modules",
    "**/build",
    "**/dist"
  ]
}
```

### Customizing Base Configuration

If you want to customize part of the base configuration, you can do so by adding respective
property. Some example configuration:

> .eslintrc.json

```json
{
  ...
  "parserOptions": {
    /**
     * Refer to 'ECMAScript' badge at the top of this document for the latest
     * supported version by this package.
     */
    "ecmaVersion": "latest", // Or specify a number version (e.g. 2020).
    "ecmaFeatures": {
      "arrowFunctions": true
    }
  },
  "env": {
    "browser": true, // Default: false.
    "es6": true, // Default: true.
    "node": true // Default: true.
  },
  "ignorePatterns": [
    "**/node_modules"
    "**/scripts"
    "**/lib"
    ...
  ]
}
```

See ESLint [Specifying Parser Options][eslint-specifying-parser-options] official documentation for
the full list of available options.

### Using Plugins

You can add other linting plugins that are not part of this package to your project and extend
custom rules:

> .eslintrc.json

```json
{
  ...
  "plugins": [
    ...
    "custom-plugin" // Add plugins.
  ],
  "extends": [
    ...
    "plugin:custom/recommended", // Add rules.
    "@rashedmakkouk/eslint-config"
  ]
}
```

See ESLint [Use a plugin][eslint-use-a-plugin] and the plugin's official documentation for
installation instructions.

### Configuring Rules

#### Overriding Existing Rules

It is possible to customize options of linting rules applied by default with this package, you can
add the rules you want to change under `overrides` property. Some example overrides:

> .eslintrc.json

```json
{
  ...
  "overrides": [
    ...
    {
      "files": ["*"],
      "rules": {
        /** Add and configure rules you want to override in all files. */
        "sort-vars": [ "warn", { "ignoreCase": true } ]
      }
    },
    {
      /** Specify file patterns to apply rule(s) to. */
      "files": ["*.jsx"],
      "rules": {
        "react/prop-types": "off",
      }
    }
  ]
}
```

See ESLint [Configuring Rules][eslint-configuring-rules] official documentation for more details.

#### Extending New Rules

There are many rules provided by the [Included Plugins](#included-plugins) that are part of this
package but not **Enabled**, you can extend and enable specific rules you want in your project. See
the official documentation of the plugin you want to extend for a complete list of available rules.

### Usage with [TypeScript][typescript-eslint-plugin-npm]

The recommended pattern is to create a new config file `tsconfig.eslint.json` and extend your base
`tsconfig.json` file. This allows you to include file and directory patterns that are not supposed
to be part of the main configuration file or should not be compiled, but you still want to apply
the same linting standards to (e.g. scripts).

> tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json", // Or './tsconfig.base.json'.
  "compilerOptions": {
    /** Prevent using this file for a build. */
    "noEmit": true
  },
  /**
   * This configuration overrides 'includes' property in your base tsconfig file, make sure to list
   * all file and directory patterns you want to lint.
   */
  "include": [
    "**/scripts",
    "src/**/*",
    ...
  ]
}
```

If you choose to opt out of this pattern, tsconfig.json file will be loaded instead; see
[Supported File Patterns](#supported-file-patterns) section below.

#### Supported File Patterns

This package supports loading the following tsconfig file patterns:

- tsconfig.json (scanned and loaded by both ESLint and TypeScript ESLint Plugin)
- tsconfig.eslint.json (scanned and loaded only by ESLint)

#### Supported Directory Patterns

Directory patterns support both standard and monorepo projects and look for tsconfig files in:

- root/
- packages/*/
- libs/*/
- apps/*/
- doc/

#### TSConfig ([Reference][tsconfig-reference])

TypeScript compiler options may be extended to set default values from a base configuration file.
This package provides such file that you can extend, and override any project-specific
configuration depending on your project needs.

Add the following configuration to the top of your project's `tsconfig.json` file:

> tsconfig.json

```json
{
  "extends": "@rashedmakkouk/eslint-config/lib/bases/tsconfig.base.json"
}
```

The base configuration set:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "tsconfig Recommended",
  "compilerOptions": {
    "module": "commonjs",
    "declaration": false,
    "sourceMap": false,
    "removeComments": false,
    "noEmit": false,
    "isolatedModules": false,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "noEmitOnError": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "types": [
      "node"
    ]
  }
}
```

## Usage

### Command Line Interface ([Options][eslint-cli-options])

To run ESLint from the command line, use the following command pattern:

```bash
npx eslint [options] [file|dir|glob]*
```

Some basic command usage examples:

```bash
# Find errors and warnings in multiple files in a directory.
#
# If you are on Microsoft Windows, wrap "src/**" with quotes to use node 'glob' syntax.
npx eslint src/**

# Find errors and warnings in specific file extensions.
npx eslint --ext .jsx,.js libs/

# Fix errors and warnings in file(s).
npx eslint --fix src/file1.js libs/file2.js
```

You can also use your package manager such as 'Yarn' or 'pnpm' to run commands, see respective
official documentation for usage details.

See ESLint [Command Line Interface][eslint-command-line-interface] official documentation for more
in-depth usage information.

### Editor Integration

#### Visual Studio Code

Before you begin, it is recommended that you use a [Workspace Settings][vscode-workspace-settings]
or a [User Settings][vscode-user-settings] configuration file to apply the needed settings, it
helps with portability and with committing the file as part of your repository. This section will
focus on Workspace configuration steps.

> You can get a copy of `code-workspace.base.json` file provided with this package from `bases`
> directory that you can use out-of-the-box. *Make sure to rename the file to
> `your-project.code-workspace`.*

Turn on auto-fix option only for needed providers to avoid overrides and/or unexpected results.

##### [`eslint`][eslint-npm]

> Static code analysis (auto-fix support).

1. Install [dbaeumer.vscode-eslint][vs-marketplace-vscode-eslint] extension from VS Marketplace.

2. Add the following configuration to VS Code Settings to turn on auto-fix for ESLint provider:

> project.code-workspace

```json
{
  ...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

3. Configure ESLint extension behavior:

> project.code-workspace

```json
{
  ...
  "eslint.run": "onType", // Options: onType, onSave.
  "eslint.alwaysShowStatus": true,
  "eslint.packageManager": "yarn", // Options: yarn, npm.
  /**
   * Also accepts array of string paths you want to apply rules to.
   * Example: [ "./src", "./libs/client" ]
   */
  "eslint.workingDirectories": [
    {
      "mode": "location", // Options: location, auto.
      "pattern": "./src/*/" // Optional: A glob pattern to match a working directory.
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
  }
}
```

##### [`prettier`][prettier-npm]

> Code styling and formatting (auto-fix support).

Defined rules and the linting process are part of ESLint main configuration, you do not need to
install any additional extensions or make any changes to enable this plugin.

##### [`markdownlint`][markdownlint-npm]

> Markdown/CommonMark style checker and linting (auto-fix support).

1. Install [DavidAnson.vscode-markdownlint][vs-marketplace-vscode-markdownlint] extension from VS
Marketplace.

2. Add `.markdownlint.json` file to the root of your project and add the following configuration:

> .markdownlint.json

```json
{
  "extends": "@rashedmakkouk/eslint-config/lib/bases/.markdownlint.base.json"
}
```

3. Add the following configuration to VS Code Settings to turn on auto-fix for Markdownlint
provider:

```json
{
  "editor.codeActionsOnSave": {
    ...
    "source.fixAll.markdownlint": true
  }
}
```

##### [`cspell`][cspell-npm]

> Basic spell checker to help catch common spelling errors.

1. Install [streetsidesoftware.code-spell-checker][vs-marketplace-vscode-code-spell-checker]
extension from VS Marketplace.

2. Add  `cspell.json` file to the root of your project and add the following configuration:

> cspell.json

```json
{
  "words": [
    /** Add words you want to be ignored and not reported as 'Unknown word'. */
    "ignore-word"
  ]
}
```

##### [`tsdoc`][eslint-plugin-tsdoc-npm]

> TypeScript comments standards.

1. Defined rules and the linting process are part of ESLint main configuration, you do not need to
install any additional extensions to enable this plugin.

2. Add `.tsdoc.json` file to the root of your project and add the following configuration:

> tsdoc.json

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
  "extends": ["@rashedmakkouk/eslint-config/lib/bases/tsdoc.base.json"]
}
```

## What's Included

### Included Plugins

Plugins configured out-of-the-box:

```json
{
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "simple-import-sort",
    "import",
    "deprecation"
  ]
}
```

### Included Rules

Rules extended out-of-the-box:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ]
}
```

#### @typescript-eslint/strict ([Rules][typescript-eslint-rules])

Select rules are extended from `@typescript-eslint/strict` set that can be helpful in recommending
best practice alternatives:

```json
{
  "rules": {
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-throw-literal": [
      "error",
      {
        "allowThrowingAny": true,
        "allowThrowingUnknown": true
      }
    ],
    "@typescript-eslint/no-useless-constructor": "error"
  }
}
```

#### @typescript-eslint/naming-convention ([Options][typescript-eslint-naming-convention-options])

Naming convention standards applied:

```json
{
  "rules": {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": ["camelCase", "snake_case", "UPPER_CASE"],
        "leadingUnderscore": "allow",
        "selector": "variable",
        "trailingUnderscore": "forbid"
      },
      {
        "format": null,
        "modifiers": ["destructured"],
        "selector": "variable"
      },
      {
        "format": ["camelCase"],
        "leadingUnderscore": "forbid",
        "selector": "parameter",
        "trailingUnderscore": "forbid"
      },
      {
        "format": ["StrictPascalCase"],
        "selector": "typeLike"
      },
      {
        "custom": {
          "match": false,
          "regex": "^I[A-Z]"
        },
        "format": ["StrictPascalCase"],
        "selector": "interface"
      },
      {
        "format": ["StrictPascalCase"],
        "selector": "typeParameter",
        "suffix": ["T"]
      },
      {
        "format": ["StrictPascalCase"],
        "leadingUnderscore": "forbid",
        "selector": "class",
        "trailingUnderscore": "forbid"
      },
      {
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "selector": "function",
        "trailingUnderscore": "forbid"
      },
    ]
  }
}
```

#### prettier/prettier ([Options][prettier-options])

Styling and formatting rules applied:

```json
{
  "rules": {
    ...
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "bracketSpacing": true,
        "endOfLine": "auto",
        "insertPragma": false,
        "printWidth": 80,
        "proseWrap": "preserve",
        /** https://prettier.io/docs/en/options.html#require-pragma */
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        /** Indent formatting. */
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ]
  }
}
```

#### Turned Off Rules

A few rules are turned off intentionally by this package to provide flexibility and freedom to use
other available alternatives:

```json
{
  "rules": {
    /** Interface naming for brevity, may simply extend other interfaces. */
    "@typescript-eslint/no-empty-interface": "off",
    /**
     * Disabled in favor of a more explicit and granular rule:
     * @typescript-eslint/naming-convention
     * https://typescript-eslint.io/rules/naming-convention
     */
    "camelcase": "off",
    /** Avoid false positives when using Bracket notation. */
    "dot-notation": "off",
    /** Suppress errors and warnings when importing from external packages. */
    "import/named": "off",
    /** Suppress errors and warnings when importing from external packages. */
    "import/namespace": "off",
    /** Suppress errors and warnings when importing from external packages. */
    "import/no-named-as-default": "off",
    "no-async-promise-executor": "off"
  }
}
```

## FAQ

### None of those TSConfigs include this file

This happens when TypeScript tries to parse a file not part of your project's tsconfig 'include'
property.

An easy fix is to add the file where the error is reported to your project's tsconfig.json or
tsconfig.eslint.json file.

> See [Usage with TypeScript](#usage-with-typescript) for recommendations and best practices.

Also check [Troubleshooting and FAQ][typescript-eslint-troubleshooting] official documentation for
more information on this and other issues.

### What does --fix-dry-run supposed to do

In short, the `npx eslint --fix-dry-run` option is mostly for integrations via stdin.

See the full explanation here [#15668][what-does-fix-dry-run-supposed-to-do].

## Community

Head over to [Discussions][discussions] where you can ask questions, request to add support for new
plugins or voice your ideas and suggestions.

- [`Plugins`][discussions-plugins]
- [`Rules`][discussions-rules]
- [`Ideas`][discussions-ideas]
- [`Q&A`][discussions-q-a]

If you discover a bug and/or have an enhancement proposition for existing code, [Issues][issues] is
the place to go.

## License

This package is available under the [BSD 3-Clause license][bsd-3-clause-license]. It also includes
external libraries that are available under a variety of licenses. See [LICENSE][license-file] for
the full license text.

[discussions]: https://github.com/rashedmakkouk/eslint-config/discussions
[discussions-plugins]:https://github.com/rashedmakkouk/eslint-config/discussions/categories/plugins
[discussions-ideas]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/ideas
[discussions-rules]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/rules
[discussions-q-a]: https://github.com/rashedmakkouk/eslint-config/discussions/categories/q-a
[issues]: https://github.com/rashedmakkouk/eslint-config/issues
[license-file]: https://github.com/rashedmakkouk/eslint-config/blob/main/LICENSE

[vs-marketplace-vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vs-marketplace-vscode-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[eslint-plugin-tsdoc-npm]: https://www.npmjs.com/package/eslint-plugin-tsdoc
[markdownlint-npm]: https://www.npmjs.com/package/markdownlint
[prettier-npm]:https://www.npmjs.com/package/prettier
[cspell-npm]: https://www.npmjs.com/package/cspell
[vs-marketplace-vscode-code-spell-checker]:https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[typescript-eslint-plugin-npm]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[eslint-plugin-svelte-npm]: https://www.npmjs.com/package/eslint-plugin-svelte
[eslint-plugin-vue-npm]: https://www.npmjs.com/package/eslint-plugin-vue
[eslint-plugin-react-npm]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-npm]: https://www.npmjs.com/package/eslint
[eslint-plugin-node-npm]: https://www.npmjs.com/package/eslint-plugin-node

[bsd-3-clause-license]: https://opensource.org/licenses/BSD-3-Clause
[tsconfig-reference]: https://www.typescriptlang.org/vo/tsconfig
[jsx-github]: https://facebook.github.io/jsx
[typescript-eslint-troubleshooting]: https://typescript-eslint.io/linting/troubleshooting
[eslint-use-a-plugin]: https://eslint.org/docs/latest/user-guide/configuring/plugins#use-a-plugin
[eslint-configuring-rules]: https://eslint.org/docs/latest/user-guide/configuring/rules
[what-does-fix-dry-run-supposed-to-do]: https://github.com/eslint/eslint/discussions/15668#discussioncomment-2282580
[eslint-command-line-interface]: https://eslint.org/docs/latest/use/command-line-interface
[eslint-cli-options]: https://eslint.org/docs/latest/use/command-line-interface#options
[prettier-options]: https://prettier.io/docs/en/options.html
[eslint-specifying-parser-options]: https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
[typescript-eslint-naming-convention-options]: https://typescript-eslint.io/rules/naming-convention/#options
[vscode-user-settings]: https://code.visualstudio.com/docs/getstarted/settings#_settingsjson
[vscode-workspace-settings]: https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings
[typescript-eslint-rules]: https://typescript-eslint.io/rules
