// we are given array of marks of students.
// filter out of the marks the marks of students that scored 90+

const marks = [97, 64, 32, 49, 99, 96,86];
let over90 = marks.filter(fltr);

function fltr(ata){
    return ata>=90;
}
console.log(over90);