// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent':'off',
    'semi':'off',
    'quotes':'off',
    'space-before-function-paren':'off',
    'eol-last':'off',
    'no-trailing-spaces':'off',
    'key-spacing':'off',
    'comma-dangle':'off',
    'space-before-blocks':'off',
    'spaced-comment':'off',
    'no-multiple-empty-lines':'off',
    'no-tabs':'off',
    'no-unused-vars':'off',
    'func-call-spacing':'off',
    'space-infix-ops':'off',
    'padded-blocks':'off',
    'no-multi-spaces':'off',
    'padded-blocks':'off',
    'block-spacing':'off',
    'no-new':'off',
    'keyword-spacing':'off'
  }
}
