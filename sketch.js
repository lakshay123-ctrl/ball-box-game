
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite,ball,box2,box3,box4,ball;


function setup() {
	createCanvas(800,700);
	rectMode(CENTER);

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);
	  
		
		  
	box2 = new Box(690,640,100,20);
	World.add(world,box2);

	box3 = new Box(700,640,20,120);
	World.add(world,box3);

	box4 = new Box(600,640,20,75);
	World.add(world,box4);

	ball = new Ball(50,650,10);
	World.add(world,ball);

	  

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  box2.display();
  box3.display();
  box4.display();
  ball.display();

  
  
  drawSprites();

  keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
	}
}



