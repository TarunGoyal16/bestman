const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat,manAnimation, man
var backGr, backgrImg, bestManImg;
var drops=[];

var engine, world;

var rand;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");

    manAnimation = loadAnimation("walking Frame/walking_1.png","walking Frame/walking_2.png","walking Frame/walking_3.png","walking Frame/walking_4.png",
                        "walking Frame/walking_5.png","walking Frame/walking_6.png","walking Frame/walking_7.png","walking Frame/walking_8.png");

    
    backGrImg= loadImage("nightimage.jpeg")

    bestManImg= loadAnimation("bat/Bestman-01.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    //umbrella = new Umbrella(200,500);

    backGr= createSprite(100,350,400,700)
    backGr.addImage(backGrImg)
    backGr.scale=1.5

    man= createSprite(200,450)
    man.addAnimation("walking",manAnimation)
    man.addAnimation("bestanimation",bestManImg)
    man.scale=0.7

    //create drops
   for(var i =0; i<100;i++){
       drops.push(new Drops(random(0,400),random(0,400)))
    }
    
}

function draw(){
    Engine.update(engine);
    background(backGrImg); 

   backGr.velocityX= -2

    if(backGr.x<=0){
        backGr.x=350
    }

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    //umbrella.display();

    //display rain drops
    for(i=0;i<drops.length;i++){
        if(frameCount%30===0){
            drops[i].display()
        } 
       
   }
   if(frameCount>200){
       man.changeAnimation("bestanimation",bestManImg)
       man.scale=0.2
   }

    drawSprites();
}   

