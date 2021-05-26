var cat, catImg, catImg1, catImg2;
var mouse, mouseImg, mouseImg1, mouseImg2;
var bgImg;

function preload() {
    //load the images here
    catImg = loadAnimation("images/cat1.png");
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg2 = loadAnimation("images/cat4.png");

    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg2 = loadAnimation("images/mouse4.png");

    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    background("bgImg");

    //create tom and jerry sprites here
    cat = createSprite(700,500);
    cat.addAnimation("cat",catImg);
    cat.changeAnimation("cat");
    cat.scale = 0.2;

    mouse = createSprite(100,500);
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    mouse.scale = 0.2;  
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("catCollide",catImg2);
    cat.changeAnimation("catCollide");
    cat.velocityX = 0;

    mouse.addAnimation("mouseHappy",mouseImg);
    mouse.changeAnimation("mouseHappy");
    
    }

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catMoving",catImg1);
        cat.changeAnimation("catMoving");
        cat.velocityX = -4;

        mouse.addAnimation("mouseTeasing",mouseImg1);
        mouse.changeAnimation("mouseTeasing");
    }
}