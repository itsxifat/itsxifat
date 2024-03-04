let number = prompt("enter a number");
let preset = prompt("number you want to devided by")
if (number % preset === 0) {
    console.log(number,"can be devided by",preset);
} else if(number % preset !== 0){
    console.log(number,"cant be devided by",preset);
}