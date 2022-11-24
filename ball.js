var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse =false;
var blinking=['white',"red",'green','blue'];

var ball = document.getElementById("ball");
var a =0;

//write a function that can change the position of the html element "ball"
function moveBall() {
  
  console.log('blinking index  '+a);
  
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  
   if (reverse == false) {
    positionX = positionX + velocity;
    positionY = positionY + velocity;

  }
  
  if (reverse == true) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
   
  }
  
  if (positionX == Xmin || positionX > Xmax) 
  
  reverse = !reverse;
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
  if(a>3) a=0;
 
  }
function changeColor(){
  
    ball.style.backgroundColor = blinking[a];
    
     moveBall(); 
     a++;
    
   }

// This call the moveBall function every 100ms
setInterval(changeColor,100);
