#!/usr/bin/env node

const args = require('args')

args
  .command('play', 'Play Music')
  .command('stop', 'Stop playing Music')
  .example('music play file.mp3 --level 6', 'Play file.mp3 with volume level 6')

const flags = args.parse(process.argv)

console.log(flags)