require('dotenv/config')
const os = require('os')

const {
  saveOsInformationInFile,
  readOsInformationFromFile,
} = require('./helperMethods')

const data = require('./data')
const path = os.homedir() + process.env.PATH_FILE + 'OSInfo.txt'

saveOsInformationInFile(path, data)
readOsInformationFromFile(path)
   