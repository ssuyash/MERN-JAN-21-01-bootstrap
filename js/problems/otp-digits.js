
function getOtp(numOfDigits){
    var otp = ""
    for(var i = 0; i<numOfDigits; i++){
        var rand = Math.round(Math.random()*1000000)%10
        otp += rand
    }
    return otp
}


function getVarCharOtp(numOfChars){
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var otp = ""
    for(var i = 0; i<numOfChars; i++){
        var rand = Math.round(Math.random()*1000000)%str.length
        otp += str[rand]
    }
    return otp
}

console.log(getOtp(6), getVarCharOtp(6))