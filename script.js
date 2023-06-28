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
//play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

function prevSong () => {
    songIndex--

    if(songIndex <0) {
        songIndex= songs.length-1
    }
    loadSong(songs[songIndex])
    playSong();
}

function nextSong () => {
    songIndex++

    if(songIndex > songs.lenth-1) {
        songIndex= 0
    }
    loadSong(songs[songIndex])
    playSong();
}


//EVENT listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
//prev and next btn

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
