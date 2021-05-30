class Box{
    constructor(x,y){
       this.box=Bodies.rectangle(x,y,60,60);
       this.width=60;
       this.height=60;
       World.add(world, this.box);
    }

    display(){
        rectMode(CENTER);
        strokeWeight(5);
        stroke ("pink");
        rect(this.box.position.x, this.box.position.y, 60, 60);

    }
}