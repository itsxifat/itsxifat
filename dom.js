let btn = document.querySelectorAll("button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

btn[0].onclick = () => {
  console.log("Button was clicked");
};

btn[1].ondblclick = () => {
  console.log("button was clicked 2 times");
};

body.onmouseover = () => {
  console.log("mouse outside div");
};
h1.onmouseover = () => {
  console.log("mouse is inside div");
};
