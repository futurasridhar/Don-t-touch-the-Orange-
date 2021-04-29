// We are creating the variables here.
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

    // Here, we load the music Wj.mp3 to the variable music.

     music  = loadSound ("music.mp3");

}


function setup(){
    
    // We are creating the boundary.
    canvas = createCanvas(800,600);

    // We are creating all the variables or sprites.
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
  
    block3 = createSprite (510,580,200,30);
    block3.shapeColor = "lime";
    
    block4 = createSprite (720,580,200,30);
    block4.shapeColor = "crimson";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3 ;
    ball.velocityY = 3 ;

}

function draw() {

    background(rgb(169,169,169));
    
    edges=createEdgeSprites();
    
    ball.bounceOff(edges);

    
    // Here, we are writing the code to bounce off the ball when it touches block 1.
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      
        ball.shapeColor = "blue";
        music.play ();
    
    }
     
    // Here, we are making the ball stick to block 2 if it is touching it.
    if(block2.isTouching(ball)){
       
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
         
    }

     // Here, we are writing the code to bounce off the ball when it touches block 3.
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
        
        ball.shapeColor = "lime";
        music.play ();

    }
   
      // Here, we are writing the code to bounce off the ball when it touches block 4.
      if(block4.isTouching(ball) && ball.bounceOff(block4)){
        
        ball.shapeColor = "crimson";
        music.play ();

    }

    drawSprites();

}
