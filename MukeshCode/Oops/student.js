// This file shows how a "class" works in JavaScript.
// A class is like a blueprint or template used to create many similar objects.
// Here, the class is used to create Student objects, where every student
// will have the same kind of information (name, phone, email, fees) and
// the same kind of actions (getDetails, submitAssignment).

// . (dot) is used to access or update the fields (data) of an object
// example: vinay.name, vinay.fees

// . (dot) is also used to call the methods (functions/behaviors) of an object
// example: vinay.getDetails()


// Step 1: Define the class "Students"
// A class groups together fields (data) and methods (behavior) that belong together.
class Students
{
    // Fields: these are the properties/data every student object will have.
    // At this point, no values are given yet, they are just declared.
    name;          // will store the student's name
    phoneNumber;   // will store the student's phone number
    emailAddress;  // will store the student's email address
    fees;          // will store whether fees is paid (true/false)

    // Method (behavior): a function that belongs to the class.
    // "this" refers to the specific student object calling the method.
    getDetails()
    {
        // Step: print each field of the current student object using "this"
        console.log("Student name is "+this.name);          //vinay.name
        console.log("Student Phone is "+this.phoneNumber);   //vinay.phoneNumber
        console.log("Student email is "+this.emailAddress);  // vinay.email
        console.log("Student fees is "+this.fees);           //vinay.fees
    }

    // Another method (behavior) available to every student object.
    submitAssignment()
    {
        // Step: simply prints a message showing this action is available
        console.log("Students can submit assignment");

    }

}

// In order to create an object (a real student) from the class blueprint,
// we must use the "new" keyword.
/*
    let/const object=new class-name();
*/

// Step 2: Create a student object named "vinay" using the Students class
let vinay=new Students()
// Step 3: Set (fill in) the field values for vinay one by one using dot notation
vinay.name="Vinay Kumar";
vinay.fees=true;
vinay.emailAddress="vinay@gmail.com";
vinay.phoneNumber=898989;


// Step 4: Create another student object named "omer" the same way
let omer=new Students()
omer.name="Omer";
omer.fees=true;
omer.emailAddress="omer@gmail.com";
omer.phoneNumber=897441;

// Step 5: Create a third student object named "karishma" the same way
let karishma=new Students()
karishma.name="karishma";
karishma.fees=true;
karishma.emailAddress="karishma@gmail.com";
karishma.phoneNumber=78784784;

// Step 6: Access individual fields of each object directly using dot notation
console.log(vinay.name);
console.log(omer.phoneNumber);
console.log(karishma.fees);

// Step 7: Call the getDetails() method on karishma
// This will run the getDetails code, but using karishma's own field values
karishma.getDetails()


