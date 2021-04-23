module.exports = {
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // 自己写一些想配置的规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
    'linebreak-style': 'off', // 忽略检测换行风格
    'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
    'no-param-reassign': ['error', { props: false }], // 允许修改参数中的属性值
    'prefer-destructuring': ['error', { object: true, array: false }], // 允许数组通过下标取值
    'max-len': 'off', // 对象选项
    'no-use-before-define': 'off', // 允许定义之前使用
    'func-names': 'off', // 允许使用匿名函数
    'no-shadow': ['error', { allow: ['state'] }], // 允许对其进行阴影处理
    'import/prefer-default-export': 'off', // 模块只输出一个变量时，是否需要添加default
    'no-plusplus': 'off', // 一元运算符
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 这里写覆盖vue文件的规则
      },
    },
  ],
};
