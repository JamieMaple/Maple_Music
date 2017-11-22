const packager = require('electron-packager')
const open = require('open')
const path = require('path')

packager({
  dir: path.resolve(__dirname, '..', 'app'),
  prune: true,
  name: 'MapleMusic'
  },
  (err, appPaths) => {
    if (err) throw err
    console.log('finished')
})