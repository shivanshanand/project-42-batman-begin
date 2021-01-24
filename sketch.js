const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops, boy, thunder, boyImg, thunder1Img, thunder2Img, thunder3Img, thunder4Img;
var maxDrops=100;


drop=[];

function preload(){

    boyImg=loadImage("walk/walking_1.png");
    boyImg=loadImage("walk/walking_2.png");
    boyImg=loadImage("walk/walking_3.png");
    boyImg=loadImage("walk/walking_4.png");
    boyImg=loadImage("walk/walking_5.png");
    boyImg=loadImage("walk/walking_6.png");
    boyImg=loadImage("walk/walking_7.png");
    boyImg=loadImage("walk/walking_8.png");  

    thunder1Img=loadImage("thunder/1.png");
    thunder2Img=loadImage("thunder/2.png");
    thunder3Img=loadImage("thunder/3.png");
    thunder4Img=loadImage("thunder/4.png");
    
}

function setup(){
    var canvas = createCanvas(500,700);
    engine = Engine.create();
    world  = engine.world;

    boy=new Umbrella(250,570);

    for(var s=0;s<maxDrops;s++){
        drop.push(new Drop(random(0,400),random(0,400)));
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);

    boy.display();
   
    for(var i=0;i<maxDrops;i++){
      drop[i].display();
      drop[i].fall();
    } 

    spawnthunder();

    drawSprites();
}   

function spawnthunder() {
    if(frameCount % 60 === 0) {
        thunder = createSprite(50,20,20,20);
        thunder.x = random(50,500);
        
        //generate random thunder
        var s = Math.round(random(1,4));
        switch(s) {
          case 1: thunder.addImage(thunder1Img);
                  break;
          case 2: thunder.addImage(thunder2Img);
                  break;
          case 3: thunder.addImage(thunder3Img);
                  break;
          case 4: thunder.addImage(thunder4Img);
                  break;
          default: break;
        }

        thunder.scale = 0.5;
    }
    else{
        if(frameCount % 65===0){
        thunder.visible=false;
      }
    }
}
