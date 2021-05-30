class Ball{
    constructor(x,y){
        var options={
            restitution:0.8
        }


       this.body=Bodies.circle(x,y,60,options);
       this.radius=60;
    
       World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke ("green");
        ellipse(this.body.position.x, this.body.position.y, 120, 120);

    }
}