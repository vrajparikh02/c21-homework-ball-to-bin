
const Engine= Matter.Engine
const World=Matter.World
const Bodies= Matter. Bodies





let engine
let world

var ground
var sky
var leftSide
var rightSide
var ball
var cupR
var cupL




var rB
var uB


function setup() {
  createCanvas(1100,600);
  engine = Engine.create();
  world = engine.world;

ground= new Ground(600,390,100000,20);
sky= new Ground(200,10,4000000,20);
rightSide= new Ground (1100,200,20,900);
leftSide= new Ground (10,200,20,900);
cupL= new Ground (1000,310,20,90);
cupR= new Ground (800,310,20,90);
var options = {
restitution: 0.95
}

ball=Bodies.circle(200,100,20,options);
rectMode(CENTER);
ellipseMode(RADIUS);
World.add(world,ball);


}

function keyPressed(){
	//alert("key presses ")
//	if (confirm('Are you sure you want to execute key press')) {
		
		if(keyCode === UP_ARROW)
		vForce();
		if(keyCode === RIGHT_ARROW)
		hForce();
	//  } else {

	//	console.log('Thing was not saved to the database.');
	 // }
	
}




function draw() {
  background(0)
  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  sky.show();
leftSide.show();
  rightSide.show();
  cupR.show()
  cupL.show()
  Engine.update(engine);
  
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}

