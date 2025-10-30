
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
  });

  // The main window loads Google
  win.loadURL('https://www.google.com/');

  // Handle requests to open new windows
  win.webContents.setWindowOpenHandler(({ url }) => {
    // This will allow opening new windows.
    // The new window will inherit parent's options by default.
    return { action: 'allow' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Quit when all windows are closed, except on macOS.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
