let a =[1,2,3,4,5,6];
function sqr(s){
    let num;
    num =s*s;
    return num;
}
a.forEach((val) =>{
    console.log(sqr(val));
})

