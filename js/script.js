/* ==========================================
   Rafael Soldera Portfolio
   script.js
========================================== */

// =========================================
// NAVBAR SCROLL
// =========================================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// =========================================
// BACK TO TOP
// =========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});