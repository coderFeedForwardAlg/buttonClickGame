/*
this is to be use as en example when makeing a p5 
    react object 
  
this makes an ellipse get bigger and smaller

Max Scott
last modified 1-29-2022
*/



function setup() {
  createCanvas(400, 400);
  
}
let x = Math.floor(Math.random() * 300) + 50 ;
let y = Math.floor(Math.random() * 300) + 50;
function draw() {
  
  background(220);
  
  
  fill(255,0,0);
  ellipse(x,y,100,100);

}

function mouseClicked() {
  if( Math.abs(x - mouseX) < 100 && Math.abs( y - mouseY) < 50   ){
    x = Math.floor(Math.random() * 300) + 50 ;
    y = Math.floor(Math.random() * 300) + 50;
    ellipse(x,y,100,100);
  } 
  
 
}