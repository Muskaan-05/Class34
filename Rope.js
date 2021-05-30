class Rope{
    constructor(bodyA, pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.04,
           length:50
       }
       this.pointB=pointB;
       this.rope = Matter.Constraint.create(options)
       World.add(world,this.rope);
    }
    
    display(){
        push ()
        if(this.rope.bodyA!=null){
            line (this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
        pop ()
    }

    fly(){
        this.rope.bodyA=null;
    }
}