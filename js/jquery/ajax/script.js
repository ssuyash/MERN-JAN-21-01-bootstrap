$(function(){
    $('button').click(function(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            method:"GET",
            success:function(data){
                var html= ""
                data.forEach(d=>{
                    html += `
                        <li>${d.title}</li>
                    `
                })
                $('ul').append(html)
            }
        })

    })
})