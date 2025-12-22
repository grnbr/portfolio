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
            'box-shadow',
            'outline',
            'outline-width',
          ],
        },
        message: 'Avoid using px except for borders and shadows.',
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
};
