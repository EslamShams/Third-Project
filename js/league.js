
var slideIndex = 0;
carousel();

function carousel () {
  var i;
  var x = document.getElementsByTagName("img");
  for (i = 0; i < x.length; i= i + 1) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); 
}