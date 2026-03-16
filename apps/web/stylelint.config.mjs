/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'unit-disallowed-list': [
      ['px'],
      {
        ignoreProperties: {
          px: [
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-radius',
            'box-shadow',
            'outline',
            'outline-width',
            'top',
            'right',
            'bottom',
            'left',
            'inset',
            'inset-block',
            'inset-inline',
            'transform',
            'width',
            'height',
            'filter',
            'backdrop-filter',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'padding-block',
            'padding-block-start',
            'padding-block-end',
            'padding-inline',
            'padding-inline-start',
            'padding-inline-end',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-block',
            'margin-block-start',
            'margin-block-end',
            'margin-inline',
            'margin-inline-start',
            'margin-inline-end',
          ],
        },
        message: 'Avoid using px',
      }
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
