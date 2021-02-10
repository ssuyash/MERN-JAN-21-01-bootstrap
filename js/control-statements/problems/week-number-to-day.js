var dayNumber = 67
var days = ['monday', 'tuesday', 'wed', 'thus', 'fri', 'sat', 'sun']
if(dayNumber > 0 && dayNumber<=7){
    console.log(days[dayNumber-1])
}else{
    console.log("invalid week day")
}