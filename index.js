// Detecting a Button pressed
var count = 0;
document.querySelector(".throwDie").addEventListener("click", respondToClick);
function respondToClick() {
  var randomNumber = Math.floor(Math.random()*6+1);
  var diceNumber = "images/dice" + randomNumber +".JPG";
  document.querySelectorAll("img")[1].setAttribute("src", diceNumber);
  count = count + 1;
  console.log("counter = " + count);
  document.querySelectorAll("p")[0].innerHTML = "count = " + count;
}
