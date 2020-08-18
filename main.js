const { app, BrowserWindow } = require('electron')
const url = require('url');
const path = require('path');


// TODO THis is fine for testing, but for real world usage
// this MUST be changed to import the local jmwalletd.py server
// certificate.
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        //icon: url.format({pathname: path.join(__dirname, `dist/assets/joinmarket_logo.png`), protocol: "file:", slashes: true})
    }) 
    
    win.loadURL(url.format({pathname: path.join(__dirname, `dist/index.html`), protocol: "file:", slashes: true}));

    // uncomment below to open the DevTools
    // win.webContents.openDevTools()

    win.on('closed', function(){
        win = null;
    })

}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function(){
    if (win == null){
        createWindow()
    }
})