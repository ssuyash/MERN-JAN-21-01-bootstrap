var users = [
    {email:"kumarsuyash94@gmail.com", pwd:"12345", username:"suyash kumar"},
    {email:"kumarsuyash100@gmail.com", pwd:"12345", username:"ved prakash"},
    {email:"kumarsuyash599@gmail.com", pwd:"12345", username:"Yahiya"},
    {email:"kumarsuyash940@gmail.com", pwd:"12345", username:"Santosh"},
    {email:"kumarsuyash9d4@gmail.com", pwd:"12345", username:"Ayushi"},
]

var email = prompt("enter email")
var password = prompt("enter password")


var user = users.find(el=>el.email == email && el.pwd == password )

if(user == undefined){
    alert("invalid email or password")
}else{
    console.log("welcome " , user.username)
}