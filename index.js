import inquirer from "inquirer";
async function getHeight() {
    let validinput = false;
    let feet = null;
    let inches = null;
    while (!validinput) {
        let input = await inquirer.prompt([
            {
                name: "feet",
                message: "Enter your Height\nFeet:",
                type: "input"
            },
            {
                name: "inches",
                message: "Inches:",
                type: "input"
            }
        ]);
        const f = Number(input.feet);
        const i = Number(input.inches);
        if (isNaN(f) || isNaN(i)) {
            console.log("||||||||||\n||||||||||");
            console.log("Please enter a valid number for feet and inches");
        }
        else {
            validinput = true;
            feet = f;
            inches = i;
        }
    }
    return { feet, inches };
}
async function getWeight() {
    let validinput = false;
    let weight = null;
    while (!validinput) {
        let input = await inquirer.prompt([
            {
                name: "weight",
                message: "Enter your weight ",
                type: "input"
            }
        ]);
        const w = Number(input.weight);
        if (isNaN(w)) {
            console.log("||||||||||\n||||||||||");
            console.log("Please enter weight in numbers");
        }
        else {
            validinput = true;
            weight = w;
        }
    }
    return { weight };
}
async function main() {
    console.log("------------BMI Calculator------------");
    let select = await inquirer.prompt([
        {
            name: "name",
            message: "Enter Your name",
            type: "input"
        },
        {
            name: "age",
            message: "Enter Your age",
            type: "input"
        }
    ]);
    console.log("Name: " + select.name + "\nAge: " + select.age);
    console.log("|||||||||\n|||||||||");
    let { feet, inches } = await getHeight();
    console.log("||||||||||\n||||||||||");
    console.log("Your height is\n" + feet + "ft " + inches + "inch");
    let { weight } = await getWeight();
    console.log("||||||||||\n||||||||||");
    console.log("Your Weight is " + weight + "Kg");
}
main();
