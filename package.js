const fs = require('fs')
const path = require('path')
const Zip = require('node-zip')
const zip = new Zip()

function zipFile(file) {
    zip.file(file, fs.readFileSync(path.join('.', file)))
}

zipFile('keyboard.json')
zipFile('index.exe')

const data = zip.generate({base64:false,compression:'DEFLATE'});
fs.writeFileSync('player.zip', data, 'binary')