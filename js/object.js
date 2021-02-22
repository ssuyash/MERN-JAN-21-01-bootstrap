var mario1 = {
    
}

//constructor function

var Mario = function(){
    this.isBullet =false,
    this.isBig = false,
    this.posX=0,
    this.posY=0,
    this.moveLeft=function(){
        this.posX--
    }, 
    this.moveRight=function(){
        this.posX++
    },
    this.jump=function(){
        this.posY++
    }
}

var m1 = new Mario()

var m2 = new Mario()

console.log(m1.posX)
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
m1.moveLeft()
console.log(m1.posX)
m2.moveRight()
console.log(m2.posX)

console.log(m1)


var Person = function(name, age){
    this.name = name
    this.age  = age
    var abc = "xyz"

    this.getAbc = ()=> abc
    this.setAbc = (newVal)=>{
        abc = newVal
    }
}

var p1 = new Person("suyash", 1994)
console.log(p1.name, p1.age, p1.setAbc("mno"), p1.getAbc())