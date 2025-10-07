import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['airbnb', 'airbnb/hooks', 'next/typescript', 'prettier'],
    plugins: ['@stylistic'],
    rules: {
      // General JS/TS rules
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
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['camelCase', 'PascalCase'],
          prefix: ['is', 'has', 'can', 'should', 'did', 'will'],
        },
      ],

      // Stylistic
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/max-len': ['error', { code: 80 }],
      'jsx-quotes': ['error', 'prefer-double'],

      // Import order
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',

      // React
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      projectService: true,
    },
    env: {
      browser: true,
      es2024: true,
      node: true,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  }),
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
];

export default eslintConfig;
