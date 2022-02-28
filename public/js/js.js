document.addEventListener("DOMContentLoaded", function(event) {
  // slideshow otomatis
  var i = 0;
  var images = [];
  var slideTime = 3000; // 3 seconds

  images[0] = './img/hero3.jpg';
  images[1] = './img/hero1.jpg';
  images[2] = './img/hero2.jpg';

  function changePicture() {
    header = document.getElementById("head");
    header.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout(changePicture, slideTime);
  }

  window.onload = function() {
    changePicture()
  };
  // sticky navbar
  window.onscroll = function() {
    myFunction()
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Active
  var btns = navbar.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
});