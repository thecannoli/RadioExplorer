const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const songTitle = document.querySelector('.title')
const cover = document.querySelector('.cover')

//Song Titles
const songs = ['HFMT-1', 'HFMT-2', 'HFMT-3']

//Keep track of episodes
let songIndex = 2

//initially load song info into DOM
loadSong(songs[songIndex])

//update the song details
function loadSong(song) {
    title.innerText = song
    audio.src = 'http://193.122.63.224/radio/8000/radio.mp3'
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}


// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})