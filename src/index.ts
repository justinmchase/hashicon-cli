import fs from 'fs'
import path from 'path'
import hashicon from 'hashicon'
import { createCanvas } from 'canvas'

import yargs from 'yargs'

const argv = yargs
  .nargs('hash', 1)
  .option('data-url', {
    alias: 'd',
    describe: 'True to print out a data-url to stdout',
    boolean: true
  })
  .option('out', {
    alias: 'o',
    describe: 'Path to file to write the image (png) to',
    string: true
  })
  .help('help')
  .argv

const { _: [hash], dataUrl, out } = argv
    
const icon = hashicon(hash, { createCanvas })
if (out) {

  const fullPath = path.resolve(out)
  fs.writeFileSync(fullPath, icon.toBuffer())
}

if (dataUrl) {
  console.log(icon.toDataURL())
}
