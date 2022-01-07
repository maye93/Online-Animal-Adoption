var arr = []
var animals = [
  "images/animals/cockatiels.png", 
  "images/animals/fox.png", 
  "images/animals/glider.png", 
  "images/animals/hedgehog.png", 
  "images/animals/pom.png", 
  "images/animals/racoon.png", 
  "images/animals/retriever.jpeg", 
  "images/animals/samoyed.png", 
  "images/animals/toucan.png"]

var namesArr = []
var names = [
  "chim",
  "a",
  "e",
  "d",
  "f",
  "g",
  "h",
  "v",
  "x"
]
function heart() {
    var img
    var h1
    var h3
    arr.push("Heart")
    console.log(arr)
    if (arr.length < 10) {
      img = document.querySelector("#img").src = animals[(arr.length - 1) % animals.length]
      h1 = document.querySelector("#h1").src = names[(nameArr.length - 1) % names.length]
    } else {
      document.querySelector(".heartReject").hidden = true
    }    
}

function reject() {
    arr.push("Reject")
    console.log(arr)
    if (arr.length < 10) {
      img = document.querySelector("#img").src = animals[(arr.length - 1) % animals.length]
    } else {
      document.querySelector(".heartReject").hidden = true
    }   
}

