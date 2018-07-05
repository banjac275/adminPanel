let isClicked = 0;
document.querySelector(".nav_top--menu_btn").addEventListener("click", (e) => {
  let btn = document.querySelector(".nav_top--menu_btn");
  let side = document.querySelector(".nav_sidebar--wrapper");
  let main = document.querySelector(".main");
  
  if(!isClicked){
    btn.classList.add("animNormal");
    btn.classList.remove("animReverse");
    side.classList.add("nav_sidebar--animated-left");
    side.classList.remove("nav_sidebar--animated-right");
    main.classList.add("divStretch");
    main.classList.remove("divShrink");
    isClicked = true;
  } else {
    btn.classList.add("animReverse");
    btn.classList.remove("animNormal");
    side.classList.add("nav_sidebar--animated-right");
    side.classList.remove("nav_sidebar--animated-left");
    main.classList.add("divShrink");
    main.classList.remove("divStretch");
    isClicked = false;
  }

});

let sidebar = document.querySelectorAll(".sidebar");

sidebar.forEach((el) => {
  let check = 0;
  el.children[0].addEventListener("click", () => {
    console.log(el.children[1].children);
    check = animateHelper(el.children[1].children, check);
  });
});

let userBtn = document.querySelector(".btn--user");
//console.log(userBtn.children[1].children);
let checkIt = 0;
userBtn.children[0].addEventListener("click", () => {
  checkIt = animateHelper(userBtn.children[1].children, checkIt);
});

function animateHelper(elementList, check) {
  if(!check){
    for (let i = 0; i < elementList.length; i++) {
      elementList[i].classList.add("height-expand");
      elementList[i].classList.remove("height-shrink");
      setTimeout(() => {elementList[i].style.display = "block"}, 200);
    } 
    return check = true;
  } else {
    for (let i = 0; i < elementList.length; i++) {
      elementList[i].classList.add("height-shrink");
      elementList[i].classList.remove("height-expand");
      setTimeout(() => {elementList[i].style.display = "none"}, 200);
    }
    return check = false;
  }
}