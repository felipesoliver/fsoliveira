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

