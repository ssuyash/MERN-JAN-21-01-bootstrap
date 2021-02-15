var a = [10, 20, 30]

function test(b){
    b[0] = 15
    console.log(b)
}


test(a)  // 10

// console.log(a)

console.log(test)


var sum = function(a, b){
    return a+b
}

console.log(typeof sum)
var res =  sum(10, 20) //30

