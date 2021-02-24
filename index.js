require('dotenv').config()
const os = require('os')

const {
  saveOsInformationInFile,
  readOsInformationFromFile,
} = require('./helperMethods')

const data = require('./data')
const path = os.homedir() + process.env.path + 'OSInfo.txt'

saveOsInformationInFile(path, data)
readOsInformationFromFile(path)
