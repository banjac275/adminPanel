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

let infoMessage = document.querySelectorAll(".info--message");

infoMessage.forEach((el) => {
  let temp = el.innerHTML;
  el.innerHTML = temp.slice(0, 20);
  el.innerHTML += "...";
});

let selList = [".sidebar", ".btn--user", ".btn--notification", ".btn--task", ".btn--mail"];

listenerSetter(selList); 

function listenerSetter(list) {
  list.forEach(element => {
    let query = document.querySelectorAll(element);

    query.forEach((el) => {
      let check = 0;
      
      el.children[0].addEventListener("click", (e) => {
        e.stopPropagation();
        check = animateHelper(el.children[1].children, check);
      });
    });
  });
}

function animateHelper(elementList, check) {
  if(!check){
    for (let i = 0; i < elementList.length; i++) {
      let child;
      (elementList[i].parentNode.parentNode.children[0].children[1] === undefined) ? child = elementList[i].parentNode.parentNode.children[0].children[0] : child = elementList[i].parentNode.parentNode.children[0].children[1];
      elementList[i].classList.add("height-expand");
      elementList[i].parentNode.classList.remove("no-border");
      child.classList.remove("fa-rotate-90");
      elementList[i].classList.remove("height-shrink");
      setTimeout(() => {elementList[i].style.display = "block"}, 200);
    } 
    return check = true;
  } else {
    for (let i = 0; i < elementList.length; i++) {
      let child;
      (elementList[i].parentNode.parentNode.children[0].children[1] === undefined) ? child = elementList[i].parentNode.parentNode.children[0].children[0] : child = elementList[i].parentNode.parentNode.children[0].children[1];
      elementList[i].classList.add("height-shrink");
      elementList[i].parentNode.classList.add("no-border");
      child.classList.add("fa-rotate-90");
      elementList[i].classList.remove("height-expand");
      setTimeout(() => {elementList[i].style.display = "none"}, 200);
    }
    return check = false;
  }
}