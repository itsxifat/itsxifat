let fullname = prompt("Enter you full name");

let username = fullname.toLowerCase();
let trim = username.replaceAll(/ /g, "");

let length = trim.length;

alert(`You User name is @${trim}${length}`);
