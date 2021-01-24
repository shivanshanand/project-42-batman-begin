class Drop{
    constructor(x,y){
        var op={
            friction: 0.001,
            restitution:0.1
        }
        
        this.body=Bodies.circle(x,y,5,op);
       // this.radius= radius/2;
        World.add(world,this.body);

    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        fill("white")
        stroke("red")
        ellipseMode(RADIUS);
        ellipse(0, 0, 5, 5); 
        pop();
    }

    fall(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}
