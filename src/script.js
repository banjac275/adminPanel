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
  list.forEach((element, ind) => {
    let query = document.querySelectorAll(element);

    query.forEach((el) => {
      let check = 0;
      
      el.children[0].addEventListener("click", (e) => {
        check = downsize(query, el.children[0], ind);
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
      elementList[i].classList.remove("height-shrink");
      setTimeout(() => {
        elementList[i].style.display = "block";
        child.classList.remove("fa-rotate-90");
      }, 200);
    } 
    return check = true;
  } else {
    for (let i = 0; i < elementList.length; i++) {
      let child;
      (elementList[i].parentNode.parentNode.children[0].children[1] === undefined) ? child = elementList[i].parentNode.parentNode.children[0].children[0] : child = elementList[i].parentNode.parentNode.children[0].children[1];
      elementList[i].classList.add("height-shrink");
      elementList[i].parentNode.classList.add("no-border");
      elementList[i].classList.remove("height-expand");
      setTimeout(() => {
        elementList[i].style.display = "none";
        child.classList.add("fa-rotate-90");
      }, 200);
    }
    return check = false;
  }
}

function user(type) {
  let userLoc = document.querySelector(".user--name");
  let sidebarUsers = document.querySelector(".sidebar_users");
  let sidebarEvents = document.querySelector(".sidebar_events");
  let sidebarCompanies = document.querySelector(".sidebar_companies");
  switch(type) {
    case 'Banji':
      userLoc.innerHTML = "Nikola Stevanović";
      sidebarUsers.style.display = "block";
      sidebarEvents.style.display = "block";
      sidebarCompanies.style.display = "block";
      break;
    case 'moderator':
      userLoc.innerHTML = "Moderator";
      sidebarUsers.style.display = "none";
      sidebarEvents.style.display = "block";
      sidebarCompanies.style.display = "none";
      break;
    case 'super':
      userLoc.innerHTML = "Super Admin (Aćim)";
      sidebarUsers.style.display = "block";
      sidebarEvents.style.display = "block";
      sidebarCompanies.style.display = "block";
      break;
    default:
      userLoc.innerHTML = "Random korisnik";
      sidebarUsers.style.display = "block";
      sidebarEvents.style.display = "none";
      sidebarCompanies.style.display = "block";
      break;
  }
}

user("Banji");

let dropElements = ['.dropdown_wrapper'];

function clearDisplay(elems) {
  (document.body || document.documentElement).addEventListener("click", (e) => {
    elems.forEach((el) => {
      let tmp = document.querySelectorAll(el);
      tmp.forEach((t) => {
        if(e.target !== t) t.style.display = "none";
      });
    });
  }, false);
}

//clearDisplay(dropElements);

function downsize(parent, element, index) {
  if(index === 0) {
    parent.forEach(el => {
      if(el.children[0] !== element) {
        if(el.children[1].children[0].classList.contains("height-expand")) animateHelper(el.children[1].children, true);
      } else {
        if(el.children[1].children[0].classList.contains("height-shrink")) return animateHelper(el.children[1].children, false);
        else return animateHelper(el.children[1].children, true);
      }
    });
  } else {
    console.log(parent);
    console.log(element.parentNode);
  }
}