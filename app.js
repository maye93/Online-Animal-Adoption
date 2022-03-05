let list = document.getElementById("myList");
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
  console.log(counter)
  console.log(animals.length)
  if (counter < animals.length) {
    document.querySelector("#animal").src = animals[counter+1]
    document.querySelector("#name").innerHTML = names[counter+1]x
    document.querySelector("#age").innerHTML = ages[counter+1]
    
    var ul = document.getElementById("animalList");
    var li = document.createElement("li");
    var img = document.createElement("img");

    img.src = animals[counter];
    img.style.width = '156px';
    img.style.height = 'auto';
    li.setAttribute('id', names[counter+1]);
    li.appendChild(document.createTextNode(ages[counter+1] +" - "+ names[counter+1]));
    ul.appendChild(img, li);

    counter++
  } else {
    document.querySelector(".heartReject").hidden = true
  }    
}

function reject() {
  arr.push("Reject")
  console.log(arr)
  if (arr.length <= animals.length) {
    document.querySelector("#animal").src = animals[(arr.length - 1) % animals.length]
    document.querySelector("#name").innerHTML = names[counter % names.length]
    document.querySelector("#age").innerHTML = ages[counter % ages.length]
    counter++
  } else {
    document.querySelector(".heartReject").hidden = true
  }   
}