// var song = Array("song1", "song2", "song3", "song4", "song5", "song6");

// function randomSong() {
//   var randomSong = song[Math.floor(Math.random() * song.length)];
//   document.getElementById('randomSong').value = randomSong;
// }

// var myArray = [
//   "Apples",
//   "Bananas",
//   "Pears"
// ];

// function randomQuote() {
//   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
//   document.body.innerHTML = randomItem;
// }

var arr = []
var imgArray = ["images/animals/cockatiels.png", "images/animals/fox.png"]

function likeHeart() {
    var img
    arr.push("Heart")
    console.log(arr)
    if (arr.length < imgArray.length)
        img = document.querySelector("#img").src = imgArray[(arr.length - 1) % imgArray.length]
    else
        img = document.querySelector("#img").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
}

function Reject()
{
    arr.push("Reject")
    console.log(arr)
    if (arr.length < imgArray.length)
        img = document.querySelector("#img").src = imgArray[(arr.length - 1) % imgArray.length]
    else
        img = document.querySelector("#img").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
}