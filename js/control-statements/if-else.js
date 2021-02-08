var yob = 1857
var age = 2021 - yob

var isValidAge = age >= 0 && age<=150

if(isValidAge){
    if(age >= 18 ){
        console.log("you can vote")
    }else{
        console.log("you can not vote")
    }
}else{
    console.log("invalid age")
}

var a = "santosh"
var b = "jain"

var c = a + ` ` + b