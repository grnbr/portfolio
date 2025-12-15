import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslint.configs.recommended,
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  perfectionist.configs['recommended-natural'],

  // 🔹 Custom setup
  {
    plugins: {
      '@stylistic': stylistic,
    },

    rules: {
      // ⚙️ General JS/TS
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          caughtErrors: 'all',
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      'no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true },
      ],

      // 🧠 Naming conventions
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: { regex: '^T[A-Z]', match: false },
        },
      ],

      // 🎨 Stylistic rules
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/max-len': [
        'error',
        {
          code: 80, // max line length
          ignorePattern: '^\\s*<', // ignore lines that start with JSX tags
          ignoreComments: true, // ignore comments
          ignoreStrings: true, // ignore strings
          ignoreTemplateLiterals: true,
        },
      ],
      'jsx-quotes': ['error', 'prefer-double'],

      // 📦 Import organization
      'import/order': 'off',
      // 'import/order': [
      //   'error',
      //   {
      //     groups: [
      //       'builtin',
      //       'external',
      //       'internal',
      //       'parent',
      //       'sibling',
      //       'index',
      //       'object',
      //       'type',
      //     ],
      //     'newlines-between': 'always-and-inside-groups',
      //     alphabetize: { order: 'asc', caseInsensitive: true },
      //   },
      // ],
      'perfectionist/sort-modules': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          fallbackSort: { type: 'unsorted' },
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'ignore',
          groups: ['enum', 'types-interfaces', 'class', 'function', 'unknown'],
          customGroups: [
            {
              groupName: 'types-interfaces',
              type: 'unsorted',
              anyOf: [{ selector: 'type' }, { selector: 'interface' }],
            },
          ],
        },
      ],

      // ⚛️ React
      // 'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    },

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
    },

    settings: {
      'import/resolver': {
        typescript: {},
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
  },
  {
    ignores: [
      '*.config.*',
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'public/**',
      'next-env.d.ts',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      'tsconfig.json',
      'next-env.d.ts',
      '.husky/**',
    ],
  },
]);
