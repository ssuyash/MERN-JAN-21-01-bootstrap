//when document is loaded then run jquery code
$(function(){

    //run code when form submit button clicked(form submitted)
    $('#form-validation').submit(function(e){
        //get data from all inputs

        //1) for username
        var username = $('#username').val() //val => for getting value from form filed
        //apply validation
        //1) username must not be less than 3 characters

        if(username.length < 3){
            $('#usernameHelp').text("Username must contain atlease 3")  //text => for setting some text in a html element

            //to prevent default nature of form to be reload or load new url
            e.preventDefault()
        }else{
            $('#usernameHelp').text("")  //text => for setting some text in a html element

        }


        //2) for email
        var email = $('#email').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        console.log(email)
       if(!pattern.test(email)){
        $('#emailHelp').text("invalid email")
        e.preventDefault()
    }else{
        $('#emailHelp').text("")

    }
    })
})

$('.btn-check').click(function(){

if($('#exampleCheck1').is(":checked")){
    $('#exampleCheck1').prop('checked', false)
}else{
    $('#exampleCheck1').prop('checked', true)

}
})