var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
function addInfo(fileName,fileUrl,appId,restKey){
  var p=new Promise(function(resolve,reject){
    var tableUrl='https://api2.bmob.cn/1/classes/File'
    var options = {
      method: 'POST',
      headers: {
        'X-Bmob-Application-Id': appId,
        'X-Bmob-REST-API-Key': restKey,
        'Content-Type': 'application/json',
      }
    }
    const req = https.request(tableUrl, options, (res) => {
      console.log(`状态码: ${res.statusCode}`);
      console.log(`响应头: ${JSON.stringify(res.headers)}`);
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`响应主体: ${chunk}`);
      });
      res.on('end', () => {
        console.log('响应中已无数据');
        log('文件链接已经添加到表中')
        log(`表File, 文件名${fileName}, 文件链接${fileUrl}`)
        resolve(true)
      });
    });
    req.on('error', (e) => {
      console.error(`请求遇到问题: ${e.message}`);
    });

    var postData={
      fileName:fileName,
      fileUrl:fileUrl
    }
    postData=JSON.stringify(postData)
    req.write(postData);
    req.end();

  })
  return p
}

module.exports=addInfo
