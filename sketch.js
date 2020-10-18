
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Box1,Box2,Box3;
var Ground1;
var ball1;
var Ball1;

function preload(){

	Dustbin=loadImage("dustbingreen.png");
	blue = loadImage("BLUE.png");

}




function setup() {
	createCanvas(800, 700);


		engine = Engine.create();
		world = engine.world;

		
		//Create the Bodies Here.
		
			Box1 = new Box(600,670,200,20);
			Box2 = new Box(700,600,20,250);
			Box3 = new Box(500,600,20,250);
			Ground1 = new Ground(400,690,1800,20);

			Ball1 = new Ball(100,180,70);
			Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180);

  	
		Box1.display();
		Box2.display();
		Box3.display();
		imageMode(CENTER);
		image(Dustbin,600,570,200,200);
		imageMode(CENTER);
		image(blue,400,80,700,150);
		Ball1.display();
	 	 Ground1.display();
} 

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(Ball1.body,Ball1.body.position,{x:+50,y:-90});
	}
}





