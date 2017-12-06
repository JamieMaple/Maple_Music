const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const isDev = process.env.NODE_ENV === 'development'

let win
let pathname = path.resolve(__dirname, 'build', 'index.html')
if (isDev) {
  pathname = path.resolve(__dirname, '..', 'public/app.html')
}

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    minWidth: 1000,
    height: 630,
    minHeight: 630,
    backgroundColor: '#fff',
    titleBarStyle: 'hiddenInset',
    fullscreen: false,
    frame: false,
    webPreferences: {
      webSecurity: false,
    }
  })
  win.loadURL(url.format({
    pathname: pathname,
    protocol: 'file:',
    slashes: true,
  }))

  isDev && win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()
  if (isDev) {
    if (process.platform === 'darwin') {
      BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.2_0')
      BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')
    } else if (process.platform === 'win32') {
      // BrowserWindow.addDevToolsExtension('')
      BrowserWindow.addDevToolsExtension('C:/Users/maple/AppData/Local/Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')
    }
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

