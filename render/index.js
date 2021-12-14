var fs = require('fs')
window.onload = function(){
    var btn = this.document.querySelector('#btn')
    var names = this.document.querySelector('#names')
    btn.onclick = function(){
        fs.readFile('names.txt',(err,data)=>{
            names.innerHTML = data
        })
    }
}