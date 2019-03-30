var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')

var fileName='jsoup.jar'
var fileUrl='http://bmob-cdn-11368.b0.upaiyun.com/2019/03/01/33dd4f2f40b9a65980765ec28535c906.jar'

function download(fileName,fileUrl,filePath){
  console.log('download(fileName,fileUrl,filePath){')
  console.log(fileName,fileUrl,filePath)
  var filePath=filePath || (path.join(__dirname,'./temp.file'))
  // 下载文件
  // 第一步删除文件,如果文件存在的话
  var p = new Promise(function (resolve, reject) {
    log('第一步删除文件开始')
      var isFileExists = fs.existsSync(filePath)
      if (isFileExists) {
        fs.unlink(filePath, (err) => {
          if (err) {
            log('删除文件发生错误,抛出reject')
            reject(err)
          }
          log('文件已删除')
          log('第一步删除文件结束--删除文件')

          resolve(true)
        })
      }
      log('文件不存在')
      log('第一步删除文件结束--文件不存在')

      resolve(true)
    })
    // 第二步 创建文件写入流
    .then(function (data) {
      log('第二步创建文件写入流开始')

      var p = new Promise(
        function (resolve, reject) {
          console.log(data)
          // 创建可写流  用来写入图片
          var fileStream = fs.createWriteStream(filePath)
          log('文件路径=' + filePath)
          log('第二步创建文件写入流结束')

          resolve(fileStream)
        }
      )
      return p
    })
    // 第三步  下载保存文件
    .then(function (fileStream) {
      log('第三步下载保存文件开始')

      console.log(fileStream)
      var responseData = []
      console.log('responseData=')
      console.log(responseData)
      var p = new Promise(
        function (resolve, reject) {
          console.log('http.get(fileUrl)')
          console.log(fileUrl)
          var res = http.get(fileUrl)
          res.on('response', function (res) {
            console.dir('content-length =', +res.headers['content-length'])
            res.on('data', function (chunk) {
              responseData.push(chunk)
            })
            res.on('end', function () {
              var finalData = Buffer.concat(responseData)
              fileStream.write(finalData)
              fileStream.end()
              log('保存完毕')
              console.log('最终返回值filePath=')
              console.log(filePath)
              // return filePath
              log('第三步下载保存文件开始')

              resolve(filePath)
            })
          })
        }
      )
      console.log('下载文件p=')
      console.log(p)
      return p
    })
    .catch(
      function (err) {
        log('发生错误')
        log(err)
      }
    )
  return p
}



module.exports=download

// (async function(){

//   var filePath=await download(fileName, fileUrl)
//   console.log('******var filePath=await download(fileName, fileUrl)')
//   console.log(filePath)

// })()

