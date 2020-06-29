let food_item= prompt("What is your favourite food ?")


if( food_item =="1" ){
    console.log("Pizza")
}
if( food_item =="2" ){
    console.log("Burger")
}
if( food_item =="3" ){
    console.log("Sushi")
}
if( food_item =="4" ){
    console.log("Food item not available.")
}

let first_number= prompt("Enter first number")
let second_number= prompt("Enter Secound number")
let calculator= prompt("enter operation *_/_+_-")

switch(calculator) {
    case "*":
      console.log(first_number*=second_number)
      break;
    case "/":
      console,log(first_number/=second_number)
      break;
    case "+":
      console.log(first_number+=second_number)
      break;
    case "-":
      console.log(first_number-=second_number)
      break;
    default:
      console.log("Wrong entry")
      break;
}

let age= prompt("Enter your age")

if (age <=5){
    console.log("Kindergaten");
}
if (age<=17 >=5 ){
    console.log("School");
}
if (age>=18){
    console.log("College");
}


