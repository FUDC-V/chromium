
const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Membuat jendela baru
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
  })

  // Membuka halaman web (misalnya situs islami)
  win.loadURL('https://islamicfinder.org/')
}

// Jalankan saat Electron siap
app.whenReady().then(() => {
  createWindow()

  // Di macOS, buka ulang jika ditutup
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Keluar jika semua jendela ditutup (untuk Linux/Windows)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
