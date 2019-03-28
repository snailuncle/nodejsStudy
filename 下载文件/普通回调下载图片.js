var log=console.log
const path=require('path')
const fs=require('fs')
const https=require('https')

// 下载文件
var fileUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553759443503&di=27018a238c92857a5c9e9f62cd552653&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FM4AEn4hunB0WiaWnOsgic9xia8fryTQkY4k5as3oWmiatibJa83uVwJ0wsaKbHE66Q1e4MKoyphxdp4sKyR2Q9DarJA%2F640%3Fwx_fmt%3Dpng'
var filePath=path.join(__dirname,'onepiece.png')
var responseData=[]
// 创建可写流  用来写入图片
var file=fs.createWriteStream(filePath)
// 一个异步的get请求
/**
 * @param {Sring} fileUrl
 * @param {Function} callback 回调里面的参数是response
 */
// res接收到数据,触发data事件,数据块存到数组中,
// 没有数据之后触发end事件,拼接数据块,写入文件
var req=https.get(fileUrl,function (res){
  res.on('data',function(chunk){
    responseData.push(chunk)
  })
  res.on('end',function(){
    var finalData=Buffer.concat(responseData)
    file.write(finalData)
    file.end()
  })
}).on('error',(e)=>{
  log('请求异常')
  log(e.message)
})
