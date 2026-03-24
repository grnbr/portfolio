/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'unit-disallowed-list': [
      ['px'],
      {
        ignoreProperties: {
          px: [
            '/^border/',
            '/^outline/',
            '/^padding/',
            '/^margin/',
            '/^inset/',
            '/^flex/',
            'box-shadow',
            'transform',
            'width',
            'height',
            'filter',
            'backdrop-filter',
            'top',
            'right',
            'bottom',
            'left',
          ],
        },
        message: 'Avoid using px',
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'themecss'],
      },
    ],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'at-rule-empty-line-before': null,
  },

  overrides: [
    {
      files: ['src/styles/utils/tokens/**/*.scss'],
      rules: {
        'unit-disallowed-list': null,
      },
    },
  ],
};
