var num1 = '10'
var num2 = 20

var num3 = num1 + num2 //'1020'
num3 = num3 + 10 //102010
num3 = num3 - 10 // 102000
num3 = num3 + '5' // 1020005

num3 = num3%10 // 5
num3 = num3 + 10 // 15

num3 = num3 + true
console.log(num3)