
const path=require('path')
const http=require('http')
const fs=require('fs')

const log=console.log
// jsoup.jar
var fileUrl='http://bmob-cdn-11368.b0.upaiyun.com/2019/03/01/33dd4f2f40b9a65980765ec28535c906.jar'
var filePath=path.join(__dirname,'jsoup.jar')
var file=fs.createWriteStream(filePath)
var responseData=[]
var req=http.get(fileUrl)
req.on('response',function(res){
  res.on('data',function(chunk){
    responseData.push(chunk)
  })
  res.on('end',function(){
    var finalData=Buffer.concat(responseData)
    file.write(finalData)
    file.end()
    log('下载完毕')
  })
})
