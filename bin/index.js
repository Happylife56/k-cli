#!/usr/bin/env node

// 命令行交互
const { program } = require('commander')
// log色彩
const chalk = require('chalk')
// 对比字符串
const leven = require('leven')
// package.json
const packages = require('../package')
// creator
const creator = require('../lib/cli-create')

program
  .version(`k-cli ${packages.version}`)
  .command('create <name>')
  .description('初始化模板')
  .action((projectName, cmd) => {
    const options = cleanArgs(cmd)
    creator(projectName, options)
  })

// 其他指令


/* 说明: copy  https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js */
// output help information on unknown commands
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    suggestCommands(cmd)
  })
// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`create-cli <command> --help`)} 查看更多指令.`)
  console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

program.parse(process.argv)

// 没有输入任何命令时，会做提醒
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

function suggestCommands(unknownCommand) {
  const availableCommands = program.commands.map(cmd => cmd._name)

  let suggestion

  availableCommands.forEach(cmd => {
    const isBestMatch = leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
    if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
      suggestion = cmd
    }
  })

  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
  }
}

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs(cmd = {}) {
  console.log('cmd: ', cmd);
  const args = {}
  const { options = [] } = {}
  options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}