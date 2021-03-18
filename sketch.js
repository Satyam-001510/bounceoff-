const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var object,engine,world,ground;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  var ground_options ={ isStatic: true }
   ground = Bodies.rectangle(200,390,200,20,ground_options); 
   World.add(world,ground); 
   var ball_options ={ restitution: 1.0 }
   ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);

  console.log(object);
  }

function draw() {
  background("pink");
  Engine.update(engine);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rect(ground.position.x,ground.position.y,800,45);
  
  }