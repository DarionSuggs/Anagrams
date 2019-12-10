const button = document.getElementById("findButton");
button.onclick = function () {
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);
}

var resultsArray = [];

var displayResults = document.getElementById('displayResults');

function alphabetize(word) {
  return word.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(typedText) {

  var results = alphabetize(typedText);

    for (var i = 0; i < words.length; i++) {
      let word = alphabetize(words[i])

      if (results === word) {
        resultsArray.push(words[i])
      }
    }
    for (var i = 0; i < resultsArray.length; i++) {
      displayResults.innerHTML += resultsArray[i] + " ";
    }
}




