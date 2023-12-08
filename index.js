const path = require("path");

const convertFilesInFolder = require("./convertFilesInFolder");

const rootFolderPath =
  "C:/Users/saifu/Desktop/projects/memory-makers-photography/src";

const rootFolders = ["components", "context"];

rootFolders.forEach((folder) => {
  convertFilesInFolder(path.join(rootFolderPath, folder));
});
