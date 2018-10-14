const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

const { exec } = require('child_process');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

ipcMain.on('runPy', (event) => {
  exec('./py.sh', (err, stdout) => {
    if (err) {
      event.returnValue = err;
    } else {
      event.returnValue = stdout;
    }
  });
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1080, height: 720 });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
