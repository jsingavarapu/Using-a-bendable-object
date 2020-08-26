var block5,block6,block7,block8,block1,block2,blockstand1,stand2,slingShot,polygon,ground1;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup(){
  var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
  block1= new Block(300,50,25,30);
  block2= new Block(300,50,25,30);
  block3= new Block(300,50,25,30);
  block4=new Block(300,50,25,30);
  block5=new Block(230,230,25,30);
  block6=new Block(230,230,25,30);
  block7=new Block(230,230,25,30);
  block8=new Block(230,230,25,30);
  stand1= new Ground(240,250,300,10);
  ground1= new Ground(250,880,300,10);
  stand2= new Ground(300,60,300,10);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);


slingShot = new SlingShot(this.polygon,{x:100,y:400});
    
}

function draw(){
  background('pink')
  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
stand1.display();
stand2.display();
slingShot.display();
ground1.display();

ellipse(polygon.position.x,polygon.position.y,20,20);
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly();


}