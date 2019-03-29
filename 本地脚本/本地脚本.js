importClass("java.security.SecureRandom");
importClass("javax.crypto.spec.DESKeySpec");
importClass("javax.crypto.SecretKeyFactory");
importClass("javax.crypto.Cipher");

var scriptName = 'hello'
var timestamp=new Date().getTime();
var chars64=rnd64Chars()
var toady=getToday()
var content={
  scriptName:scriptName,
  timestamp:timestamp,
  chars64:chars64,
  toady:toady
}
var key=chars64
var encryptedContent = encrypt(content, key)
log(encryptedContent)
content=encryptedContent
content=decrypt(content, key)

log(content)
// var encryptedContent = encrypt(content, key)
// var r = upload(encryptedContent)
// var receivedData = r.body.string()
// var decriptedContent = decrypt(receivedData)
// var myScript = decriptedContent
// run(myScript)

function getToday(){
  return new Date().getDay();
}
function rnd64Chars(){
  var PassLength = 64
  var str = 'abcdefghijklmnopqrstuvwxyz';
  var STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var text = str.split('').concat(STR.split(''))
  var pw = '';
  for (i = 0; i < PassLength; i++) {
    var strpos = random(0, text.length - 1);
    pw += text[strpos].charAt(random(0, text[strpos].length - 1));
  }
  return pw;
}

function getKey(info) {
  android.util.Base64.encodeToString(r, 0);
}

function upload() {

}

function encrypt(content, key) {
  var content=JSON.stringify(content)
  return encryptDES(content, key)
}

function decrypt(content, key) {
  var content = decryptDES(content,key)
  content=new java.lang.String(content)
  content=JSON.parse(content)
  return content
}



/**
 * DES 加密
 *
 * @param content 待加密内容
 * @param key     加密的密钥
 * @return 加密后的字节数组
 */
function encryptDES(content, key) {
  var key = new java.lang.String(key).getBytes();
  var content = new java.lang.String(content).getBytes();
  var random = new SecureRandom();
  var desKey = new DESKeySpec(key);
  var keyFactory = SecretKeyFactory.getInstance("DES");
  var secretKey = keyFactory.generateSecret(desKey);
  // DES 是加密方式, EBC 是工作模式, PKCS5Padding 是填充模式
  var cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
  cipher.init(Cipher.ENCRYPT_MODE, secretKey, random);
  return cipher.doFinal(content);
}

/**
 * DES 解密
 *
 * @param content 待解密内容
 * @param key     解密的密钥
 * @return 解密的数据
 */
function decryptDES(content,key) {
  var key = new java.lang.String(key).getBytes();
  var random = new SecureRandom();
  var desKey = new DESKeySpec(key);
  var keyFactory = SecretKeyFactory.getInstance("DES");
  var secretKey = keyFactory.generateSecret(desKey);
  var cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
  cipher.init(Cipher.DECRYPT_MODE, secretKey, random);
  return cipher.doFinal(content);
}
