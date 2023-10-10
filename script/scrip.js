/* FUNÇÃO PARA OS CARDS*/ 
let more = document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    })
}

/*FUNÇÃO DO ARCODEÃO*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/** FUNÇÃO MODAL*/
// seleção do modal por endereço
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
var modal4 = document.getElementById('id04');
// abrir e fechar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}
window.onclick = function(event3) {
    if (event3.target == modal3) {
        modal3.style.display = "none";
    }
}
window.onclick = function(event4) {
    if (event4.target == modal4) {
        modal4.style.display = "none";
    }
}
window.onclick = function(event5) {
    if (event5.target == modal5) {
        modal5.style.display = "none";
    }
}
/*FIM FUNÇÃO MODAL*/


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
function opemMenu(){
  if (itens.style.display == 'block'){
    itens.style.display ='none'
  }else{
    itens.style.display ='block'
    itens.style.right ='0'
  }
}


function fechaMenu(){
  itens.style.display = 'none'
}*/

function opemMenu(){
  document.getElementById("itens").style.right = "0";
  document.getElementById("itens").style.width = "100%";
}
function fechaMenu(){
  document.getElementById("itens").style.width = "0";
  document.getElementById("itens").style.right = "-100%";
}


function dropdow(){
  var btndrop = document.getElementById('dropbtn')
  var idrop = document.getElementById('icon-app')
  if(btnapps.style.display == 'flex'){
    btndrop.style.color ='#97FEED'
    idrop.style.transform ='rotate(0)'
    btnapps.style.display ='none'
  }else{
    btnapps.style.display ='flex'
    btndrop.style.color ='white'
    idrop.style.transform ='rotate(90deg)'
    
  }
}

