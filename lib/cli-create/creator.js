const EventEmitter = require('events')
const templateInit = require('./template-init')
const {
  chalk,
  execa,
  log,
  warn,
  hasGit,
  hasProjectGit,
  hasYarn
} = require('../cli-shared-utils')


module.exports = class Creator extends EventEmitter {
  constructor (name, context) {
    super()

    this.name = name
    this.context = context

    this.run = this.run.bind(this)

  }

  async create (cliOptions = {}, templateType) {
    const { run, name, context } = this

    log(`✨  Creating project in ${chalk.yellow(context)}.`)
    this.emit('creation', { event: 'creating' })
    // await 内部触发使用规则 -> 安装依赖 -> 初始化git -> 完成


    await templateInit(name, templateType)

    log()
    log(`🎉  Successfully created project ${chalk.yellow(name)}.`)
    log(
      `👉  Get started with the following commands:\n\n` +
      (this.context === process.cwd() ? `` : chalk.cyan(` ${chalk.gray('$')} cd ${name}\n`)) +
      chalk.cyan(` ${chalk.gray('$')} npm install`)
    )
    log()
    log('npm start')
    this.emit('creation', { event: 'done' })

  }

  run (command, args) {
    if (!args) { [command, ...args] = command.split(/\s+/) }
    return execa(command, args, { cwd: this.context })
  }


  shouldInitGit (cliOptions) {
    if (!hasGit()) {
      return false
    }

    // --no-git
    if (cliOptions.git === false || cliOptions.git === 'false') {
      return false
    }
    // default: true unless already in a git repo
    return !hasProjectGit(this.context)
  }

}
