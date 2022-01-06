var song = Array("song1", "song2", "song3", "song4", "song5", "song6");

function randomSong() {
  var randomSong = song[Math.floor(Math.random() * song.length)];
  document.getElementById('randomSong').value = randomSong;
}

var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

function randomQuote() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.body.innerHTML = randomItem;
}