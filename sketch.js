/*
1. create an physics engine--done
2. add that physice engine to the physics world--done
3. update the engine in function draw-done
4. create an object/body(rectangle, circle,polygon) bodies
5. add that object to the physics world.

var -- data type which helps you to store the data(num, string, "5", "a" "word") var score =0; score = score +1;

const-- constant(const score = 0;)
FUNCTION COL(FIXEDRECT, MOVINGRECT) PARAMETERS/ARGUMENTS
namespacing-- giving small name to a bigger name


JS: OOP _Purpose is to create similar like objects using class

Notation
isSTat:true
key: value*/

const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEng;
var myLand;
var sqBody;
var ball;
var box1;
var box2
var ground;
var pig1;
var log1;

function setup() {

  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

myEng =   Engine.create();
myLand = myEng.world;

box1 = new Box(800,100,70,70);
box2 = new Box(1000,100,70,70);
box3 = new Box(800,40,70,70);
box4 = new Box(1000,40,70,70)
pig1 = new Pig(900,100);
log1 = new Log(900,50,300, PI/2);
ground1 = new Ground(600,390,1200,10);


}

function draw() {
  background("pink");

  Engine.update(myEng);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig1.display();
  ground1.display();
  log1.display()
  
 
}