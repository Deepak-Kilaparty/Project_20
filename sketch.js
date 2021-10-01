// Variables
var car,wall;

// Physics Variable
var speed,weight,rating;
var deformation;

// Game state variable
var state="pre";

function setup() {
  // Canvas of size 1600 & 400
  createCanvas(1600,400);

  // Wall object (Sprite)
  wall = createSprite(1500,200,60,height/2);
  // To set color of wall
  wall.shapeColor=color(80,80,80);

  // Car variable
  car = createSprite(50,200,50,50);
}

function draw() {
  // background color as "Black"
  background("black");  

  // Condition to check game state
  if(state==="pre") {
    textSize(20);
    fill("white");
    text("Press SPACE BAR.",600,50);
    // if game state = pre & user presses "Space" key
    if(keyDown("space")) {
      state="running";
    }
  }

  // Condition to check game State
  if(state==="running") {
    weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    car.velocityX = speed;

  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    deformation = Math.round(0.5*weight*speed*speed/22500);
     
    if(deformation>=180) {
    car.shapeColor=color(255,0,0);
    rating="LETHAL";
    }

    if(deformation<180 && deformation>=80) {
      car.shapeColor=color(230,230,0);
      rating="AVERAGE";
    }

    if(deformation<80) {
      car.shapeColor=color(0,255,0);
      rating="GOOD";
    }

    state="end";
  }
}

  if(state==="end") {

    if(deformation>=180) {
      fill(255,0,0);
    }

    if(deformation<180 && deformation>=80) {
      fill(230,230,0);
    }

    if(deformation<80) {
      fill(0,255,0);
    }

    textSize(20);
    text("Speed: "+speed+"km/h",200,50);
    text("Weight: "+weight+"kg",400,50);
    text("Deformation: "+deformation,600,50);

    textSize(25);
    text("Rating: "+rating,800,50);

    text("Press 'R' to reset",1050,50);
    if(keyDown("r")) {
      reset();
    }
  }

  drawSprites();
}


function reset() {
  state="pre";
  car.x=50;
  car.shapeColor=color(127,127,127);

}
