//方法一：split结合 ==> reverse 先转换成数组，再将数组拼接成字符串
var str = 'abc';
var reverseStr = str.split('').reverse().join('');

// 经过此操作str不变
// 方法二：不使用API
var x = 501120;
var digit;
var ret = 0;
var count = [];
while(x>0) {
  digit = X%10;
  count.push(digit);
  ret = ret*10 + digit;
  x = paseInt(x/10);
}
console.log(count.join(""));
console.log(ret);
