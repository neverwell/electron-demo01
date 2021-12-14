const { Menu, BrowserWindow } = require('electron')
const template = [
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' }
        ]
    },
    {
        label: 'Hello From Electron!',
        submenu: [
            {
                label: 'I have a custom handler',
                accelerator: 'ctrl+n',
                click() {
                    // console.log('👋')
                    var win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: {
                            nodeIntegration: true, //设置开启nodejs环境
                            contextIsolation: false,
                        }
                    })
                    win.loadFile('yellow.html')
                    win.on('close', () => {
                        win = null
                    })
                }
            },
            { type: 'separator' },
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' }
        ]
    }
]

var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)