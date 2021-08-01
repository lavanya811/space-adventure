var space,spaceImg;
var canvas;
var rocket,rocketImg,rockGroup;
var gameState = "play";
var star,starImg,starGroup; 

var rock;



function preload(){
    spaceImg=loadImage("space.png");
    rocketImg=loadImage("rocket.png");
    rockImg=loadImage("rock.png");
    starImg=loadImage("star.png");
    
    }


function setup(){
    canvas = createCanvas(600,600);
 space = createSprite (200,250);
 space.addImage("space image",spaceImg);
space.velocityY=3;
 space.scale=0.5;

 rocket = createSprite (200,450,20,30);
rocket.addImage("rocket",rocketImg);
rocket.scale=0.3;

      


starGroup=new Group();
rockGroup=new Group();
star = 0;

  
  

}

function draw(){
    fill ("yellow");
    textSize(30);
text("gameOver",160,250);

    

    if(gameState==="play"){

        if(space.y>400){
            space.y=300;
        }

        

        if(keyDown("left_arrow")){
       rocket.x=rocket.x -3;
        }
    
        if(keyDown("right_arrow")){
            rocket.x=rocket.x +3;  
        }

        if(keyDown("up_arrow")){
            rocket.y=rocket.y -3;  
 }

       if (starGroup.isTouching(rocket)) {
       starGroup.destroyEach();
       star=star+5;
      }

      if(rockGroup.isTouching(rocket)){
        


    }

    spwanStars();
    spwanRock();

    if(rockGroup.isTouching(rocket)||rocket.y>600){
        rockGroup.destroyEach();
        rocket.destroy();
        starGroup.destroyEach();
        gameState="end";
        }

    }

    else if (gameState === END) { 
       
      space.velocityY=0;

       
    }
    
drawSprites();

textSize(20);
      fill(255);
      text("stars: "+ star,150,30);



   }
    










function spwanStars(){
       if (World.frameCount % 150 == 0) {
        var star = createSprite(Math.round(random(50, 450),180, 10, 10));
        star.addImage(starImg);
        star.scale=0.1;
        star.velocityY = 3;
        star.lifetime = 180;
     starGroup.add(star);
      

     }

}


function spwanRock(){
    if (World.frameCount % 100 == 0) {
        var rock = createSprite(Math.round(random(50, 350),180, 10, 10));
        rock.addImage(rockImg);
        rock.scale=0.09;
        rock.velocityY = 3;
        rock.lifetime = 180;
        rockGroup.add(rock);
        rock.debug = false ;
        rock.setCollider("circle",0,0,40);
      

     }




}