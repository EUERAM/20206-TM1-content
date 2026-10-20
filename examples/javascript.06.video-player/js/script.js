/* DECLARING VARIABLES */
//TO DO: declare the two video elements

//variable to check if the spacebar is pressed
let isSpacePressed = false;

/* INITIALIZATION */
//TO DO: start 2 videos at the same time

/* EVENTS */
document.addEventListener("keydown", function (event) {
  //check if the pressed key is the spacebar
  if (event.code === "Space") {
    if (isSpacePressed == false) {
      //TO DO: if isSpacePressed is false, create a random number between 1-8 and change the source of the videos
    }
    isSpacePressed = true;
    // TO DO: call the switchVideos() function to switch back to the original videos
  }
});

document.addEventListener("keyup", function (event) {
  //check if the pressed key is the spacebar
  if (event.code === "Space") {
    isSpacePressed = false;
    // TO DO: call the switchVideos() function to switch back to the original videos
  }
});

/* FUNCTIONS */
function switchVideos() {
  if (isSpacePressed) {
    //TO DO: if isSpacePressed is true, set the opacity of video1 to 0 and the opacity of video2 to 1
  } else {
    //TO DO: if isSpacePressed is false, set the opacity of video1 to 1 and the opacity of video2 to 0
  }
}
