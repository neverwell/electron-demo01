const { shell } = require('electron')
// const { BrowserWindow } = require('@electron/remote')

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#open-github').onclick = () => {
    shell.openExternal('https://github.com')
  }

  document.querySelector('#open-folder').onclick = () => {
    shell.showItemInFolder(__dirname)
  }

  document.querySelector('#beep').onclick = () => {
    shell.beep()
  }

  document.querySelector('#mybtn').onclick = () => {
    window.open('./popup_page.html')
  }

  // document.querySelector('#newWin').onclick = () => {
  //   var newWin = new BrowserWindow({
  //     width: 500,
  //     height: 500,
  //     webPreferences: {
  //       nodeIntegration: true, //设置开启nodejs环境
  //       contextIsolation: false,
  //     }
  //   })
  //   newWin.loadFile('yellow.html')
  //   newWin.on('close', () => {
  //     newWin = null
  //   })
  // }
})

window.addEventListener('message', (e) => {
  let mytext = document.querySelector('#mytext')
  mytext.innerHTML = JSON.stringify(e.data)

})
