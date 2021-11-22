module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  ignorePatterns: [
    '**/assets/**/*.*',
    '*.css',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single', {
        'allowTemplateLiterals': true,
      },
    ],
    'semi': [
      'error',
      'never',
    ],
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
    'vue/eqeqeq': [
      'error',
      'always',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    'jest/no-done-callback': 0,
  },
}
