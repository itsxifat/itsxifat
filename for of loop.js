let str = prompt("write what you want to measure");
let size=0;

for(let i of str) {
    console.log("i =",i);
    size++;
}
console.log("number of charecters in the text =",size);