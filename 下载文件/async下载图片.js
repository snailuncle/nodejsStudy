var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
// 下载文件
var fileUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553759443503&di=27018a238c92857a5c9e9f62cd552653&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FM4AEn4hunB0WiaWnOsgic9xia8fryTQkY4k5as3oWmiatibJa83uVwJ0wsaKbHE66Q1e4MKoyphxdp4sKyR2Q9DarJA%2F640%3Fwx_fmt%3Dpng'

function downImg(fileUrl) {
  var promise = new Promise(function (resolve, reject) {
    var file = fs.createWriteStream(path.join(__dirname, 'lufei.png'))
    var req = https.get(fileUrl)
    req.on('response', function (res) {
      var responseData = []
      res.on('data', function (chunk) {
        responseData.push(chunk)
      })
      res.on('end', function () {
        var finalData = Buffer.concat(responseData)
        file.write(finalData)
        file.end()
        log('下载完毕')
        resolve(file)
      })
    })
  })
  return promise
}
(
  async function () {
    log('1')
    var file = await downImg(fileUrl)
    console.log(file)
    log('2')
  }
)()
