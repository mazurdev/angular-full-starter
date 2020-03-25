const util = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFile);
const jsoncObj = require('jsonc');

const folderInput = './src/assets/db-source/';
const folderOutput = './src/assets/db/';
filesInput = [
  'home.json'
];
(async () => {
  try {
    copyFiles(folderInput, folderOutput, filesInput).then(() => {
    }).catch(err => {
      console.log(err);
    });
    for (const i of filesInput) {
      const pathsFiles = path.join(folderOutput + i);
      const readFiles = await jsoncObj.jsonc.read(pathsFiles);
      const lineConvertedFiles = jsoncObj.jsonc.stringify(readFiles);
      const compressFiles = jsoncObj.jsonc.uglify(lineConvertedFiles);
      // console.log('compressFiles', compressFiles);
      const beautifyFiles = jsoncObj.jsonc.beautify(compressFiles);
      const normalizeFiles = jsoncObj.jsonc.stripComments(beautifyFiles);
      const parseFiles = jsoncObj.jsonc.parse(normalizeFiles);
      // console.log('parseFiles', parseFiles);
      await jsoncObj.jsonc.write(folderOutput + i, parseFiles);
    }
    console.log('Successfully compress JSON file');
  } catch (err) {
    console.log('Failed to read JSON file', err);
  }
})();

function copyFiles(srcDir, destDir, files) {
  return Promise.all(files.map(f => {
    return copyFilePromise(path.join(srcDir, f), path.join(destDir, f));
  }));
}
