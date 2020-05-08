import fs from 'fs'
import path from 'path'
import hashicon from 'hashicon'
import { createCanvas } from 'canvas'

import yargs from 'yargs'

const app = yargs
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
  .example('hashicon "Hello World!" -o out.png', '')
  .showHelpOnFail(true)

const argv = app.argv
const { _: [hash], dataUrl, out } = argv

if (!hash) {
  console.log('A string to hash is required')
  console.log()

  app.showHelp()
  process.exit(1)
}

if (!out && !dataUrl) {
  console.log('Please specify -o or -d for output format')
  console.log()

  app.showHelp()
  process.exit(1)
}

const icon = hashicon(hash, { createCanvas })
if (out) {
  const fullPath = path.resolve(out)

  const ext = path.extname(fullPath)
  const stream = (() => {
    switch (ext.toLowerCase()) {
      case '.jpg':
      case '.jpeg':
        return icon.createJPEGStream()
      case '.png':
      default:
        return icon.createPNGStream()
    }
  })()
  stream.pipe(fs.createWriteStream(fullPath, 'binary'))
}

if (dataUrl) {
  console.log(icon.toDataURL())
}
