let header = document.querySelector("header");
let menuItems = document.querySelectorAll(".menu a");
let sections = document.querySelectorAll("section");

//on scroll to top, add class to header
document.addEventListener("scroll", () => {
  // if scroll is more than 500px, add class to header
  if (window.scrollY > 500) {
    //add class to header
    header.classList.add("scrolled");
  } else {
    //remove class from header
    header.classList.remove("scrolled");
  }
  //check sections in view and add class to menu items
  // loop through sections and check if they are in view
  sections.forEach((section, index) => {
    let sectionTop = section.offsetTop; //get the top position of the section
    let sectionHeight = section.offsetHeight; //get the height of the section
    //if the section is in view, add class to menu item
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      //remove class from all menu items
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      //add class to the current menu item
      menuItems[index].classList.add("active");
    }
  });
});
