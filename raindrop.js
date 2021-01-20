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

        this.drop=[];
    }


    display(){

        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius); 
        pop();

        for(var s=0;s<maxDrops;s++){
            this.drop.push(new Drop(random(0,600),random(0,600)));
        }
 
         if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)});
        }
    }
}