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
    let link= document.getElementById('output').href = response.shortUrl;
    let result = document.getElementById('output').textContent = response.shortUrl;
  })
  .catch(function(error){
    console.log('Error during fetch: ' + error.message);
  });




}

submitBtn.addEventListener("click", enterValue);