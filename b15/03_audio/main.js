let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let audioEl = document.querySelector('audio');
let durationEl = document.querySelector('.duration');
let currentTimeEl = document.querySelector('.current-time');
let sliderBarEl = document.querySelector('.slider__bar');
let sliderBarCircleEl = document.querySelector('.slider__bar-circle');
let durationBarEl = document.querySelector('.duration-bar');
let customAudioWrapperEl = document.querySelector('.custom-audio');

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

function handleDragDurationBar(evt) {
  // let customAudioRectDom = customAudioWrapperEl.getBoundingClientRect();
  // let durationBarRectDom = durationBarEl.getBoundingClientRect();
  // let customAudioWithViewport_x = customAudioRectDom.left;
  // let durationBarWithViewport_x = durationBarRectDom.left;
  // let offsetLeftDurationBarWithCustomAudioEl = durationBarWithViewport_x - customAudioWithViewport_x;
  // let offsetXMouseWithCustomAudioEl = evt.offsetX;
  // offsetXMouseWithDurationBarEl = offsetXMouseWithCustomAudioEl - offsetLeftDurationBarWithCustomAudioEl;  

  let durationBarRectDom = durationBarEl.getBoundingClientRect();
  let clientX_Mouse = evt.clientX;
  let clientX_DurationBar = durationBarRectDom.left;
  let offsetXMouseWithDurationBarEl = clientX_Mouse - clientX_DurationBar;

  // if (
  //   offsetXMouseWithDurationBarEl <= 0 || 
  //   offsetXMouseWithDurationBarEl >= durationBarRectDom.width
  // ) {
  //   // console.log('nằm ngoài vùng điều chỉnh thanh thời gian')
  // } else {
  //   let percent = offsetXMouseWithDurationBarEl / durationBarRectDom.width;
  //   audioEl.currentTime = percent * audioEl.duration;
  // }

  if (
    offsetXMouseWithDurationBarEl >= 0 && 
    offsetXMouseWithDurationBarEl <= durationBarRectDom.width
  ) {
    let percent = offsetXMouseWithDurationBarEl / durationBarRectDom.width;
    audioEl.currentTime = percent * audioEl.duration;
  }
}

playBtn.addEventListener('click', handlePlayAudio);
pauseBtn.addEventListener('click', handlePauseAudio);
// durationBarEl.addEventListener('click', handleClickDurationBar);

audioEl.addEventListener('timeupdate', function(evt) {
  updateTimerUI();
  updateDurationBarUI();
})


let isMouseDown = false;
durationBarEl.addEventListener('mousedown', function(evt){
  isMouseDown = true;
})

customAudioWrapperEl.addEventListener('mousemove', function(evt){
  if (isMouseDown) {
    handleDragDurationBar(evt)
  }
})

customAudioWrapperEl.addEventListener('mouseup', function(evt){
  isMouseDown = false;
})
customAudioWrapperEl.addEventListener('mouseleave', function(evt){
  isMouseDown = false;
})

document.addEventListener('keyup', function(evt) {
  if (evt.code === 'ArrowRight') {
    let newTime = audioEl.currentTime + 5
    if (newTime > audioEl.duration) {
      audioEl.currentTime = audioEl.duration;
      handlePauseAudio();
    } else {
      audioEl.currentTime = newTime;
    }
  } else if (evt.code === 'ArrowLeft') {
    let newTime = audioEl.currentTime - 5
    if (newTime < 0) {
      audioEl.currentTime = 0;
    } else {
      audioEl.currentTime = newTime;
    }
  } else if (evt.code === 'Space') {
    if (audioEl.paused) {
      handlePlayAudio();
    } else {
      handlePauseAudio();
    }
  }
})