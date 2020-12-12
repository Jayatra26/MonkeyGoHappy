
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.x = ground.width /2;
ground.velocityX = -4;
console.log(ground.x)
  
survivalTime=0;
  

  
}


function draw() {
background(250);
  
obstacles();  
banana();

  
if (keyDown("space") && monkey.y >=290){
monkey.velocityY=-12;
}
  
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
  
if (ground.x < 0){
    ground.x = ground.width/2;
  }

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(Math.round(frameCount/frameRate()))
text("Survival Time: " + survivalTime,100,50);
  

drawSprites();
  
}

function obstacles(){
if (frameCount % 300 === 0){
obstacle=createSprite(600,330,40,10);
obstacle.addImage(obstaceImage);
obstacle.velocityX= -(6 + 3*survivalTime/100);
obstacle.scale=0.1;
}
}

function banana(){
if (frameCount % 80 === 0){                                 var banana=createSprite(350,160,20,20);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.lifetime=60;
banana.scale=0.1;
banana.velocityX=-6
}
}







