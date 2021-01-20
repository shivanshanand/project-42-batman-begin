class Umbrella{
    constructor(x,y,radius){
        var op={
            isStatic: true,
            density:0.2
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius/2;
        this.image=loadImage("walk/walking_1.png", "walk/walking_2.png", "walk/walking_3.png", "walk/walking_4.png", "walk/walking_5.png", "walk/walking_6.png", "walk/walking_7.png", "walk/walking_8.png")
        this.image.scale=0.5;
        World.add(world,this.body);
    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();
    }
}