var backgroundImg,invisibleGround,bg;
var boyImg1,boyImg2,boyImg3;

function preload() {
  backgroundImg = loadImage("./images/bg-1.png");
  

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  
  invisibleGround= createSprite(0,850,20000,20);
  invisibleGround.x = invisibleGround.width / 2;
  invisibleGround.velocityX = -10;


}



function draw() {
  background(backgroundImg);  

  drawSprites();
}