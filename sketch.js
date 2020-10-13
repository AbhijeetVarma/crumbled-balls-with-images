
var ground , box , ball



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(700,650)
	ground = new Ground(400,670,800,30)
	ball = new paper(100,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  if(keyDown("up")){
     Matter.Body.applyForce(ball.body,ball.body.position,{x : 100 , y : -100});
  }
  ground.display();
  box.display();
  ball.display();
 
  
  drawSprites();
 
}



