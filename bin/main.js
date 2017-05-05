const { app, protocol, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});

  protocol.interceptFileProtocol('file', (request, callback) => {
    const requestedPath = request.url.replace('file://', '');

    const filePath = fs.existsSync(requestedPath) ? requestedPath : path.join(
      path.resolve('.'),
      path.relative(__dirname, requestedPath)
    );

    callback({ path: filePath });
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
