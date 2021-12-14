var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var BrowserView = electron.BrowserView
var globalShortcut = electron.globalShortcut
// const { app, BrowserWindow } = require('electron')
// const path = require('path')

var mainWindow = null

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true, //设置开启nodejs环境
            contextIsolation: false,
            enableRemoteModule: true
            // preload: path.join(__dirname, './render/index3.js')
        }
    })
    require('@electron/remote/main').initialize()
    require("@electron/remote/main").enable(mainWindow.webContents)
    require('./main/menu')
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile('index7.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })


    const view = new BrowserView({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    mainWindow.setBrowserView(view)
    view.setBounds({ x: 0, y: 250, width: 300, height: 800 })
    view.webContents.loadURL('https://electronjs.org')


    globalShortcut.register('ctrl+e', () => {
        mainWindow.loadURL('https://www.baidu.com')
    })
    let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'registration Success' : 'registration failed'
    console.log('--------------->>>>>>' + isRegister)

    globalShortcut.register('CommandOrControl+Y', () => {
        console.log('The global shortkey was pressed!')
    })

})


app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('CommandOrControl+Y')

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
})