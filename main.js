var button = document.getElementById("go-button");

function buttonClicked() {
  console.log("it clicked!");
  button.removeEventListener("click",buttonClicked)
  document.getElementById("text").innerHTML= "dont do it";
  console.log(document.getElementById("text"));
}

button.addEventListener("click",buttonClicked)
