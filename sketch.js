const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops, boy, boyImg;
var maxDrops=100;

function preload(){

    boyImg=loadImage("walk/walking_1.png");

   /* boyImg=loadImage("walk/walking_2.png");
    boyImg=loadImage("walk/walking_3.png");
    boyImg=loadImage("walk/walking_4.png");
    boyImg=loadImage("walk/walking_5.png");
    boyImg=loadImage("walk/walking_6.png");
    boyImg=loadImage("walk/walking_7.png");
    boyImg=loadImage("walk/walking_8.png");  */
    
}

function setup(){
    var canvas=createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

   // drops=new Drop(250,690,20,20);
    boy=new Umbrella(250,500,60,60);


   
    
}

function draw(){
    background(250);
    Engine.update(engine);

    boy.display();
}   

