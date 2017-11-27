const packager = require('electron-packager')
const path = require('path')

packager({
    dir: path.resolve(__dirname, '..', 'app'),
    out: './dist',
    name: 'MapleDemo',
    all: true,
    overwrite: true,
  }, (err, appPaths) => {
    if (err) throw err
    console.log('finished')
  }
)