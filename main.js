const { app, BrowserWindow } = require('electron')
const path = require('path')
//function to craete a window 
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true 
        }
    })
    win.loadFile('index.html')
    win.webContents.openDevTools();
    //quit app when close button clicked 
    win.on('closed',()=> {
        win = null
    })
}

app.whenReady().then(() =>{
    createWindow()
    //open window if no-window is opened 
    app.on('activate', function(){
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

//quit application if all windows are closed 
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})