
var soundC = document.querySelector('.sound-c');
var soundD = document.querySelector('.sound-d');
var soundE = document.querySelector('.sound-e');
var soundF = document.querySelector('.sound-f');
var soundG = document.querySelector('.sound-g');
var soundA = document.querySelector('.sound-a');
var soundB = document.querySelector('.sound-b');

var audioA = document.querySelector('[src="sounds/A.wav"]');
var audioB = document.querySelector('[src="sounds/B.wav"]');
var audioC = document.querySelector('[src="sounds/C.wav"]');
var audioD = document.querySelector('[src="sounds/D.wav"]');
var audioE = document.querySelector('[src="sounds/E.wav"]');
var audioF = document.querySelector('[src="sounds/F.wav"]');
var audioG = document.querySelector('[src="sounds/G.wav"]');

soundA.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioA.pause();
  audioA.currentTime = 0;

  // Khi stop xong mới play
  audioA.play();
})
soundB.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioB.pause();
  audioB.currentTime = 0;

  // Khi stop xong mới play
  audioB.play();
})
soundC.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioC.pause();
  audioC.currentTime = 0;

  // Khi stop xong mới play
  audioC.play();
})
soundD.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioD.pause();
  audioD.currentTime = 0;

  // Khi stop xong mới play
  audioD.play();
})
soundE.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioE.pause();
  audioE.currentTime = 0;

  // Khi stop xong mới play
  audioE.play();
})
soundF.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioF.pause();
  audioF.currentTime = 0;

  // Khi stop xong mới play
  audioF.play();
})
soundG.addEventListener('click', function() {
  // Truoc khi play sẽ stop audio
  audioG.pause();
  audioG.currentTime = 0;

  // Khi stop xong mới play
  audioG.play();
})