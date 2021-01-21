class Umbrella{
    constructor(x,y,width,height){
        /*var op={
            isStatic: true,
            density:0.2
        } */
        this.body=Bodies.rectangle(x,y,width,height);
     // this.radius= radius/2;
        this.width=width;
        this.height=height
        this.image=boyImg;
        World.add(world,this.body);
    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
