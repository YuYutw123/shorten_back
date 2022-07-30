let userInput = document.getElementById("input-bar");
let submitBtn = document.querySelector(".btn-input");

function enterValue(value) {
  var str = "";
  var submitValue = userInput.value;
  str = submitValue;
  alert(str);
}
submitBtn.addEventListener("click", enterValue);