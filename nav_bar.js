let navBar = document.getElementById("navbar")

let ogPosition = navBar.offsetTop;

function changeColor() {

    if (window.scrollY >= ogPosition ) {
        navBar.style.backgroundColor = "#b14aec"
    }
    else {
        navBar.style.backgroundColor = "#191E29"
    }
}

window.onscroll = function() {
  changeColor();
};