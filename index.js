require('dotenv').config()
const os = require('os')
const fsPromises = require('fs').promises
const path = os.homedir() + process.env.path + 'OSInfo.txt'

let data = {
  Platform: os.platform(),
  Architecture: os.arch(),
  UserName: os.userInfo().username,
  Uptime: os.uptime(),
}

const saveOsInformationInFile = async (path, data) => {
  await fsPromises
    .writeFile(path, JSON.stringify(data))
    .then(() => console.log('File Has been saved!'))
    .catch((err) => console.error('Failed to save file', err))
}

const readOsInformationFromFile = async (path) => {
  await fsPromises
    .readFile(path, 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.error('Failed to read file', err))
}

saveOsInformationInFile(path, data)
readOsInformationFromFile(path)
