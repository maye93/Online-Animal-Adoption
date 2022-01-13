var arr = []
var counter = 0

var animals = [
  "images/animals/chinchilla.png",
  "images/animals/cockatiels.png", 
  "images/animals/fox.png", 
  "images/animals/glider.png", 
  "images/animals/hedgehog.png", 
  "images/animals/pom.png", 
  "images/animals/racoon.png", 
  "images/animals/retriever.jpeg", 
  "images/animals/samoyed.png", 
  "images/animals/toucan.png"
]
var names = [
  "Chim",
  "Taffy",
  "Flinch",
  "Swifty",
  "Hermes",
  "Peanut Butter",
  "Rufus",
  "Goldie",
  "Snickers",
  "Truffle"
]
var ages = [
  "5",
  "8",
  "2",
  "6",
  "4",
  "1",
  "3",
  "10",
  "9",
  "7"
]

document.querySelector("#animal").src = animals[0]
document.querySelector("#name").innerHTML = names[0]
document.querySelector("#age").innerHTML = ages[0]

function heart() {
  arr.push("Heart")
  console.log(arr)
  console.log(animals[0])
  if (arr.length <= animals.length) {
    img = document.querySelector("#animal").src = animals[(arr.length - 1) % animals.length]
    document.querySelector("#name").innerHTML = names[counter % names.length]
    document.querySelector("#age").innerHTML = ages[counter % ages.length]
    counter++
  } else {
    document.querySelector(".heartReject").hidden = true
  }    
}

function reject() {
  arr.push("Reject")
  console.log(arr)
  if (arr.length <= animals.length) {
    img = document.querySelector("#animal").src = animals[(arr.length - 1) % animals.length]
    document.querySelector("#name").innerHTML = names[counter % names.length]
    document.querySelector("#age").innerHTML = ages[counter % ages.length]
    counter++
  } else {
    document.querySelector(".heartReject").hidden = true
  }   
}