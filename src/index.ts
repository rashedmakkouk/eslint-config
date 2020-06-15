const PRINT_WIDTH = 80;

const allowVariables = [
  'membership_id',
  'reported_type',
  'reported_id',
  'ticket_no',
  'year_suffix',
  'original_url',
  'real_ip',
  'user_agent',
  'x_forwarded_for',
  'cursor_id',
  'disable_comments',
  'display_name',
  'photo_album',
  'field_column',
  'type_column',
  'member_id',
  'edition_type',
  'first_name',
  'last_name',
  'friends_of_friends',
  'only_me',
  'collectible_type',
  'collectible_types',
  'alpha_dash_space',
  'alpha_dash',
  'alpha_numeric',
  'alpha_space',
  'last_seen',
  'group_name',
  'user_id',
  'birth_date',
  'serial_no',
];

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/indent': [0, 2],
        // TODO: eslint v3 `https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0`
        '@typescript-eslint/naming-convention': [
          'error',
          // {
          //   format: ['camelCase'],
          //   selector: 'default',
          // },
          // {
          //   custom: {
          //     // TODO: Match `allowVariables` regex.
          //     match: true,
          //     regex: allowVariables.join('|'),
          //   },
          //   format: ['camelCase', 'snake_case'],
          //   selector: 'variable',
          // },
          {
            format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
            leadingUnderscore: 'allow',
            selector: 'variable',
            trailingUnderscore: 'allow',
          },
          {
            format: ['camelCase', 'snake_case'],
            selector: 'parameter',
          },
          {
            format: ['PascalCase'],
            selector: 'typeLike',
          },
          {
            format: ['PascalCase'],
            selector: 'typeParameter',
            suffix: ['T'],
          },
          // {
          //   format: ['PascalCase'],
          //   prefix: [
          //     'allow',
          //     'can',
          //     'did',
          //     'disable',
          //     'enable',
          //     'has',
          //     'in',
          //     'is',
          //     'should',
          //     'will',
          //     'with',
          //     'visible',
          //   ],
          //   selector: 'variable',
          //   types: ['boolean'],
          // },
          {
            format: ['StrictPascalCase'],
            selector: 'class',
          },
          {
            format: ['PascalCase', 'strictCamelCase'],
            leadingUnderscore: 'allow',
            selector: 'function',
          },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        'arrow-parens': ['warn', 'always'],
        camelcase: 'off',
        'import/named': 'warn',
        'import/namespace': 'off',
        'prettier/prettier': [
          'warn',
          {
            arrowParens: 'always',
            bracketSpacing: true,
            endOfLine: 'auto',
            insertPragma: false,
            jsxBracketSameLine: false,
            printWidth: PRINT_WIDTH,
            proseWrap: 'preserve',
            requirePragma: false,
            semi: true,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'es5',
          },
        ],
        quotes: [
          'warn',
          'single',
          { allowTemplateLiterals: false, avoidEscape: true },
        ],
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      // globalReturn: true,
      jsx: false,
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
    ecmaVersion: 2019,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    curly: ['error', 'all'],
    'dot-notation': 'off',
    'lines-around-comment': [
      'off',
      {
        afterBlockComment: true,
        afterLineComment: false,
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: false,
      },
    ],
    'max-len': [
      'warn',
      {
        code: PRINT_WIDTH,
        ignorePattern: '^s*import|export*',
        ignoreUrls: true,
      },
    ],
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    'no-catch-shadow': 'warn',
    'no-console': 'warn',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-prototype-builtins': 'off',
    'prefer-const': 'warn',
    'require-atomic-updates': 'off',
    'require-await': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    'sort-vars': [
      'warn',
      {
        ignoreCase: false,
      },
    ],
    'tsdoc/syntax': 'warn',
  },
};
