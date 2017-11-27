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
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#fff',
    titleBarStyle: 'hiddenInset',
    fullscreen: false
  })
  win.loadURL(url.format({
    pathname: pathname,
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  isDev && win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()
  if (isDev) {
    // devtools
    BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.2_0')
    BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

