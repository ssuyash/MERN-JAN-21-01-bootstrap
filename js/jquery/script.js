// $('body').on('click', 'button', function(){
// //     var inpHtml = `<div class="form-group">
// //     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
// //   </div>`

// //   document.getElementsByClassName('form-flds', function(){

// //   })

//     // $('.form-flds').remove()

// //    if($('input').attr('type') == 'password'){
// //     $('input').attr('type', 'text')
// //     $(this).text('hide password')
// //    }else{
// //     $('input').attr('type', 'password')
// //     $(this).text('show password')

// //    }

// // var inpVal = $(this).val()
// // console.log(inpVal)
// // if(inpVal.length >= 3){
// //     $('button').removeAttr('disabled')
// // }else{
// //     $('button').attr('disabled','')

// // }

// // var existingFS = $('p').css('font-size')
// // existingFS = parseInt(existingFS.replace('px', ''))

// // var newFS = existingFS + 2
// // $('p').css('font-size', newFS+'px')

// // $('p').css('font-size', '+=2px')

// // var val = $(this).val()
// // if(val.length ==10){
// //     $(this).addClass('border-success')
// // }else{
// //     $(this).removeClass('border-success')

// // }

// //$(this).parent().parent().addClass('bg-danger')
// })



// // $('body').on('dblclick', 'tr', function(){
// //     var nameTd = $(this).find('.name')
// //     var nameTdVal = nameTd.text()
// //     nameTd.html(`<input type="text" value="${nameTdVal}">`)
// // })

$('body').on('click', '.btn-save', function(){
    var name = $('input').val()
    var len = $('tbody').children().length + 1
    console.log(len)
    var row = `<tr>
    <td class="count">${len}</td>
    <td class="name">${name}</td>
    <td>
        <button class="btn-remove">x</button>
    </td>
</tr>
`


$('tbody').append(row)
})

$('body').on('click', '.btn-remove', function(){
    $(this).parent().parent().remove()
    resetCount()
})


function resetCount(){
    var count = 1
    $('tbody tr').each(function(){
        $(this).find('.count').text(count++)
    })
}


$('.ch-dim').click(function(){
    $('.mydiv').animate({'width':'250px', 'height':'250px'}, 3000)
})
// setTimeout(function(){
//     alert("Time out")
// }, 5000)

// setInterval(function(){
//     console.log("hello")
// }, 3000)