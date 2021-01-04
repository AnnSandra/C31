const Engine = Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world,ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

  ground= new Ground(240,790,480,20);

  for(var k=0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2));

  }

  for(var i=40;i<width;i=i+50){
    for(var j=75;j<height-300;j=j+100)
    plinkos.push(new Plinko(i,j))
  }
  

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display(); 

  if(frameCount%90===0)
    particles.push(new Particle(random(100,400),10))

    for (var i = 0; i < particles.length; i++) {
   
      particles[i].display();
    }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  

  
}