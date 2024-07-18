import inquirer from "inquirer";

async function getHeight(){
    let validinput=false;
    let m:number|null=null;


    while(!validinput){
    let input=await inquirer.prompt([
    {
        name:"m",
        message:"Enter your Height in Meters: ",
        type:"input"
    },
])

const f=Number(input.m)

if(isNaN(f))
    {
    
        console.log("||||||||||\n||||||||||")
        console.log("Please enter a valid number for feet and inches")
    }

else
{
    validinput=true
    m=f;
}
}

   return{m};
}


async function getWeight() {
    let validinput=false;
    let weight:number|null=null;

while(!validinput){
    let input=await inquirer.prompt([
    {
        name:"weight",
        message:"Enter your weight in kgs ",
        type:"input"
    }
    ])
const w=Number(input.weight)

if(isNaN(w))
    {
        console.log("||||||||||\n||||||||||")
        console.log("Please enter weight in numbers")
    }
else
    {
        validinput=true;
        weight=w;
    }
}
    return{ weight }
}

async function calculateBmi(m:number,weight:number)
{
    let bmi:number|null=null
 bmi=weight/ (m*m)
return bmi
}

function category(bmi:number){
    if (bmi <= 18.4) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

async function main()
{
console.log("------------BMI Calculator------------")
let select=await inquirer.prompt([
    {
        name:"name",
        message:"Enter Your name",
        type:"input"
    },
    {
        name:"age",
        message:"Enter Your age",
        type:"input"
    }
])

    console.log("Name: "+select.name+"\nAge: "+select.age)
    console.log("|||||||||\n|||||||||")

    let{m}=await getHeight()

    console.log("||||||||||\n||||||||||")
    console.log("Your height is\n"+m+" m")

let{weight}=await getWeight()

    console.log("||||||||||\n||||||||||")
    console.log("Your Weight is "+weight+" Kg")

if (m !== null && weight !== null) 
    {
        let bmi = await calculateBmi(m, weight);
    
        console.log("||||||||||\n||||||||||");
        console.log("Your BMI is " + bmi);

        let bmicat=category(bmi)
        
        console.log("||||||||||\n||||||||||");
        console.log("Your BMI category is " + bmicat);
        } 
else
    {
        console.log("Failed to calculate BMI due to invalid height or weight.");
    }
}
main();
