var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 50);//25
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(800, 100,80,80);//40  + 25 = 65
  movingRect.shapeColor = "green";

  fixedRect.velocityX = +5;
  movingRect.velocityX = -5;
  

//400-600 =-200<65
 
}

function draw() {
  background(0,0,0);  
//movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;

console.log(movingRect.x-fixedRect.x);

//if(movingRect.x-fixedRect.x<(fixedRect.width/2+movingRect.width/2) 
//&& movingRect.x-fixedRect.x>-((fixedRect.width/2+movingRect.width/2))) {
//&& movingRect.y-fixedRect.y<(fixedRect.height/2+movingRect.height/2) 
//&& movingRect.y-fixedRect.y>-((fixedRect.height/2+movingRect.height/2) )){
  //fixedRect.shapeColor = "red";
  //movingRect.shapeColor = "red";
 // fixedRect.velocityX = fixedRect.velocityX*(-1);
//   movingRect.velocityX = movingRect.velocityX*(-1);
// }
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
   movingRect.velocityX = movingRect.velocityX * (-1);
   fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
//else{
  //fixedRect.shapeColor = "green";
 // movingRect.shapeColor = "green";
//}

  drawSprites();
}





































// movingRect.velocityY = -5;
// fixedRect.velocityY = +5;
// if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
//   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
// movingRect.velocityX = movingRect.velocityX * (-1);
// // fixedRect.velocityX = fixedRect.velocityX * (-1);
// }
// if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
// && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
// movingRect.velocityY = movingRect.velocityY * (-1);
// //  fixedRect.velocityY = fixedRect.velocityY * (-1);
// }
