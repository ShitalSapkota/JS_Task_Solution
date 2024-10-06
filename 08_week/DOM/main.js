const btn_backTop = document.querySelector('#backTop');
const btn_mobile = document.querySelector('.mobile');

const navbar = document.querySelector('nav ul');

const modalbtn =document.querySelector('.modalbtn');

const overlay = document.querySelector('.overlay');

btn_backTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// use if empty in local storage before adding data.

/* for Shrink Navigation Menu on Scroll */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.padding = "30px 10px";
    document.querySelector("header").style.fontSize = "16px";

  } else {
    document.querySelector("header").style.padding = "50px 10px";
    document.querySelector("header").style.fontSize = "20px";
    document.querySelector("header").style.backdropFilter = "blur(10px)";
    //document.querySelector("header").style.background = "transparent";
    
  }
}

let toggle = false;

function toggleMenu(){
    navbar.classList.toggle('responsive');
}

btn_mobile.addEventListener('click' , toggleMenu);

function addModal() {
    overlay.classList.toggle('visible');
    btn_backTop.style.display = "none";
  
}

modalbtn.addEventListener('click', addModal);

const endmodal = document.querySelector('.endmodal');
endmodal.addEventListener('click', ()=>{
  return
});



/*     document.body.scrollTop ;
    document.documentElement.scrollTop 
    defines for different browsers
    */