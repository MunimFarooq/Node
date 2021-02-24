const fsPromises = require('fs').promises

exports.saveOsInformationInFile = async (path, data) => {
  await fsPromises
    .writeFile(path, JSON.stringify(data))
    .then(() => console.log('File Has been saved!'))
    .catch((err) => console.error('Failed to save file', err))
}

exports.readOsInformationFromFile = async (path) => {
  await fsPromises
    .readFile(path, 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.error('Failed to read file', err))
}
