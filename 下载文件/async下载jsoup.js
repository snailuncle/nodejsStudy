const path = require('path')
const http = require('http')
const fs = require('fs')
const stream = require('stream');
const log = console.log
// jsoup.jar
var fileUrl = 'http://bmob-cdn-11368.b0.upaiyun.com/2019/03/01/33dd4f2f40b9a65980765ec28535c906.jar'
var filePath = path.join(__dirname, 'jsoup.jar')
var file = fs.createWriteStream(filePath)
var responseData = []

function downJsoup() {
  var promise = new Promise(
    function (resolve, reject) {
      var req = http.get(fileUrl)
      req.on('response', function (res) {
        console.dir('content-length =', +res.headers['content-length'])
        fs.unlink(filePath, (err) => {
          if ( err && err.code==='ENOENT') {
            console.log(err.code)
            console.log('文件已删除');
            res.on('data', function (chunk) {
              // console.log('got %d bytes of data', chunk.length);
              // chunk.pipe(file)

              toStream(chunk).pipe(file)

            })
            res.on('end', function () {
              var finalData = Buffer.concat(responseData)
              file.write(finalData)
              file.end()
              log('保存完毕')
              resolve('ok')
            })

          }
        });
      })
    }
  )
  return promise
}
(
  async function () {
    log('开始')
    var result = await downJsoup()
    log(result)
    log('结束')
  }
)()

function toStream(chunk){
  // 创建一个bufferstream
  var bufferStream = new stream.PassThrough();
  //将Buffer写入
  bufferStream.end(chunk);
  //进一步使用
  return bufferStream
}
