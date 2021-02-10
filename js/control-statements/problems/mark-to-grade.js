var marks = {
    math:100,
    physics:97,
    bio:60,
    chem:50,
    comp:100
}


var per = (marks.math + marks.physics + marks.bio + marks.chem + marks.comp)/5
if(per>=90){
    console.log("A")
}else if(per >= 80){
    console.log("B")
}else if(per >= 70){
    console.log("C")
}else if(per >= 60){
    console.log("D")
}else if(per >= 40){
    console.log('E')
}else{
    console.log('F')
}