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
var appId = 'f39de735666d2718117defb5cc090ca3'
var restKey = '200274dc0d52dcc191cefb8baff7a5f9'
var fileUrl = 'https://api2.bmob.cn/2/files/onepiece.png'
var options = {
  method: 'POST',
  headers: {
    'X-Bmob-Application-Id': appId,
    'X-Bmob-REST-API-Key': restKey,
    'Content-Type': 'application/octet-stream',
  }
}
const req = https.request(fileUrl, options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  var finalData=''
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
    finalData+=chunk
  });
  res.on('end', () => {
    console.log('响应中已无数据');
    log(res)
    log(finalData)
    var result=JSON.parse(finalData)
    console.log(result.url)
    // resolve(result.url)
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});
var filePath = path.join(__dirname, '../下载文件/onepiece.png')
log(filePath)
fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  console.log('读取文件完毕');
  var postData = data
  // 将数据写入请求主体。
  req.write(postData);
  req.end();
});
