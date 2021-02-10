var basicSalary = 15000
var hraAmount = 0
var daAmount = 0
var char = 'c'



if(basicSalary <= 10000){
    hraAmount = (basicSalary*20)/100
    daAmount = (basicSalary*80)/100
}else if(basicSalary <=20000){
    hraAmount = (basicSalary*25)/100
    daAmount = (basicSalary*90)/100
}else{
    hraAmount = (basicSalary*30)/100
    daAmount = (basicSalary*95)/100
}


var grossSalary = basicSalary + hraAmount + daAmount
console.log(grossSalary)