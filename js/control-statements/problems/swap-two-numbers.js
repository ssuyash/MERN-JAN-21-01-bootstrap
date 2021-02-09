//swap value of two variables

var a = 10
var b = 20


//solution1
//will get a third variable to temporary storage
var c = a

a = b 
b = c 

console.log(a, b)

//solution 2 
//using mathemetical equations

a = a + b
b = a - b
a = a - b