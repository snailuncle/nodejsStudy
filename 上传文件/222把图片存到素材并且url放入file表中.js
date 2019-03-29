var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
var appId = 'f39de735666d2718117defb5cc090ca3'
var restKey = '200274dc0d52dcc191cefb8baff7a5f9'
var imgUrl="http://bmob-cdn-11368.b0.upaiyun.com/2019/03/29/5b5817f6404fde54805b743020341b84.png"
var imgName='darkKing.jpeg'
var fileUrl='https://api2.bmob.cn/1/classes/File'
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

var postData={
  imgName:imgName,
  imgUrl:imgUrl
}
postData=JSON.stringify(postData)
req.write(postData);
req.end();
