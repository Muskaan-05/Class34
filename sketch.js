const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1;
var box2;
var box3;
var box4;
var box5;
var ball;
var rope;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
  ground = new Ground(600,390,1200,10);
  box1 = new Box(700,350);
  box2 = new Box(700,300);
  box3 = new Box(700,250);
  box4 = new Box(700,200);
  box5 = new Box(700,150);
  
  ball = new Ball(500,300);
 rope = new Rope(ball.body,{x:500,y:200});

}

function draw(){
    background ("yellow");
    Engine.update(engine);
     ground.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     ball.display();
     rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    rope.fly();
}