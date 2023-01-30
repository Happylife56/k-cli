module.exports = {
  root: true,
  env: {
      node: true,
      browser: true,
      es6: true,
  },
  extends: [
      'plugin:vue/recommended',
      '@vue/airbnb',
  ],
  parserOptions: {
      parser: 'babel-eslint',
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
      // https://eslint.org/docs/rules/linebreak-style#enforce-consistent-linebreak-style-linebreak-style
      'linebreak-style': 'off', // 忽略检测换行风格 详情在这 ↑
      'comma-dangle': 'off',
      'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
      'no-param-reassign': ['error', { props: false }], // 允许修改参数中的属性值
      'prefer-destructuring': ['error', { object: true, array: false }], // 允许数组通过下标取值
      'no-use-before-define': ['error', { functions: false }], // 允许function声明的函数在定义前使用
      'func-names': 'off', // 允许使用function声明匿名函数
      'max-len': ['error', { code: 200 }], // 每一行最多200个字符
      'import/no-extraneous-dependencies': 'off', // 允许import开发依赖
      'vue/html-self-closing': 'off', // 允许空内容使用闭合标签
      'vue/singleline-html-element-content-newline': 'off', // 关闭单行标签的强制换行
      'no-unused-expressions': 'off', // 允许出现未使用的表达式
      'import/extensions': 'off', // 允许import时省略扩展名
      'no-restricted-syntax': 'off', // 关闭 ‘禁止使用指定的语法’
      eqeqeq: 'off', // 关闭强制使用全等于
      'no-plusplus': 'off', // 允许使用++
      'import/no-cycle': 'off', // 允许循环引入
      "no-shadow": ["error", { "allow": ['state'] }]
  }
};
