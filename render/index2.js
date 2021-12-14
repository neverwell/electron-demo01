const btn = this.document.querySelector('#btn')
const { BrowserWindow, Menu } = require('@electron/remote')

var newWin = null

window.onload = function () {
    btn.onclick = function () {
        newWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                nodeIntegration: true, //设置开启nodejs环境
                contextIsolation: false,
            }
        })
        newWin.loadFile('yellow.html')
        newWin.on('close', () => {
            newWin = null
        })
    }
}

var rightTemplate = [
    {
        label: 'Edit',
        accelerator: 'ctrl+n',
    },
    {
        label: 'copy'
    }
]

var m = Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    m.popup()
})