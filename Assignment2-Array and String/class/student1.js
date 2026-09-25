class student {

    name;
    age;
    isActive;

    /* constructor(studentName, studentAge, studentcheck) {
         this.name = studentName
         this.age = studentAge
         this.isActive = studentcheck
     }*/

    getDetails() {
        console.log("Name is " + this.name);
        console.log("age is :" + this.age);
        console.log("Student is active " + this.isActive);

    }

}

let s1 = new student();
s1.name = "Harshad Leuva"
s1.age = 40
s1.isActive = true

s1.getDetails()

let s2 = new student();
s2.name = "Manisha"
s2.isActive = false

s2.getDetails();