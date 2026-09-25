class student {

    name;
    age;
    isActive;

    constructor(studentName, studentAge, studentcheck) {
        this.name = studentName
        this.age = studentAge
        this.isActive = studentcheck
    }

    getDetails() {
        console.log("Name is " + this.name);
        console.log("age is :" + this.age);
        console.log("Student is active " + this.isActive);

    }

}

let s1 = new student("Harshad Leuva", 40, true);
s1.getDetails()

let s2 = new student("Manisha", 41, false);
s2.getDetails();