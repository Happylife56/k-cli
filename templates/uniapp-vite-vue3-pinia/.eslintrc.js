module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    './.eslintrc-auto-import.json',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
    'linebreak-style': 'off', // 忽略检测换行风格 详情在这 ↑
    'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
    'prefer-destructuring': ['error', { object: true, array: false }], // 允许数组通过下标取值
    'no-use-before-define': ['error', { functions: false }], // 允许function声明的函数在定义前使用
    'func-names': 'off', // 允许使用function声明匿名函数
    'max-len': ['error', { code: 200 }], // 每一行最多200个字符
    'import/no-extraneous-dependencies': 'off', // 允许import开发依赖
    'vue/html-self-closing': 'off', // 允许空内容使用闭合标签
    'vue/singleline-html-element-content-newline': 'off', // 关闭单行标签的强制换行
    'no-unused-expressions': 'off', // 允许出现未使用的表达式
    'import/extensions': 'off', // 允许import时省略扩展名
    'no-restricted-syntax': 'off', // 关闭 '禁止使用指定的语法'
    eqeqeq: 'off', // 关闭强制使用全等于
    'no-plusplus': 'off', // 允许使用++
    'import/no-cycle': 'off', // 允许循环引入
    'consistent-return': 'off', // 允许任意return值
    'import/no-unresolved': [2, { ignore: ['^@/'] }], // @ 是设置的路径别名
    // 去掉store报错情况
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: 'commit' }],
    'vue/multi-word-component-names': 'off', // 禁用组件名必须多个单词组成的规则
    'no-underscore-dangle': 'off', // 允许使用下划线开头的变量名
    'no-return-assign': ['error', 'except-parens'], // return 后如果有赋值语句，则必须加括号
    'no-param-reassign': 'off', // 允许修改方法中的参数
    'import/prefer-default-export': 'off',
  },
  globals: {
    uni: true,
    // 配置全局变量,
    // 场景: 第三方库中的全局变量(如jq, uni-app...), 如果不配置, 会提示 `使用未定义变量` 错误
    // 配置: ↓ 参考这里, 假设jQuery中的$是全局变量, 就新增配置 `$: true` (以下为例子,可删除)
    $: true,
  },
};
