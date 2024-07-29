window.onscroll = function() {navbarVis()}

var navbar = document.getElementById("nav_sticky");

var sticky = navbar.offsetTop;

function navbarVis(){
    if (window.scrollY >= sticky){
        navbar.classList.add("sticky")
        // navbar.style.visibility = "visible";
    }
    else {
        navbar.classList.remove("sticky");
        // navbar.style.visibility = "hidden";
        // navbar.style.display = "none";
    }
}