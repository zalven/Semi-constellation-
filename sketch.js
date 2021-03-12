

let balls = [

] 

const numberOfCircles = 150; 

function setup() {

  createCanvas( windowWidth, windowHeight );
  for( let i = 0 ;i  < numberOfCircles ; i++ ){
    balls.push(circle_MODEL())
  }
  
}


function circle_MODEL(){
  color = 'black'
  xSpeed = random( [0.2,1])*random( [-1,1]);
  xSpeed = random( [0.2,1])*random( [-1,1]);
  x = random(0 , windowWidth );
  y = random(0 , windowHeight );
  radius = 15; 
  outerRadius =45 ;
  circleStroke = 0.3;

  return {
    circlesFrame: [x , y , radius , radius],
    circlesProps: [xSpeed , xSpeed , radius+outerRadius, radius+outerRadius],
    circleStyles: [color , circleStroke ]
  } 

}
// [ First Mount random 1000 balls that does not collide ]
// [] 



function draw() {
  background(255);
  draw_circles( );
  // Speed of both horizontal and vertical should be the same  

  // if(x > windowWidth ||  x < 0  ){
  //   Xspeed = -1*(Xspeed);
  // }


  // if(y > windowHeight || y < 0  ){
  //   Yspeed = -1*(Yspeed);
  // }

  // x = x + Xspeed ; 
  // y = y + Yspeed ;
}
function draw_circles( ){
  for ( let  i = 0 ; i < balls.length; i++){

    stroke(balls[i].circleStyles[0]);

    strokeWeight(balls[i].circleStyles[1]);

    noFill()

    
    ellipse(
      balls[i].circlesFrame[0], 
      balls[i].circlesFrame[1], 
      balls[i].circlesFrame[2],
      balls[i].circlesFrame[3]
    );
    
    for ( let  j = 0 ; j < balls.length; j++){
      let distance = dist( 
        balls[i].circlesFrame[0],  
        balls[i].circlesFrame[1],
        balls[j].circlesFrame[0],  
        balls[j].circlesFrame[1],
      )



      if( distance < balls[i].circlesProps[2]+  balls[j].circlesProps[2]){
        line( 
          balls[i].circlesFrame[0],
          balls[i].circlesFrame[1], 
          balls[j].circlesFrame[0],
          balls[j].circlesFrame[1]);
      }
      
    }

    let distance = dist( balls[i].circlesFrame[0],  balls[i].circlesFrame[1], mouseX, mouseY )
    if( distance < balls[i].circlesProps[2] + balls[i].circlesProps[2]){
      line( 
        balls[i].circlesFrame[0],
        balls[i].circlesFrame[1], 
        mouseX, mouseY 
      );
    }

    // ellipse(
    //   balls[i].circlesFrame[0], 
    //   balls[i].circlesFrame[1], 
    //   balls[i].circlesProps[2], 
    //   balls[i].circlesProps[3]
    // );
    

    balls[i].circlesFrame[0] +=  balls[i].circlesProps[0]
    balls[i].circlesFrame[1] +=  balls[i].circlesProps[1]

    if(balls[i].circlesFrame[0] > windowWidth ||  balls[i].circlesFrame[0] < 0  ){
      balls[i].circlesProps[0] = -1*(balls[i].circlesProps[0]);
      balls[i].circlesProps[1] = (balls[i].circlesProps[1])*random( [-1,1]);
    }
    if(balls[i].circlesFrame[1] > windowHeight || balls[i].circlesFrame[1] < 0  ){
      balls[i].circlesProps[1] = -1*( balls[i].circlesProps[1]);
      balls[i].circlesProps[0] = -1*( balls[i].circlesProps[0])*random( [-1,1]);
    }

  }
  
}
