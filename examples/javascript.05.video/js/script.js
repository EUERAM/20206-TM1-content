// Declare variables for the video element and the play button
let playButton = document.querySelector(".play");
let video = document.querySelector("video");

//Create play event listener
playButton.addEventListener("click", function () {
  playVideo();
});

function playVideo() {
  // Play the video
  video.play();
  console.log("playVideo function called");
}

function stopVideo() {
  // Pause the video
  video.pause();
  console.log("stopVideo function called");
}
