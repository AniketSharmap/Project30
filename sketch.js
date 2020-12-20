
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon1
function preload() {
  polygon_img = loadImage("sketch/polygon.png");
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(300, 550, 750, 10);

  //ball holder with slings
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingshot = new Slingshot(this.ball, { x: 100, y: 200 });
  block1 = new Block(235, 525, 30, 40);
  block2 = new Block(265, 525, 30, 40);
  block3 = new Block(295, 525, 30, 40);
  block4 = new Block(325, 525, 30, 40);
  block5 = new Block(355, 525, 30, 40);
  block6 = new Block(205, 525, 30, 40);
  block7 = new Block(385, 525, 30, 40);
  block8 = new Block2(235, 485, 30, 40);
  block9 = new Block2(265, 485, 30, 40);
  block10 = new Block2(295, 485, 30, 40);
  block11 = new Block2(325, 485, 30, 40);
  block12 = new Block2(355, 485, 30, 40);
  block13 = new Block3(265, 445, 30, 40);
  block14 = new Block3(295, 445, 30, 40);
  block15 = new Block3(325, 445, 30, 40);
  block16 = new Block4(295, 405, 30, 40);
}


function draw() {
  background("black")
  ground1.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();
}


function mouseDragged() 
{
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(this.ball);
  }
}




