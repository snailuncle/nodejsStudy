// 上传当前文件夹下的图片 myPicture.jpg 实现方法如下（--data-binary的值是文件二进制内容）：
// curl -X POST \
//   -H "X-Bmob-Application-Id: Your Application ID" \
//   -H "X-Bmob-REST-API-Key: Your REST API Key" \
//   -H "Content-Type: image/jpeg" \
//   --data-binary '@myPicture.jpg' \
//   https://api2.bmob.cn/2/files/myPicture.jpg


var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')


function upload(fileName,filePath,appId,restKey){
  console.log("上传文件接收的参数=")
  var filePath=filePath.split(path.sep).join('/');
  log(fileName,filePath,appId,restKey)
  var p=new Promise(
    function(resolve,reject){
      var fileUrl = 'https://api2.bmob.cn/2/files/'+fileName
      var options = {
        method: 'POST',
        headers: {
          'X-Bmob-Application-Id': appId,
          'X-Bmob-REST-API-Key': restKey,
          'Content-Type': 'application/octet-stream',
        }
      }
      var finalData='';
      const req = https.request(fileUrl, options, (res) => {
        console.log(`状态码: ${res.statusCode}`);
        console.log(`响应头: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          console.log(`响应主体: ${chunk}`);
          finalData+=chunk
        });
        res.on('end', () => {
          console.log('响应中已无数据');
          log('finalData=')
          log(finalData)
          var result=JSON.parse(finalData)
          console.log('上传文件后返回的文件链接=')
          console.log(result.url)
          resolve(result.url)
        });
      });
      req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
      });
      fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        console.log('读取文件完毕');
        var postData = data
        // 将数据写入请求主体。
        req.write(postData);
        req.end();
      });

    }
  )
  return p
}

module.exports=upload


// var fileName='jsoup.jar';;
// var filePath='e:/nodejsStudy/转存文件/temp.file';
// var appId='b422d00f953528d3bc412210e5aea3dd';
// var restKey='cfe0096766d3ff8c542842e915b3a83c';

// (async function(){

//   var myFilePath=await upload(fileName,filePath,appId,restKey)
//   console.log('******var filePath=await download(fileName, fileUrl)')
//   console.log(myFilePath)

// })()
