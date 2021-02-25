var userName = "Rajat Gupta"
var greetMsg = `Good Morning ${userName}`

console.log(greetMsg, greetMsg.length)

var str1 = "suyash"
var str2 = "suyash"

//strCmp() => 0, +ve, -ve
function strCmp(str1, str2){
    if(str1.length != str2.length){
        return str1.length - str2.length
    }

    for(var i=0;  i < str1.length; i++){
       var diff =  str1.charCodeAt(i) - str2.charCodeAt(i)
       if(diff != 0 ){
           return diff
       }
    }

    return 0
}


console.log(strCmp("Suyash", "suyash"))

var str = "suyash kumar"
var search = "suyash1"

console.log(str.includes(search))