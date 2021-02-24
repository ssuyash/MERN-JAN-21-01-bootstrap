var arr = [
    [1, 2, 3], 
    [3, 5, 9],
    [3, 2, 5]
]

var maxArr = arr[0]
var minArr = arr[0]

arr.forEach(e=>{
    if(getSumOfElems(...e) > getSumOfElems(...maxArr)){
        maxArr = [...e]
    }

    if(getSumOfElems(...e) < getSumOfElems(...minArr)){
        minArr = [...e]
    }
})

function getSumOfElems(...rest){
    return rest.reduce((a,b)=>a+b)
}

console.log(minArr, maxArr)
