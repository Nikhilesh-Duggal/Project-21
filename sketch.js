var e,Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Pluto;

function setup() {
  createCanvas(1350,1600);
  Mercury=createSprite(300,800,12,12);
  Venus=createSprite(360,800,17,17);
  Earth=createSprite(430,800,21,21);
  Mars=createSprite(500,800,24,24);
  Jupiter=createSprite(650,800,70,70);
  Saturn=createSprite(850,800,59,59);
  Uranus=createSprite(1000,800,21,21);
  Neptune=createSprite(1100,800,21,21);
  Pluto=createSprite(1280,800,11.5,11.5);
}

function draw() {
  background(255,255,255); 

  e=round(World.frameCount/2)
  textFont("Jokerman");
  textSize(25);
  text("Mercury",240,825);
  text("Venus",320,780);
  text("Earth",390,850);
  text("Moon",410,750);
  text("Mars",480,840);
  text("Jupiter",620,890);
  text("Saturn",820,900);
  text("Uranus",960,840);
  text("Neptune",1080,840);
  text("Pluto",1250,840);
  text("ASTEROID BELT",300,600);
  textSize(68);
  
  noFill();

  ellipse(0,800,1280*2,700);

  strokeWeight(20);
  ellipse(0,800,560*2,560*2);
  
  fill("grey")
  strokeWeight(1);
  ellipse(Mercury.x,Mercury.y,20,20);
  ellipse(Venus.x,Venus.y,25,25);
  ellipse(Earth.x,Earth.y,30,30);
  ellipse(Mars.x,Mars.y,35,35);
  ellipse(Jupiter.x,Jupiter.y,100,100);
  ellipse(Saturn.x,Saturn.y,85,85);
  ellipse(Uranus.x,Uranus.y,30,30);
  ellipse(Neptune.x,Neptune.y,30,30);
  ellipse(Pluto.x,Pluto.y,17,17);
  fill("Orange");
  ellipse(0,800,e,e);
  noStroke();
  ellipse(0,800,300,300);
  stroke(0,20,20);
  fill("grey")
  
  Touch1(e,Mercury);
  Touch1(e,Venus);
  Touch1(e,Earth);
  Touch1(e,Mars);
  Touch1(e,Jupiter);
  Touch1(e,Saturn);
  Touch1(e,Uranus);
  Touch1(e,Neptune);
  Touch1(e,Pluto);

  Moon();

  Orbit(e,Mercury);
  Orbit(e,Venus);
  Orbit(e,Earth);
  Orbit(e,Mars);
  Orbit(e,Jupiter);
  Orbit(e,Saturn);
  Orbit(e,Uranus);
  Orbit(e,Neptune);

  Saturn_rings();

  console.log(e);

  drawSprites();

  fill("black")
  if(e/2>Earth.x){
    text("EARTH DESTROYED",700,500);
  }
  textSize(60);
  text("TIME FROM PRESENT="+e+"Million Years",100,250);
  if((e/2)>Pluto.x+30){
    text("SOLAR SYSTEM DESTROYED",400,800);
    noLoop();
  }
}
 
function Touch1(object1,object2){
  if((object1/2)>(object2.x-(object2.width/2))){
    object2.x=-100000;
  }
}
function Orbit(object1,object2){
  if((object1/2)<object2.x){
  strokeWeight(1);
  noFill();
  ellipse(0,800,object2.x*2,object2.x*2);
  }
}
function Moon(){
  if((e/2)<Earth.x){
    strokeWeight(1);
    fill("grey");
    ellipse(420,770,10,10);
    noFill();
    ellipse(430,800,65,65);
  }
}
function Saturn_rings(){
  if(e/2<Saturn.x){
    ellipse(850,800,100,100);
    ellipse(850,800,120,120);
    ellipse(850,800,130,130);
    ellipse(850,800,160,160);
  }
}