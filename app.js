var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
    // Show dark mode image and hide light mode image
    clone.querySelector('.person-light').style.display = 'none';
    clone.querySelector('.person-dark').style.display = 'block';
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
    // Show light mode image and hide dark mode image
    clone.querySelector('.person-dark').style.display = 'none';
    clone.querySelector('.person-light').style.display = 'block';
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
  });
}


function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();