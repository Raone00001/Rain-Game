const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rand;

var drops = [];
var maxDrops = 100;

var umbrella;
var thunder1, thunder2, thunder3, thunder4;

var thunderCreatedFrame = 0;

function preload(){

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrellas(200, 350);

    for (var i = 0; i < maxDrops; i++){

        drops.push(new Drops(random(0,400), random(0,400)));

    }

}

function draw(){
    background(0);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if (frameCount % 80 === 0){

        thunderCreatedFrame = frameCount;
        var thunder = createSprite(random(10,360), random(10,35), 8, 8);

        switch(rand){

            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;

        }

        thunder.scale = random(0.5, 0.1);

    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){

        thunder.destroy();

    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].displayDrop();
        drops[i].updateDrop()
        
    }
    
    drawSprites();
}   

