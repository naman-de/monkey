
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
createCanvas(400,400)
  monkey=createSprite(100,250,9,9)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.1
}
 score=0



function draw() {
  background(225)
   text("survivel time: "+ score, 170,50);
ground = createSprite(200,280,400,10);
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
 monkey.collide(ground );
   score = score + Math.round(getFrameRate()/60);
  
  drawSprites();
  spawnbanana()
  spawnobstacle()
  
}
function spawnbanana() {
  
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
  }
  }
function spawnobstacle() {
  
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random( 240,240));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
  }
  }

