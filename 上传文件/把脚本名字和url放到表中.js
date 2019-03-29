// curl -X PUT \
//     -H "X-Bmob-Application-Id: Your Application ID" \
//     -H "X-Bmob-REST-API-Key: Your REST API Key" \
//     -H "Content-Type: application/json" \
//     -d '{"score":73453, "file":{
//         "__type": "File",
//         "group": "group1",
//         "filename": "myPicture.jpg",
//         url: "http://bmob-cdn-24.b0.upaiyun.com/2016/04/14/9306f2e74090d668801eac8814b3f56f.jpg"
//     }}' \
// https://api2.bmob.cn/1/classes/GameScore/e1kXT22L



var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
var appId = 'f39de735666d2718117defb5cc090ca3'
var restKey = '200274dc0d52dcc191cefb8baff7a5f9'
var fileUrl = 'https://api2.bmob.cn/1/classes/File'
var options = {
  method: 'POST',
  headers: {
    'X-Bmob-Application-Id': appId,
    'X-Bmob-REST-API-Key': restKey,
    'Content-Type': 'application/json',
  }
}
const req = https.request(fileUrl, options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据');
  });
});
req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

var postData={"score":73453, "file":{
  "__type": "File",
  "group": "group1",
  "filename": "myPicture.jpg",
  url: "http://bmob-cdn-24.b0.upaiyun.com/2016/04/14/9306f2e74090d668801eac8814b3f56f.jpg"
}}
postData=JSON.stringify(postData)
req.write(postData);
req.end();


// D:\nodejs\node.exe --inspect-brk=44984 上传文件\把脚本名字和url放到表中.js
// Debugger listening on ws://127.0.0.1:44984/7e275363-77a4-4954-a2b4-9b6d316cac77

// For help, see: https://nodejs.org/en/docs/inspector

// Debugger attached.

// (node:3248) [INSPECTOR_ASYNC_STACK_TRACES_NOT_AVAILABLE] Warning: Warning: Async stack traces in debugger are not available on 32bit platforms. The feature is disabled.
// 状态码: 201
// 响应头: {"date":"Fri, 29 Mar 2019 09:39:36 GMT","access-control-allow-credentials":"true","access-control-allow-origin":"*","content-type":"application/json;charset=UTF-8","location":"https://api2.bmob.cn/1/classes/File/880ac2fa47","content-length":"59","x-via":"1.1 chzhwt158:0 (Cdn Cache Server V2.0)","connection":"close"}
// 响应主体: {"createdAt":"2019-03-29 17:39:36","objectId":"880ac2fa47"}
// 响应中已无数据
