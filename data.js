const os = require('os')

const data = {
  Platform: os.platform(),
  Architecture: os.arch(),
  UserName: os.userInfo().username,
  Uptime: os.uptime(),
}

module.exports = data
