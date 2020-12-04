
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob;
var roof;
var line;
var engine;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(600,200,500,30);
	bob1 = new Bob(50,50,20);
	bob2 = new Bob(130,70,20);
	rope1 = new Rope(bob1.body,roof1.body,bobDiameter=40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  roof1.display();
  bob1.display();
  bob2.display();
  rope1.display();

  drawSprites();
 
}



