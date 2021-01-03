const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunderImg1, thunderImg2,thunderImg3,thunderImg4
var thunder;
var engine, world;
var drops = []
var maxDrops = 100;

function preload(){
    thunderImg1 = loadImage("images/thunderbolt/1.png")
    thunderImg2 = loadImage("images/thunderbolt/2.png")
    thunderImg3 = loadImage("images/thunderbolt/3.png")
    thunderImg4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
  
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,800)
   umbrella = new Umbrella(200,height/2-20)
   for (var i=0; i<maxDrops; i++)
   {
   drops.push(new Drops(random(0,400),random(0,800)));  
   }   
   
}

function draw(){

    background(0)
    Engine.update(engine)
    umbrella.display();

    for(drp in drops)
    {
        drops[drp].display();
        drops[drp].updateYPos();
        
    }
  var rand = Math.round(random(1,4))
    if(frameCount%80===0)
    {
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand)
        {
            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break; 
            case 3: thunder.addImage(thunderImg3);
            break;
            case 4: thunder.addImage(thunderImg4);
            break;
            default: break;
        }
        thunder.scale = random(.4,.6)
    }
    if(frameCount%90===0)
    {
        thunder.destroy();
    }
  
drawSprites();
}   

