const myName = "Justin";

let clicks = 0;
const counter = document.getElementById("counter");

function buttonClicked() {
  console.log("Button clicked.");
  clicks += 1;
  counter.innerText = "Clicked me " + clicks + " times!";
}

const button = document.getElementById("button");
button.addEventListener("click", buttonClicked);