fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。

document.write(String.fromCharCode(72,69,76,76,79))

HELLO

提示和注释
注释：该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定。

它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 String.fromCharCode()，而不是 myStringObject.fromCharCode()。


charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
