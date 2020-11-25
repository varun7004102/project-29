
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy,ground,stone,tree
var mango1
var string

function preload()
{
  BoyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300,700);

	engine = Engine.create();
	world = engine.world;
 
	  ground = new Ground(650,700,1300,40)
    tree = new Tree(1050,580)
    mango1 = new Mango(1100,100,30)
    mango2 = new Mango(950,200,30)
    mango3 = new Mango(900,200,30)
    mango4 = new Mango(1200,130,30)
    mango5 = new Mango(900,150,30)
    mango6 = new Mango(1100,170,30)
    mango7 = new Mango(1200,160,30)
    mango8 = new Mango(950,170,30)
    stone = new Stone(235,440,30)
    string = new String(stone.body,{x:190,y:480})
   
    

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("white");
  image(BoyImg,140,420,200,300)
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  string.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  string.fly()
  }
function keyPressed(){
 if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    string.attach(stone.body);
 }  
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

