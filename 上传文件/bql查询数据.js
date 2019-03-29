// `select * from _User where username= smile`

// curl -X GET \
//     -H "X-Bmob-Application-Id: Your Application ID" \
//     -H "X-Bmob-REST-API-Key: Your REST API Key" \
//   -G \
//   --data-urlencode 'bql=select * from Player limit 0,100 order by name' \
//   --data-urlencode 'bql=select * from File where score= 666666' \
//   https://api2.bmob.cn/1/cloudQuery
//   'bql=select * from File where score= 666666'

var log = console.log
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
var appId = 'f39de735666d2718117defb5cc090ca3'
var restKey = '200274dc0d52dcc191cefb8baff7a5f9'
// var where='bql=select * from File where score=666666'
// var where='where={"file":{"filename":"myPicture.jpg"}}'
var fileUrl='https://api2.bmob.cn/1/classes/File?include=file&where={"file":{"filename":"myPicture.jpg"}}'
// var fileUrl='https://api2.bmob.cn/1/classes/File?include=file&where={"file":{"filename":"myPicture.jpg"}}'
// var fileUrl='https://api2.bmob.cn/1/classes/File?where={"score":66666}'

https://api2.bmob.cn/1/cloudQuery?bql="select * from File where score= 666666"
























// var fileUrl='https://api2.bmob.cn/1/cloudQuery?'+where
// log(fileUrl)
var fileUrl = encodeURI(fileUrl)
log('encodeURI')
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


