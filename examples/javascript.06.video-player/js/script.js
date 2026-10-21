/* DECLARING VARIABLES */
//TO DO: declare the two video elements
let video1 = document.querySelector("#video1");
let video2 = document.querySelector("#video2");

//variable to check if the spacebar is pressed
let isSpacePressed = false;

/* INITIALIZATION */
//TO DO: start 2 videos at the same time
video1.play();
video2.play();

/* EVENTS */
document.addEventListener("keydown", function (event) {
  console.log(event.code);
  //check if the pressed key is the spacebar
  if (event.code === "Space") {
    if (isSpacePressed == false) {
      //TO DO: if isSpacePressed is false, create a random number between 1-8 and change the source of the videos
      let num = Math.floor(Math.random() * 8) + 1;
      video2.src = "medias/video" + num + ".mp4";
    }
    isSpacePressed = true;
    // TO DO: call the switchVideos() function to switch back to the original videos
    switchVideos();
  }
});

document.addEventListener("keyup", function (event) {
  //check if the pressed key is the spacebar
  if (event.code === "Space") {
    isSpacePressed = false;
    // TO DO: call the switchVideos() function to switch back to the original videos
    switchVideos();
  }
});

/* FUNCTIONS */
function switchVideos() {
  if (isSpacePressed) {
    //TO DO: if isSpacePressed is true, set the opacity of video1 to 0 and the opacity of video2 to 1
    video1.style.opacity = 0;
    video2.style.opacity = 1;
  } else {
    //TO DO: if isSpacePressed is false, set the opacity of video1 to 1 and the opacity of video2 to 0
    video1.style.opacity = 1;
    video2.style.opacity = 0;
  }
}
