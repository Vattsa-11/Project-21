var bullet;
var wall,thickness;
var speed;
var weight;



function setup() {
  createCanvas(1000,400);
 
  bullet = createSprite(50, 200, 70, 10);
  bullet.shapeColor = ("yellow");
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed;
  bullet.depth = wall.depth;
  bullet.depth = bullet.depth + 1;
 
  if (wall.x-bullet.x <bullet.width/2 + wall.width/2) {
  
    bullet.velocityX = 0;
    var damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));

    if(damage > 10){
      wall.shapeColor = "red";     
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }

    fill("white");
    text("deformation  = " + damage,100,20);

  }
  
  drawSprites();

}