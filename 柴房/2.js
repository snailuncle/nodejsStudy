1.js 的文件内容

var args=engines.myEngine().execArgv
var receiveNumber=args.num
alert(receiveNumber)

2.js 的文件内容

engines.execScriptFile("./1.js",{
  arguments:{
    num:123
  }
});
