var fileName = 'aaa.txt'
var fileUrl = 'http://baidu.com'
console.log('fileName,fileUrl')
console.log(fileName, fileUrl)
async function moveFile() {
  console.log('moveFile 内部 ')
  console.log('fileName,fileUrl')
  console.log(fileName, fileUrl)
  var fileUrl = 123
}
moveFile()
