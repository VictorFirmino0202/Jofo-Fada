var starImg,bgImg;
var star, starBody;
var fade, img;
var som;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    img = loadAnimation ("images/fairyimage1.png", "images/fairyimage2.png");

    som = loadSound ("sound/JoyMusic.mp3");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    fade = createSprite (130,520);
    fade.addAnimation ("FadaInicial", img);
    fade.scale = 0.25;

    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);
    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic (starBody, true);

    }

    drawSprites();
}

function keyPressed (){

    if(keyCode == RIGHT_ARROW){
        fade.x = fade.x + 20;
    }

    if(keyCode == LEFT_ARROW){
        fade.x = fade.x - 20;
    }

    if(keyCode == DOWN_ARROW){
        Matter.Body.setStatic (starBody, false);
    }

}