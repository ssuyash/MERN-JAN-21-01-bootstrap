var arr = [10,20]
// var arr = Array()
// var arr = new Array()


//properties
//1) length => returns number of items in array
//console.log(arr.length)


//methods
//Insertion
//push  => arr.push(item)  //insert item at the end
arr.push("suyash")

//unshift  => arr.unshift(item)  //insert item at the beginning
arr.unshift("Yahiya")
console.log(arr)


//Remove
//pop() => removes item from last

console.log(arr.pop())
console.log(arr)


//shift() => removes item from the beginning
console.log(arr.shift())
console.log(arr)

//splice => removes or adds item(s) from specific location(s)
arr.splice(1, 0, "Priyanka", "Ayushi", "Harshita")
console.log(arr[5])

//looping
//forEach => iterate over array
console.log("foreach")
arr.forEach((ele, index, loopingArray)=>{
    console.log(ele, index, loopingArray)
})


//map => return a new array with return values of given function
var newArr = arr.map((el)=>{
    return el*el
})

var ages = [10, 20, 15, 18, 21, 10, 10]

//filter  => returns a new array having values for which given function retured true.

var filteredArr = ages.filter((el)=>{
   return el >= 18
})

console.log(filteredArr)


//reduce =>
var res = ages.reduce((prevValue, currentValue)=>{
    return prevValue+currentValue
})
console.log(res)


//indexOf
console.log(ages.indexOf(10, ages.indexOf(10)+1))


//how to create copy of an array ?
var students = ["Yahiya", "Vishal", "Ved Prakash", "Siddarth"]
var cpyStudents = [...students] //spread Operator

cpyStudents[0] = "suyash"
console.log(students, cpyStudents)


//slice
var copyStu = students.slice()
copyStu[0] = "suuyas"
console.log(students, copyStu)

//some  => 
//every => 

var isAnyVoterAvl = ages.some(el=>el>=18)

var isEveryVoterAvl = filteredArr.every(el=>el>=18)

console.log(isAnyVoterAvl, isEveryVoterAvl)

var nmsarr = [1, 2, 3, 4, 5]

nmsarr.reduce((tmp, el)=>{
    console.log("tmp :", tmp, " Elem : ", el )

    return tmp+el
})