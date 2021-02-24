const fs = require('fs')
const pathCore = require('path')

exports.saveOsInformationInFile = async (path, data) => {
  try {
    if (fs.existsSync(path)) {
      console.log('File Already Exists...')
    } else {
      if (fs.existsSync(pathCore.dirname(path))) {
        await fs.promises.writeFile(path, JSON.stringify(data))
        console.log('File has been saved!')
      } else {
        fs.mkdir(pathCore.dirname(path), { recursive: true }, (err) => {
          if (err) throw err
        })
        await fs.promises.writeFile(path, JSON.stringify(data))
        console.log('File has been saved!')
      }  
    }
  } catch (error) {
    console.error('Failed to save file', error)
  }
} 

exports.readOsInformationFromFile = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8')
    console.log(data)
  } catch (error) { 
    console.error('Failed to read file', error)
  }
}
