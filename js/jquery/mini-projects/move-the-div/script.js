$(function(){
  
    putFoodOnScreen()

    $('body').keypress(function(e){
        var pressedKey = String.fromCharCode(e.which)

        if(pressedKey == 'w'){
            //move up
            $('.mydiv').animate({'top':'-=10px'}, 10)
        }


        if(pressedKey == 's'){
            //move down
            $('.mydiv').animate({'top':'+=10px'}, 10)
        }


        if(pressedKey == 'a'){
            //move left
            $('.mydiv').animate({'left':'-=10px'}, 10)
        }


        if(pressedKey == 'd'){
            //move right
            $('.mydiv').animate({'left':'+=10px'}, 10)

        }

        var snakX = $('.mydiv').offset().left
        var snakY = $('.mydiv').offset().top

        var foodX = $('.food').offset().left
        var foodY = $('.food').offset().top    
        
        if(snakX == foodX && snakY == foodY){
            $('.mydiv').css('width', '+=10px')
            putFoodOnScreen()
        }
        //console.log('key pressed')
    })

})

function putFoodOnScreen(){
    var xRange = $(window).width()
    var yRange = $(window).height()

    var xPos = Math.round(Math.random()*100000)%xRange
    var yPos = Math.round(Math.random()*100000)%yRange

    xPos = xPos - xPos%10
    yPos = yPos - yPos%10

    $('.food').css({'top':yPos, 'left':xPos})
}