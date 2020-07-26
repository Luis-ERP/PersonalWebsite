window.addEventListener('scroll', function(){
  const scrolled = window.scrollY;

  var body = document.body;
  var navItem = document.getElementsByClassName('navItem');

  if (scrolled > 550 && scrolled < 850){
    //change bg color
    var bgColor = changeBodyBg([0,0,0], [235,235,235], 550, 850, scrolled)
    body.style.background = bgColor;
    
    //change body text color
    var textColor = changeBodyBg([255,255,255], [10,10,10], 550, 850, scrolled);
    body.style.color = textColor;

    //change nav items color
    for (var i = navItem.length - 1; i >= 0; i--) {
      navItem[i].style.color = textColor;
    }
  }
  if (scrolled < 500) {
    body.style.background = 'black';
    body.style.color = "#fff";
    for (var i = navItem.length - 1; i >= 0; i--) {
      navItem[i].style.color = "#fff";
    }
  }

})


function changeBodyBg(oldColor, newColor, iScroll, fScroll, scrolled){
  // [0,0,0], [255,255,255], 500, 850, 600

  var steps = fScroll - iScroll; //350
  var inStep = scrolled - iScroll; //100

  var newRed = newColor[0] - oldColor[0]; //255
  var newGreen = newColor[1] - oldColor[1]; //255
  var newBlue = newColor[2] - oldColor[2]; //255

  newRed = steps / newRed; //1.37
  newGreen = steps / newGreen; //1.37
  newBlue = steps / newBlue; //1.37

  var red = inStep * newRed;
  var green = inStep * newGreen;
  var blue = inStep * newBlue;

  if (red > 255){
    red = 255;
  }
  else if (red < 0){
    red = 0;
  }
  if (green > 255){
    green = 255;
  }
  else if (green < 0){
    green = 0;
  }
  if (blue > 255){
    blue = 255;
  }
  else if (blue < 0){
    blue = 0;
  }

  var currentColor = "rgb(" + Math.round(red) + "," + Math.round(green) + "," + Math.round(blue) + ")";
  return currentColor;
}
