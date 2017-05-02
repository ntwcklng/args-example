#!/usr/bin/env node

const args = require('args')

args
  .option('fadeout', 'Seconds to fadeout the music', 2)
  .example('music stop --fadeout 4', 'Stop playing music and fadeout after 4 Seconds')
  .example('music stop -f 1', 'Stop playing music and fadeout after 1 Seconds')
  

const flags = args.parse(process.argv)

const fadeOut = flags.fadeout // also available via flags.f (short flag)

console.log(fadeOut)
/* 
 Code for stopping the music
 */
