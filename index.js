const list = require('./list')
const replaceAll = require('../string-replace-all')

module.exports = string => {
  const keys = Object.keys(list)
  const length = keys.length
  let index = -1
  while (++index < length) {
    const key = keys[index]
    const char = list[key]
    string = replaceAll(string, key, char)
  }
  return string
}
