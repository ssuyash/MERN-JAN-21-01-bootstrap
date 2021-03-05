$(function(){
    $('body').on('click', '.btn-start', function(){
        var hh = parseInt($('.hh').val())
        var mm = parseInt($('.mm').val())
        var ss = parseInt($('.ss').val())

        var totalSecs = hh*3600 + mm*60 + ss
        setTimeout(function(){
            alert('timeout')
            clearInterval(interval)
            updateUI({hrs:'00', mins:'00', secs:'00'})
        }, totalSecs*1000)

      var interval =   setInterval(function(){
            var time = convertSecToTime(totalSecs--)
            updateUI(time)
            console.log(time)
        }, 1000)
        console.log(hh, mm, ss)
    })
})


function convertSecToTime(secs){
    var hrs = (secs-secs%3600)/3600
    secs = secs%3600
    var mins = (secs-secs%60)/60
    secs = secs%60
    return {hrs, mins, secs}
}

function updateUI(timeObj){
    $('.thh').text(timeObj.hrs)
    $('.tmm').text(timeObj.mins)
    $('.tss').text(timeObj.secs)
}