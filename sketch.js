    var canvas;
    var music;
    var surface1, surface2, surface3, surface4 ;
    var box; 
    var edges;
    

function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800,800);

        box = createSprite(300,300, 20, 20);
        box.shapeColor = "white";
        surface1 = createSprite(100, 550, 200, 40);
        surface1.shapeColor = "red";
        surface2 = createSprite(300, 550, 200, 40);
        surface2.shapeColor = "blue";
        surface3 = createSprite(500, 550, 200, 40);
        surface3.shapeColor = "green";
        surface4 = createSprite(700, 550, 200, 40);
        surface4.shapeColor = "yellow";

        box.velocityX = 5;
        box.velocityY = 5;

        edges = createEdgeSprites()
}

function draw() {
background("black");
        
createEdgeSprites("edges");
        if(surface1.isTouching(box) && box.bounceOff(surface1)){
            box.shapeColor = "red";
            
        }
        
        if(surface2.isTouching(box) && box.bounceOff(surface2)){
            box.shapeColor = "blue";
            
        }
        
        if (surface3.isTouching(box)  && box.bounceOff(surface3)) {
            box.shapeColor = "green";
          
        }

        if (surface4.isTouching(box)  && box.bounceOff(surface4)) {
            box.shapeColor = "yellow";
            
        }
        if (box.isTouching(edges) && box.bounceOff(edges)){
            box.velocityX = -5;

        }  
       if (box.isTouching(edges)  && box.bounceOff(edges)){
        box.velocityY = 5;
       }
        createEdgeSprites("edges");
        drawSprites();

}
