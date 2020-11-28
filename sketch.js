var  fixedRect, movingRect, gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 100, 50, 80);
  movingRect=createSprite(400,800,80,30);
  // gameObject1=createSprite(100,100,50,50);
  // gameObject2=createSprite(200,100,50,50);
  // gameObject3=createSprite(300,100,50,50);
  // gameObject4=createSprite(400,100,50,50);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  movingRect.velocityY=-3;
  fixedRect.velocityY=3;
}

function draw() {
  background(0,0,0);  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  // if(isTouching(movingRect,gameObject1)){
  //   movingRect.shapeColor="green";
  //   gameObject1.shapeColor="green";
  // }else{
  //   movingRect.shapeColor="red";
  //   gameObject1.shapeColor="red";
  // }
bounce_off(movingRect,fixedRect)
  drawSprites();
}

 function isTouching(obj1,obj2){
  if ( obj1.x-obj2.x <= obj2.width/2+obj1.width/2 
    &&obj2.x-obj1.x <= obj1.width/2+obj2.width/2
    && obj1.y-obj2.y <= obj2.height/2+obj1.height/2 
    &&obj2.y-obj1.y <= obj1.height/2+obj2.height/2){
   return true;
  }else{
    return false;
  }
 }