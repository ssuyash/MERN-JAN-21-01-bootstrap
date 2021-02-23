var arr = [9, 3, 6, 15, 0]
var n = 4

var maxSumArr = arr.slice(0, n)


for(var i=1; i<arr.length-n+1; i++){
    var chunk = arr.slice(i, n+i)
    console.log(sumOfElem(...chunk), i)
    if(sumOfElem(...chunk) > sumOfElem(...maxSumArr)){
        maxSumArr = [...chunk]
    }
}

function sumOfElem(...rest){
    return rest.reduce((a,b)=>a+b)
}


console.log(maxSumArr)