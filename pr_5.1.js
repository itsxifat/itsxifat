function counter(str){
count = 0;
let arr = ["a","o","e","i","u"];
for(let i of str) {
   for(let n = 0; n <= arr.length; n++ ){
       if(i==arr[n]){
           count+=1;
        }
        
   }
}
return count ;
}

console.log(counter("sifat"));