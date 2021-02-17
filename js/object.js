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