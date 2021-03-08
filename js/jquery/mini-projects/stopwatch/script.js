$(function(){
    var interval;
    var secs = 0


    $('body').on('click', '.btn-start', function(){
        $(this).toggleClass('d-none')
        $('.btn-stop').toggleClass('d-none')

        interval = setInterval(function(){
            secs++
            var timeInSec = secs
            var hh = (timeInSec-timeInSec%3600)/3600
            timeInSec = timeInSec%3600
            var mm = (timeInSec-timeInSec%60)/60
            timeInSec = timeInSec%60
            console.log(hh, mm, timeInSec)
            $('.thh').text(padZero(hh))
            $('.tmm').text(padZero(mm))
            $('.tss').text(padZero(timeInSec))
            }, 1000)
    })

    $('body').on('click', '.btn-stop', function(){
        $(this).toggleClass('d-none')
        $('.btn-start').toggleClass('d-none')
        clearInterval(interval)
    })

    $('body').on('click', '.btn-reset', function(){
        secs = 0
    })

    $('body').on('click', '.btn-laps', function(){
        var hh = $('.thh').text()
        var mm =     $('.tmm').text()
         var ss =    $('.tss').text()
        var lapsHtml = `<li>${hh}:${mm}:${ss}</li>`
        $('ul').append(lapsHtml)
    })
})

function padZero(num){
    if(num < 10){
        return '0'+num
    }else{
        return num
    }
}
