/* eslint-disable sort-keys */
const RULE_ERROR = 'error';
const RULE_OFF = 'off';
const RULE_WARN = 'warn';

const ecmaVersion = 2022;
const project = [
  './tsconfig?(.eslint).json',
  './(packages|libs|apps)/*/tsconfig?(.eslint).json',
  './docs/tsconfig?(.eslint).json',
];
const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const ignorePatterns = ['**/node_modules', '**/build', '**/dist'];

const PRINT_WIDTH = 80;
const TAB_WIDTH = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      module: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      regexUFlag: true,
      regexYFlag: true,
      restParams: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
    },
    extensions: [...extensions, '.html'],
    project,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'simple-import-sort',
    'import',
    'deprecation',
  ],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    /** {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts} */
    'plugin:@typescript-eslint/recommended',
    /** {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts} */
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    /** {@link https://github.com/prettier/eslint-plugin-prettier#recommended-configuration | Recommended Configuration} */
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': extensions,
    },
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx'],
      },
      typescript: {
        /**
         * Always try to resolve types under `<root>@types` directory even it
         * doesn't contain any source code.
         */
        alwaysTryTypes: true,
        project: [
          'tsconfig.json',
          '(packages|libs|apps)/*/tsconfig.json',
          'docs/tsconfig.json',
        ],
      },
    },
  },
  rules: {
    /** Avoid conflict with Prettier rule 'tabWidth'. */
    indent: RULE_OFF,
    /** Avoid conflict with Prettier rule 'tabWidth'. */
    '@typescript-eslint/indent': RULE_OFF,
    /**
     * Base rule is disabled in favor of 'overrides' configuration to properly
     * handle JS/TS codebase; see 'overrides' property.
     */
    '@typescript-eslint/explicit-function-return-type': RULE_OFF,
    /**
     * Disabled in favor of a more explicit and granular rule:
     * {@link https://typescript-eslint.io/rules/naming-convention | @typescript-eslint/naming-convention}
     */
    camelcase: RULE_OFF,
    // TODO: eslint v3 `https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0`
    '@typescript-eslint/naming-convention': [
      RULE_ERROR,
      {
        format: ['camelCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        selector: 'variable',
        trailingUnderscore: 'forbid',
      },
      {
        format: null,
        modifiers: ['destructured'],
        selector: 'variable',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        selector: 'parameter',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['StrictPascalCase'],
        selector: 'typeLike',
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },
        format: ['StrictPascalCase'],
        selector: 'interface',
      },
      {
        format: ['StrictPascalCase'],
        selector: 'typeParameter',
        suffix: ['T'],
      },
      {
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        selector: 'class',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'function',
        trailingUnderscore: 'forbid',
      },
    ],
    /** Interface naming for brevity, may simply extend other interfaces. */
    '@typescript-eslint/no-empty-interface': RULE_OFF,
    '@typescript-eslint/no-explicit-any': [RULE_ERROR, { fixToUnknown: true }],
    '@typescript-eslint/no-floating-promises': [
      RULE_WARN,
      { ignoreVoid: true },
    ],
    /**
     * If you want to iterate over indices, see below for alternatives.
     * {@link https://typescript-eslint.io/rules/no-for-in-array | no-for-in-array}
     */
    '@typescript-eslint/no-for-in-array': RULE_ERROR,
    '@typescript-eslint/no-inferrable-types': RULE_WARN,
    /**
     * ESLint base rule is disabled in favor of:
     * \@typescript-eslint/no-invalid-this.
     */
    'no-invalid-this': RULE_OFF,
    '@typescript-eslint/no-invalid-this': RULE_ERROR,
    '@typescript-eslint/no-misused-promises': [
      RULE_ERROR,
      { checksVoidReturn: false },
    ],
    /**
     * ESLint base rule is disabled in favor of:
     * \@typescript-eslint/no-throw-literal
     */
    'no-throw-literal': RULE_OFF,
    '@typescript-eslint/no-throw-literal': [
      RULE_ERROR,
      {
        allowThrowingAny: true,
        allowThrowingUnknown: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': RULE_WARN,
    '@typescript-eslint/no-useless-constructor': RULE_ERROR,
    '@typescript-eslint/no-var-requires': RULE_ERROR,
    '@typescript-eslint/prefer-for-of': RULE_ERROR,
    '@typescript-eslint/prefer-includes': RULE_ERROR,
    '@typescript-eslint/prefer-nullish-coalescing': RULE_WARN,
    '@typescript-eslint/prefer-optional-chain': RULE_WARN,
    '@typescript-eslint/prefer-string-starts-ends-with': RULE_ERROR,
    '@typescript-eslint/prefer-ts-expect-error': RULE_ERROR,
    '@typescript-eslint/promise-function-async': RULE_ERROR,
    '@typescript-eslint/restrict-template-expressions': [
      RULE_WARN,
      {
        allowBoolean: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/unbound-method': [RULE_WARN, { ignoreStatic: true }],
    'arrow-parens': [RULE_ERROR, 'always'],
    curly: [RULE_ERROR, 'all'],
    'deprecation/deprecation': RULE_WARN,
    /** Avoid false positives when using Bracket notation. */
    'dot-notation': RULE_OFF,
    /** Suppress errors and warnings when importing from external packages. */
    'import/named': RULE_OFF,
    /** Suppress errors and warnings when importing from external packages. */
    'import/namespace': RULE_OFF,
    /** Suppress errors and warnings when importing from external packages. */
    'import/no-named-as-default': RULE_OFF,
    'import/no-unresolved': RULE_ERROR,
    'lines-around-comment': [
      RULE_WARN,
      {
        beforeBlockComment: false,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
      },
    ],

    /** Line length: 80 */
    'max-len': [
      RULE_WARN,
      {
        code: PRINT_WIDTH,
        /**
         * Ignores patterns:
         * - Comment line used to disable ESLint rule.
         * - Module imports and exports.
         */
        ignorePattern: '/* eslint-disable|^s*import|export*',
        ignoreUrls: true,
      },
    ],
    'no-async-promise-executor': RULE_OFF,
    'no-confusing-arrow': [RULE_ERROR, { allowParens: false }],
    'no-console': RULE_WARN,
    'no-mixed-operators': RULE_ERROR,
    'no-multiple-empty-lines': [RULE_WARN, { max: 1 }],
    'no-tabs': [RULE_ERROR, { allowIndentationTabs: true }],
    'no-unexpected-multiline': RULE_ERROR,
    'no-use-before-define': [
      RULE_ERROR,
      {
        allowNamedExports: false,
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    'no-var': RULE_ERROR,
    'no-void': [RULE_WARN, { allowAsStatement: true }],
    'object-shorthand': [RULE_ERROR, 'properties'],
    'prefer-const': RULE_WARN,
    'prefer-spread': RULE_WARN,
    'prefer-template': RULE_ERROR,
    'prettier/prettier': [
      RULE_WARN,
      {
        bracketSpacing: true,
        endOfLine: 'auto',
        insertPragma: false,
        printWidth: PRINT_WIDTH,
        proseWrap: 'preserve',
        /** {@link https://prettier.io/docs/en/options.html#require-pragma} */
        requirePragma: false,
        semi: true,
        singleQuote: true,
        /** Indent formatting. */
        tabWidth: TAB_WIDTH,
        trailingComma: 'es5',
      },
    ],
    quotes: [
      RULE_WARN,
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'quote-props': [RULE_ERROR, 'as-needed'],
    /**
     * Raises sorting issues when used with 'eslint-plugin-simple-import-sort'.
     * Turned off in favor of import/export rules configured below.
     *
     */
    'sort-imports': RULE_OFF,
    'simple-import-sort/imports': RULE_WARN,
    'simple-import-sort/exports': RULE_WARN,
    'import/first': RULE_ERROR,
    'import/newline-after-import': RULE_WARN,
    'import/no-duplicates': RULE_ERROR,
    'sort-keys': [
      RULE_WARN,
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    'sort-vars': [RULE_WARN, { ignoreCase: false }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'tsdoc/syntax': RULE_WARN,
  },
  overrides: [
    {
      /** Enable the rule specifically for TypeScript files. */
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': RULE_ERROR,
      },
    },
  ],
};
