var allBtns = document.querySelectorAll('.btn')

Array.from(allBtns).forEach(el=>{
    el.addEventListener('click', (event)=>{
        var clickedBtn = event.target.innerText
        var textArea = document.getElementById('disp')
        var prevVal = textArea.value 
        var newVal = prevVal+clickedBtn


        if(clickedBtn == '='){
            newVal = eval(prevVal)
        }


        textArea.value = newVal

        console.log(clickedBtn)
    })
})
