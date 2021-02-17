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



var arrFn = (a, b)=>{
    console.log("from arrow function")
}


var sqr = a => a*a




var fnc = (param1, ...rest)=>{
    console.log(param1, rest)
}


var fnc1 = (a, b=0)=>{
    
    return a + b
}



var sum = (a, b) => a+b
var sub = (a, b) => a-b
var div = (a, b) => a/b
var mul = (a, b) => a*b

var res = sum(sub(10, mul(3,div(10, 5))), 2)
fnc("first param", "second parameter", "third parameter")

console.log(fnc1(10, 5))

var egg = ()=>{
    return chicken()
}

var chicken = () =>{
    return egg()
}

var ameba = ()=>{
    return ameba()
}


