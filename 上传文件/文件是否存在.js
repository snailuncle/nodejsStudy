var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')

var filePath=path.join(__dirname,'../下载文件/onepiece.png')
log(filePath)
var isFileExists = fs.existsSync(filePath)
log('isFileExists')
log(isFileExists)
