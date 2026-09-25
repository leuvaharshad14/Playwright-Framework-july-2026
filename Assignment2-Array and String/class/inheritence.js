class student {
    name;
    age;

    constructor(sName, sAge = 18) {
        console.log("studnet---constructor");

        this.name = sName
        this.age = sAge
    }
    getdetails() {
        console.log("Stundent name is :" + this.name + " and age is : " + this.age);

    }

}

class automation extends student {
    tool;

    constructor(name, age, tool) {
        console.log("child constructor");

        super("Rahul", 22)
        this.tool = tool
    }

    getToolname() {
        return this.tool
    }


}

//let s1 = new student("Ajay", 21);
//s1.getdetails();

let a1 = new automation("Rahul", 23, "Playwright");
console.log(a1.getToolname());
console.log(a1.name);

