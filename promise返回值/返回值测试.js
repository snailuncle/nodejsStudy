const a = async ()  => {
  var p=new Promise(
    function(resolve,reject){
      resolve(666)
      // return 888
    }
  ).then(
    function(data){
      var p=new Promise(
        function(resolve,reject){
          setTimeout(() => {
            resolve(168)
          }, 2000);
        }
      )
    }
  )
  return p
}

// const b= async ()=>{
//   const result =await a() ;     //这样就能拿到数据了
//   console.log('result')
//   console.log(result)
// }




(async function () {
  var num = a()
  console.log('num')
  console.log(num)
})()





