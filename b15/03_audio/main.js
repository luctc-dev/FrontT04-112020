let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let audioEl = document.querySelector('audio');
let durationEl = document.querySelector('.duration');
let currentTimeEl = document.querySelector('.current-time');
let sliderBarEl = document.querySelector('.slider__bar');
let sliderBarCircleEl = document.querySelector('.slider__bar-circle');
let durationBarEl = document.querySelector('.duration-bar');

function handlePlayAudio() {
  audioEl.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
}

function handlePauseAudio() {
  audioEl.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'block';
}

function formatTimer(time, element) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  element.innerText = `${minutes}:${seconds}`;
}

function updateTimerUI() {
  formatTimer(audioEl.currentTime, currentTimeEl);
}

function updateDurationUI() {
  let idInterval = setInterval(function() {
    if (audioEl.duration) {
      formatTimer(audioEl.duration, durationEl);
      clearInterval(idInterval);
    }
  }, 10)
}
updateDurationUI();

function updateDurationBarUI() {
  let totalTime = audioEl.duration;
  let currentTime = audioEl.currentTime;
  let percent = (currentTime / totalTime) * 100;

  sliderBarEl.style.width = percent + '%';
  sliderBarCircleEl.style.left = percent + '%';
}

function handleClickDurationBar(evt) {
  let durationBarDomRect = durationBarEl.getBoundingClientRect();

  let offsetX = evt.offsetX;
  let widthDurationBar = durationBarDomRect.width;

  let percent = offsetX / widthDurationBar;
  
  audioEl.currentTime = percent * audioEl.duration;
}

playBtn.addEventListener('click', handlePlayAudio);
pauseBtn.addEventListener('click', handlePauseAudio);
durationBarEl.addEventListener('click', handleClickDurationBar);

audioEl.addEventListener('timeupdate', function(evt) {
  updateTimerUI();
  updateDurationBarUI();
})

// audioEl.addEventListener('loadedmetadata', function(evt) {
//   updateDurationUI();
// })