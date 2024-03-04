let score = prompt("enter your score");
let con ="Congrats You Got";
let als ="Alas You Got";
if(score>=80 && score<=100){
    console.log(con,"A");
} else if(score>=70 && score<=79){
    console.log(con,"B");
} else if(score>=60 && score<=69){
    console.log(con,"C");
} else if(score>=50 && score<=59){
    console.log(con,"D");
} if(score>=0 && score<=49){
    console.log(als,"F")
}