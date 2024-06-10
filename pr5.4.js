// take a number n as input from user.
// create an array of number
// from 1 to n.
// use reduce method to calculate sum of all numbers in the array
//use the reduce methode to calculate the product of all in the array

let n = prompt("Enter the value of n :");
let arr = [];
for (i = 1; i <= n; i++) {
  arr.push(i);
}
console.log("The array is =", arr);
let sum = arr.reduce((total, val) => {
  return total + val;
});
console.log("The sum is =", sum);

let product = arr.reduce((total, val) => {
  return total * val;
});
console.log("The product is =", product);
