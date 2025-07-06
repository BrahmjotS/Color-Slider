const { app, BrowserWindow, globalShortcut } = require("electron"); // Added globalShortcut
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 550,
    height: 550,
    fullscreenable: false,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));

  globalShortcut.register("F11", () => {});

  globalShortcut.register("CommandOrControl+R", () => {});

  globalShortcut.register("F5", () => {});

  globalShortcut.register("CommandOrControl+Shift+I", () => {});
  globalShortcut.register("CommandOrControl+Alt+I", () => {});

  win.on("closed", () => {
    globalShortcut.unregisterAll();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
  globalShortcut.unregisterAll();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
