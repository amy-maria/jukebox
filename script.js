const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//song titles
const songs = ['hey', 'night-thunder', 'the_long_ride_home'];
//track songs
let songIndex = 1;

//inital load of songs to DOM
loadSong(songs[songIndex]);

//update song

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}
