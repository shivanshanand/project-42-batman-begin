class Umbrella{
    constructor(x,y){
        var op={
            isStatic: true,
            density:0.2
        } 
        this.body=Bodies.circle(x,y,100,op);
     // this.radius= radius/2;
        this.image=boyImg;
        World.add(world,this.body);
    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }
}
