let userInput = document.getElementById("input-bar");
let submitBtn = document.querySelector(".btn-input");
const token = null


async function enterValue(value) {
  let str = {
    "longUrl": userInput.value
  };
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`,
}
  console.log(str.longUrl);

  fetch ("http://localhost:5000/api/url/shorten", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(str)
  }).then(function(response){
    return response.json();
  }).then(function(response){
    let result = document.getElementById('output').value = response.shortUrl;
  })
  .catch(function(error){
    console.log('Error during fetch: ' + error.message);
  });

}

function copyInput() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("已複製" + copyText.value);
}

submitBtn.addEventListener("click", enterValue);