var program = require('commander');
const chalk = require('chalk')
const packages = require('../package')
const creator = require('../lib/cli-create')

program
  .version(`k-cli ${packages.version}`)
  .command('create <name>')
  .description('初始化模板')
  .action((projectName, cmd) => {
    // const options = cleanArgs(cmd)
    // creator(projectName, options)
    creator(projectName, {})
  })

  function cleanArgs (cmd) {
    const args = {}
    cmd.options.forEach(o => {
      const key = camelize(o.long.replace(/^--/, ''))
      // if an option is not present and Command has a method with the same name
      // it should not be copied
      if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
        args[key] = cmd[key]
      }
    })
    return args
    }
  program.parse(process.argv);