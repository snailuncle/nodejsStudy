
function testPromise(){
  var p=new Promise(
    function(resolve,reject){
      setTimeout(() => {
        resolve(1)
      }, 1000);
    }
  ).then(
    function (data){
      console.log(data)
      var p=new Promise(
        function(resolve,reject){
          setTimeout(() => {
            console.log(2)
            resolve(2)
          }, 2000);
        }
      )
      return p
    }
  )
  return p
}
module.exports=testPromise
