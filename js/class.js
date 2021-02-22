class Person{
    constructor(name, yob){
        console.log("person constructor")
        this.name = name
        this.yob = yob
    }

    getAge = ()=>{
        return 2021 - this.yob
    }
}


class Student extends Person{
    constructor(name, yob, courseName){
        super(name, yob)
        this.courseName = courseName
        console.log("student constructor")

    }
    getCourse = ()=>this.courseName

    static abc = 1000

   
}

console.log(Student.abc)
var p1 = new Student("suyash", 1994, "Mern  ")
console.log(p1)
console.log(p1.getCourse())