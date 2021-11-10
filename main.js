require('electron-reload')(__dirname);

const { app, BrowserWindow } = require('electron')
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected!');

});

server.listen(8080, () => {
    console.log('listening on *:8080');
});


const scale = 1
function createWindow () {
	const win = new BrowserWindow({
            width: 800 * scale,
            height: 480 * scale, 
            autoHideMenuBar: true,
            frame: false,
	    fullscreen: true
        })
        //win.webContents.openDevTools()
        win.loadFile('index.html')
        }

app.whenReady().then(() => {
  createWindow()

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
