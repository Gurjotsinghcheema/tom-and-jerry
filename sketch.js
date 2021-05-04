var cat,catimg,catimg2
var ground,groundimg
var mouse,mouseimg,mouse2
var cat1,mouse1
/*function preload() {
    //load the images here

}*/

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    catimg2=loadImage("images/cat1.png")
    catimg=loadAnimation("images/cat2.png","images/cat3.png");
    groundimg=loadImage("images/garden.png");
    mouseimg=loadImage("images/mouse1.png")
    mouse2=loadAnimation("images/mouse3.png","images/mouse2.png")
    cat1=loadImage("images/cat4.png")
    mouse1=loadImage("images/mouse4.png")

 cat=createSprite(800,680,30,30)
     cat.addImage(catimg2)
     cat.scale=0.2;
 mouse=createSprite(100,680,30,30)
 mouse.addImage(mouseimg)
 mouse.scale=0.2;
}

function draw() {

    background(groundimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addImage("cat1",cat1);
    cat.changeImage("cat1");
    mouse.addImage("mouse1",mouse1)
    mouse.changeImage("mouse1")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-4
    cat.addAnimation("cat",catimg);
    cat.changeAnimation("cat");
    mouse.addAnimation("mouse",mouse2)
    mouse.changeAnimation("mouse")
}

}
