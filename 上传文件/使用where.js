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

// https://api2.bmob.cn/1/classes/GameScore?where={"name":"Lily"}
// https://api2.bmob.cn/1/classes/GameScore?where=%7B%22name%22:%22Lily%22%7D

// https://api2.bmob.cn/1/classes/File?where={"file":{"filename":"myPicture.jpg"}}
// filename=myPicture.jpg
// https://api2.bmob.cn/1/classes/File?where={"score":66666}

var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
var appId = 'f39de735666d2718117defb5cc090ca3'
var restKey = '200274dc0d52dcc191cefb8baff7a5f9'
var where='where={"file":{"filename":"myPicture.jpg"}}'
// var fileUrl='https://api2.bmob.cn/1/classes/File?where={"score":66666}'
var fileUrl='https://api2.bmob.cn/1/classes/File?'+where
log(fileUrl)
var fileUrl = encodeURI(fileUrl)
log(fileUrl)
var options = {
  method: 'GET',
  headers: {
    'X-Bmob-Application-Id': appId,
    'X-Bmob-REST-API-Key': restKey
  }
}
log(options.headers)
const req = https.request(fileUrl, options, (res) => {
  console.log(`请求的url=${fileUrl}`)
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

// var postData={"score":66666}
// postData=JSON.stringify(postData)
// req.write(postData);
req.end();

// D:\nodejs\node.exe --inspect-brk=28334 上传文件\查询一条数据.js
// Debugger listening on ws://127.0.0.1:28334/a6c90a1e-c1ad-4f99-a6e2-546860f46f11

// For help, see: https://nodejs.org/en/docs/inspector

// Debugger attached.

// (node:4456) [INSPECTOR_ASYNC_STACK_TRACES_NOT_AVAILABLE] Warning: Warning: Async stack traces in debugger are not available on 32bit platforms. The feature is disabled.
// 状态码: 200
// 响应头: {"date":"Fri, 29 Mar 2019 09:59:16 GMT","access-control-allow-credentials":"true","access-control-allow-origin":"*","content-length":"266","content-type":"application/json; charset=utf-8","x-via":"1.1 chzhwt160:2 (Cdn Cache Server V2.0)","connection":"close"}
// 响应主体: {"createdAt":"2019-03-29 17:39:36","file":{"__type":"File","filename":"myPicture.jpg","group":"group1","url":"http://bmob-cdn-24.b0.upaiyun.com/2016/04/14/9306f2e74090d668801eac8814b3f56f.jpg"},"objectId":"880ac2fa47","score":66666,"updatedAt":"2019-03-29 17:56:09"}
// 响应中已无数据


// {X-Bmob-Application-Id: "f39de735666d2718117defb5cc090ca3", X-Bmob-REST-API-Key: "200274dc0d52dcc191cefb8baff7a5f9"}
// 使用where.js:34
// (node:

