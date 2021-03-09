$(function(){
    var placements = Array(9).fill(null)
    console.log(placements)
    var chance = 'X'
    $('.plate').click(function(){
        $(this).text(chance)
        var classes = $(this).attr('class')
        var pos = classes.replace("plate plate-", "")
        placements[pos-1] = chance
        chance = chance == 'X' ? 'O' : "X"
        console.log(placements)
    })
})


function checkWinningPos(){
    var winningPos = [
        []
    ]
}