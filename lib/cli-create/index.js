const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const creator = require('./creator')
const { chalk, error, stopSpinner } = require('../cli-utils')
const validateProjectName = require('validate-npm-package-name')

async function create(projectName, options) {

  const cwd = options.cwd || process.cwd()
  const targetDir = path.resolve(cwd, projectName || '.')

  const result = validateProjectName(projectName)
  if (!result.validForNewPackages) {
    console.error(chalk.red(`不规范的项目名称: "${projectName}"`))
    result.errors && result.errors.forEach(err => {
      console.error(chalk.red.dim('Error: ' + err))
    })
    result.warnings && result.warnings.forEach(warn => {
      console.error(chalk.red.dim('Warning: ' + warn))
    })
    // exit(1)
    return
  }
  if (fs.existsSync(targetDir)) {
    error('目录已经存在')
    return
  }

  // 选择模板 -> await 内部触发使用规则 -> 安装依赖 -> 初始化git -> 完成
  const { templateType } = await inquirer.prompt([
    {
      name: 'templateType',
      type: 'list',
      message: `选择需要使用的模板?`,
      choices: [
        { name: 'vue-element', value: 'vue2Element' },
        { name: 'vue-element2', value: 'vue2Element2' },
        { name: 'vue-elementPlus', value: 'vueElementPlus' },
        { name: 'vite-vue3-elementPlus', value: 'viteVueElementPlus' },
        { name: 'vite-vue3-elementPlus-pinia', value: 'viteVueElementPlusPinia' },
        { name: 'uniapp-vite-vue3-pinia', value: 'uniappVite' },
        { name: 'vite-vant', value: 'viteVant' },
        { name: 'vite-vant-pinia', value: 'viteVantPinia' },
        { name: 'vite-jest-cypress', value: 'viteJestCypress' },
        { name: '微信小程序', value: 'wechatWeap' },
        { name: 'taro-vue', value: 'taroVue' },
      ]
    }
  ])

  if (!templateType) {
    error('未选择模板类型')
    return
  }

  const instance = new creator(projectName, targetDir)
  await instance.create({ ...options }, templateType)
}

module.exports = (...args) => {
  return create(...args).catch(err => {
    stopSpinner(false) // do not persist
    error(err)
  })
}
