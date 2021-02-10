var a = 3
var b = 4
var c = 5

if(a>0 && b>0 && c> 0 ){
    if(a+b > c && b+c>a && a+c > b){
        console.log('valid sides')
    }else{
        console.log('invalid sides')
    }
}else{
    console.log("invalid inputs")
}
