var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,200,100,20);
car.shapeColor = "yellow";
car.velocityX = 6;

wall = createSprite(1000,100,20,500);
wall.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,car)){

  movingRect.shapeColor = "blue";
car.shapeColor = "blue";

 } else{
  movingRect.shapeColor = "green";
  car.shapeColor = "yellow";
 }
 if(collide(car,wall)){
  car.shapeColor = "orange";
  wall.shapeColor = "orange";
  car.velocityX = 0;
 } else{
  car.shapeColor = "pink";
  wall.shapeColor = "pink";
car.velocityX = 6;
 }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;

}
else {
  return false;
}
}


function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;

}
else {
  return false;
}
}

