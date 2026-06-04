import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  perfectionist.configs['recommended-natural'],

  // 🔹 Custom setup
  {
    files: ['src/**/*.ts'],
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
    },

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'tsconfig.json', '*.config.*'],
  },
]);
