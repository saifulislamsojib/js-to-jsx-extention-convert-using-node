const path = require("path");

const convertFilesInFolder = require("./convertFilesInFolder");

const rootFolderPath = "";

const rootFolders = ["components", "context"];

rootFolders.forEach((folder) => {
  convertFilesInFolder(path.join(rootFolderPath, folder));
});
