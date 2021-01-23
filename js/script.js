// AOS

AOS.init();

// HIDE BAR

var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("cabecalhoPrincipal").style.opacity = "1";
    document.getElementById("cabecalhoPrincipal").style.transition = "all 0.6s ease-in-out";
    } else {
    document.getElementById("cabecalhoPrincipal").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}

// burger menu

const menuBtn = document.querySelector('.hamburger');
const pageList = document.querySelector('.cabecalhoPrincipalMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('is-active');
        pageList.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('is-active');
        pageList.classList.remove('active');
        menuOpen = false;
    }
});