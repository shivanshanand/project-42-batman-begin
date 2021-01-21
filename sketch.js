const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops, boy, boyImg;
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
    
}

function setup(){
    var canvas=createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

    drops=new Drop(250,690,20,20);
    boy=new Umbrella(250,620,150,210);


   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    boy.display();
    drops.display();

    for(var s=0;s<maxDrops;s++){
        drop.push(new Drop(random(0,600),random(0,600)));
    }

    if(drops.body.position.y>height){
        Matter.Body.setPosition(drops.body,{x:random(0,600),y:random(0,600)});
    }
}   
