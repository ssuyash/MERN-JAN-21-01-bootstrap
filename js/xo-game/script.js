var placements = Array(9).fill(null)


$(function(){
    console.log(placements)
    var chance = 'X'
    $('.plate').click(function(){
        if($(this).text() == ""){
            $(this).text(chance)
            var classes = $(this).attr('class')
             var pos = classes.replace("plate plate-", "")
            placements[pos-1] = chance
            console.log(placements)
            if(checkWinningPos(chance)){
                alert(`${chance} won the game`)
            }

            chance = chance == 'X' ? 'O' : "X"

        }
        
    })
})


function checkWinningPos(chance){
    var isWon = false
    var winningPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(var i = 0; i<winningPos.length; i++){
        var pos = winningPos[i]
        if(placements[pos[0]] == chance && placements[pos[1]] == chance && placements[pos[2]] == chance){
            isWon =  true
            break
        }
    }

    return isWon
}