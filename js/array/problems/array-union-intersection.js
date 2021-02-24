var arr1 = [10, 20, 30, 50, 70, 90, 40, 30, 30, 30]
var arr2 = [30, 20, 9, 5, 7, 1, 1, 1]


var union = [...arr1, ...arr2]
var intersection = []

if(arr1.length < arr2.length){

    //when arr1 is small in length
    arr1.forEach(el=>{
        if(arr2.indexOf(el) != -1){
            intersection.push(el)
        }
    })
}else{
    arr2.forEach(el=>{
        if(arr1.indexOf(el) != -1){
            intersection.push(el)
        }
    }) 
}


console.log(union, intersection)


 
 var set = []

 union.forEach(el=>{
     if(set.indexOf(el) == -1){
         set.push(el)
     }
 })

 console.log(set)

