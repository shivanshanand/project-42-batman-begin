class Drop{
    constructor(x,y,radius){
        var op={
            isStatic: false,
            friction: 0.1,
            density:0.4
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius/2;
        World.add(world,this.body);

    }
    
    display(){

        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius); 
        pop();

        
    }
}
