const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win
let pathName = path.resolve(__dirname, 'build/index.html')

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  pathName = path.resolve(__dirname, '..','public/app.html')
}

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  
  win.loadURL(url.format({
    pathname: pathName,
    protocol: 'file',
    slashes: true,
  }))

  isDev && win.webContents.openDevTools()

  win.on('closed', () => {
    
    win = null
  })
}

app.on('ready', () => {
  createWindow()
  // absolute path
  BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.2_0')
  BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')
})

// Quit when all windows are closed.
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

