var jar ,jar1,background1,spider,spider1,background2,background3,background4,beeImage,bee,score=0,honeyGroup,webGroup
var gameoverImage,gameover
var gameState=0

function preload(){
   jar=loadImage("images/jar.png")
   background1=loadImage("images/background.jpg")
   background3=loadImage("images/jungle2.jpg")
   spider=loadImage("images/web.png")
   beeImage=loadImage("images/bee.png")
   gameoverImage=loadImage("images/gameover.jpg")
}


function setup() {
  createCanvas(800,500);
 //background2=createSprite(400,300,1000,500)

 background4=createSprite(400,300,1000,500)
 //background4.visible=fa40se
 //background2.addImage(background1)
background4.addImage(background3)
bee=createSprite(100,200,20,20)
bee.addImage(beeImage)
bee.scale=0.2
honeyGroup=new Group()
  webGroup=new Group()
background4.scale=1


}

function draw() {
  background(0);  
  
  gameover=createSprite(400,250,800,500)
     gameover.addImage(gameoverImage)
     gameover.scale = 2
     gameover.visible=false
  if (gameState === 0){
    background4.velocityX=-2
    if(background4.x<300){
      background4.x=500
    
     }
     if(keyDown("UP_ARROW")){
       bee.y=bee.y-3
     }
     if(keyDown("dOWN_ARROW")){
       bee.y=bee.y+3
     }
   spawnHoney()
   spawnWeb()
   if(honeyGroup.isTouching(bee)){
     honeyGroup.destroyEach()
     score=score+5
   }
   
   textSize(30)
  fill ("white")
  text ("score:"+score,650,50)
  }if(webGroup.isTouching(bee)){
    background4.velocityX=0
    gameover.visible=true
    gameState=1
  }
  else if (gameState=== 1){
if(keyDown("R")){
  gameState = 0
  gameover.visible= false
 
  
  
  }
}
  

  drawSprites();
  
}
function spawnHoney (){
  
if(frameCount%200===0){
  jar1=createSprite(800,random(50,400),20,20)
  jar1.addImage(jar)
  jar1.scale=0.2
  jar1.velocityX=-2
  honeyGroup.add(jar1)
}

}
function spawnWeb(){
  
if(frameCount%100===0){
  spider1=createSprite(800,random(50,400),20,20)
  spider1.addImage(spider)
  spider1.scale=0.3
  spider1.velocityX=-3*(frameCount/250)
  webGroup.add(spider1)
}

}