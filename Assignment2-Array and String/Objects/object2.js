// This program shows the correct way to loop over an object's properties using "for...in".
// Unlike "for...of", "for...in" is designed to work with plain objects and gives us each key one by one.

// Step 1: Create an object named "tool" with four properties -
// name, version, type (an array), and owned.
let tool =
{
    "name": "Playwright",
    "version": 1.63,
    "type": ["Web", "API"],
    "owned": "microsoft"
};

// Step 2: Loop through the object using "for...in".
// On each round of the loop, "keyname" holds the name of one property (like "name", "version", etc.),
// and tool[keyname] uses bracket notation to fetch the value stored at that property.
// Note: this line refers to a variable called "key" instead of "keyname" by mistake,
// so running it as written will cause an error since "key" was never declared - it should say "keyname".
for (const keyname in tool) {

    console.log(keyname + "-->> " + tool[keyname]); //tool[name] //tool[version]  //tool[type] //tool[owned]

}

// Step 3: This line is commented out, so it does not run.
// It would print the entire "tool" object at once instead of one property at a time.
//console.log(tool);
