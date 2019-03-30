const path=require('path')
const download = require('./下载文件.js')
const upload = require('./上传文件.js')
const addToTable = require('./把图片链接放到表里.js')

var config = {
  app1: {
    appId: 'f39de735666d2718117defb5cc090ca3',
    restKey: '200274dc0d52dcc191cefb8baff7a5f9'
  },
  app2: {
    appId: 'b422d00f953528d3bc412210e5aea3dd',
    restKey: 'cfe0096766d3ff8c542842e915b3a83c'
  },
}

var fileName = 'jsoup.jar'
var fileUrl = 'http://bmob-cdn-11368.b0.upaiyun.com/2019/03/01/33dd4f2f40b9a65980765ec28535c906.jar'
console.log('fileUrl=')
console.log(fileUrl)
async function moveFile(fileName,fileUrl) {
  console.log('moveFile 内部 fileUrl=')
  console.log(fileUrl)
  console.log('moveFile')
  console.log('fileName,fileUrl')
  console.log(fileName, fileUrl)
  var filePath = await download(fileName, fileUrl)
  console.log('download result=')
  console.log(filePath)
  filePath = filePath.split(path.sep).join('/');

  console.log(fileName, filePath, config.app2.appId, config.app2.restKey)
  var fileUrl = await upload(fileName, filePath, config.app2.appId, config.app2.restKey)
  console.log('upload result=')
  console.log(filePath)
  await addToTable(fileName,fileUrl,config.app2.appId,config.app2.restKey)
  console.log('文件转移完毕, 从app1转移素材到app2')
  return true
}


moveFile(fileName,fileUrl)
