// Получить кнопку
let mybutton = document.getElementById("myBtn");

// Когда пользователь прокручивает документ на 850 пикселей вниз, показать кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Когда пользователь нажимает на кнопку, документ прокручивается вверх
function topFunction() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
};