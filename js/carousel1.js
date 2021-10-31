const slides = document.getElementsByClassName("inner");
const dots = document.getElementsByClassName("dot")

function slidMove(n) {
  var i;
  //console.log(n)
  
  //replace active to none
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  //Slides images onclick
  if(n === 1){
    slides[0].style.transform = "translateX(-0%)";
  } else if (n === 2) {
    slides[0].style.transform = "translateX(-33.33333333333333%)";
  } else if (n === 3) {
    slides[0].style.transform = 'translatex(-66.6666666667%)';
  }
  
  //console.log(dots)
  //add active class to current button
  dots[n-1].className += " active";
}