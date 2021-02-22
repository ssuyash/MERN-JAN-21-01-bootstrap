var arr = [1, 2, 5, 9, 3, -8]
var sum = 0
var avg = 0
var min = arr[0] 
var max = arr[0]

//your logic here
arr.forEach((el)=>{
    sum += el

    if(el < min){
        min = el
    }

    if(el > max){
        max = el
    }
})



avg = sum/arr.length



console.log(sum, avg, min, max)