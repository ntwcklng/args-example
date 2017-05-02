#!/usr/bin/env node

const args = require('args')

args
  .option('level', 'Volume level', 10)
  .option('file', 'Musicfile', 'file.mp3')
  .example('music play --file song.mp3 --level 2', 'Start playing song.mp3 with volume level 2')
  .example('music play -f another-song.mp3 -l 2', 'Start playing another-song.mp3 with volume level 2')

const flags = args.parse(process.argv)

const volumeLevel = flags.level // also available via flags.l (short flag)
const musicFile = flags.file // also available via flags.f (short flag)

console.log(volumeLevel, musicFile)
/* 
 Code for playing the music
*/

