const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops, boy;
var maxDrops=100;

function preload(){

    

    
}

function setup(){
    var canvas=createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

   // drops=new Drop(250,690,20,20);
    boy=new Umbrella(250,500,20,20);


   
    
}

function draw(){
    background(250);
    Engine.update(engine);

    boy.display();
}   

