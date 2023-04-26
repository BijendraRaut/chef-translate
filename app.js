var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

const handleError = () => {
  console.log("error occured", error);
  alert("something wrong happend! try after some time");
};

btnTranslate.addEventListener("click", function () {
  var userInput = txtInput.value;
  if (userInput === "") {
    alert("Please enter the input first");
    return;
  }
  var url = "https://api.funtranslations.com/translate/chef.json";
  fetch(`url +"+text=" ${userInput}`)
    .then((res) => res.json())
    .then((json) => (txtOutput.innerText = json.contents.translated))
    .catch(handleError);
});
