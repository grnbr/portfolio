import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import typescriptParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

export default defineConfig([
  // 🔹 Base ESLint + TypeScript + Airbnb + Prettier
  eslint.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'next/typescript',
    'prettier',
  ),
  perfectionist.configs['recommended-natural'],

  // 🔹 Custom setup
  {
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
    },

    rules: {
      // ⚙️ General JS/TS
      'prefer-const': 'error',
      'no-console': 'warn',
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
      'no-use-before-define': ['error', { variables: true }],

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
      '@stylistic/max-len': ['error', { code: 80 }],
      'jsx-quotes': ['error', 'prefer-double'],

      // 📦 Import organization
      // 'import/order': 'off',
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
      'import/no-unresolved': 'error',

      // ⚛️ React
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off',
    },

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      'import/resolver': { typescript: {} },
    },
  },
  {
    ignores: [
      'eslint.config.*',
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
