var log = console.log

function testPromise() {
  var p = new Promise(function (resolve, reject) {
      resolve(1)
    })
    .then(function (data) {
      console.log(data)
      var p = new Promise(
        function (resolve, reject) {
          setTimeout(
            function () {
              resolve(2)
            }, 2000
          )
        }
      )
      return p
    })
    .then(function (data) {
      console.log(data)
      var p = new Promise(
        function (resolve, reject) {
          setTimeout(
            function () {
              resolve(3)
            }, 2000
          )
        }
      )
      return p
    })
    .catch(
      function (err) {
        log('发生错误')
        log(err)
      }
    )
    return p
}
(async function () {
  var num = await testPromise()
  console.log(num)
})()
