
var person, person_running;
var road,roadImage;
var boundary_1;
var boundary_2;


function preload(){
  //pre-load images

  roadImage = loadImage("path.png");

  person_running = loadAnimation("Runner-1.png", "Runner-2.png");
  
}

function setup(){
  createCanvas(200,200);
  //create sprites here

  road = createSprite(200,200,50,50);
  road.addImage("moving",roadImage);  
  road.scale = 0.5;
  road.x =100;
  

  person = createSprite(100,165,50,50);
  person.addAnimation("running", person_running);
  person.scale = 0.05;

  boundary_1 = createSprite(28,100,14,200);
  boundary_1.shapeColor = "white";

  boundary_2 = createSprite(172,100,14,200);
  boundary_2.shapeColor = "white";
}

function draw() {
  background(0);

  if(road.y>400){
    road.y = height/2;
  }

  if(keyDown("right")){
    person.x = person.x + 30;
  }

  if(keyDown("left")){
    person.x = person.x - 30;
  }

  person.collide(boundary_1);
  person.collide(boundary_2);

  road.velocityY = 2
  drawSprites();

}
