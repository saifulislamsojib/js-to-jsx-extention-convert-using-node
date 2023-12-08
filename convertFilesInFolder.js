const fs = require("fs");
const path = require("path");

let count = 0;

const convertFilesInFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Error checking file stat for ${filePath}:`, err);
          return;
        }

        if (stat.isDirectory()) {
          // Recursively process subfolders
          convertFilesInFolder(filePath);
        } else if (file.endsWith(".js")) {
          const newPath = filePath.replace(/\.js$/, ".jsx");

          fs.rename(filePath, newPath, (err) => {
            if (err) {
              console.error(`Error renaming file ${file}:`, err);
            } else {
              count++;
              console.log(
                `${count}. File ${file} renamed to ${path.basename(newPath)}`
              );
            }
          });
        }
      });
    });
  });
};

module.exports = convertFilesInFolder;
