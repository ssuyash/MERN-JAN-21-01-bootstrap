// $(document).ready(function(){

// })

updateTime()

$(function(){
    setInterval(function(){
        updateTime()
    }, 1000)
})

function updateTime(){
    var date = new Date()
    var mm = date.getMinutes()
    var hh = date.getHours()
    var ss = date.getSeconds()

    $('.hh').text(padZero(hh))
    $('.mm').text(padZero(mm))
    $('.ss').text(padZero(ss))
}


function padZero(num){
    if(num < 10){
        return '0'+num
    }else{
        return num
    }
}