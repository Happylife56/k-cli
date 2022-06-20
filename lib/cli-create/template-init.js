const { error } = require('../cli-utils')
const path = require('path')
const fs = require('fs-extra')

const methods = {
  'vue2Element': {
    dir: '../../templates/vue-element'
  },
  'vueElementPlus': {
    dir: '../../templates/vue-element-plus'
  },
  'viteVueElementPlus': {
    dir: '../../templates/vite-vue3-element'
  },
  'viteVueElementPlusPinia': {
    dir: '../../templates/vite-vue3-element-pinia'
  },
  'uniappVite': {
    dir: '../../templates/uniapp-vite-vue3-pinia'
  },
  'viteVant': {
    dir: '../../templates/vite-vant'
  },
  'viteVantPinai': {
    dir: '../../templates/vite-vant-pinia'
  },
  'viteJestCypress': {
    dir: '../../templates/vite-jest-cypress'
  },
  'wechatWeap': {
    dir: '../../templates/wechat-weap'
  },
  'taroVue': {
    dir: '../../templates/taro-vue'
  }
}

async function templateInit(projectName, templateType) {
  // 创建文件夹 复制文件 ok
  await init(projectName, methods[templateType].dir)
}
async function init(projectName, dir) {
  //
  const src = path.resolve(__dirname, dir);

  const dest = path.resolve(process.cwd(), projectName);

  // 复制模板文件
  await fs.copy(src, dest)

  const packagePath = `${dest}/package.json`
  fs.readFile(packagePath, (err, file) => {
    let fileObj = JSON.parse(file)
    fileObj.name = projectName
    fs.writeFile(packagePath, JSON.stringify(fileObj, "", "\t"))
  })
}


module.exports = (...args) => {
  return templateInit(...args).catch(err => {
    error(err)
  })
}
