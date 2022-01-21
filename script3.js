var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var bg = new Image();
var ball = new Image();
var pad = new Image();

bg.src = "bg.jpg";
ball.src = "ball.png";
pad.src = "pad.png";


var padX = 300; 
var padY = 500; 
var padWidth= 200;  
var padHeight = 50; 

var xPos = 0; 
var yPos = 0;

var grav = 3; 
var gravSide = 3; 

 

function bounce (){


    if(yPos+ball.height > canvas.height){  
        grav = -grav; 
    
    }
    if(yPos < 0){ 
        grav = -grav; 
    }

    if(xPos+ball.width > canvas.width){
       
        gravSide = -gravSide; 

    }
    if(xPos < 0){
        gravSide = -gravSide; 
    }
    
    
    if(yPos+ball.height > padY && (xPos > padX && xPos < padX + padWidth || (xPos+ball.width > padX && xPos+ball.width < padX + padWidth))){
        grav = -grav;
    }
    
}


document.addEventListener("keydown", function(event){
    if (event.code == 'KeyA'){
        movePadLeft(); 
    }
});

document.addEventListener("keydown", function(event){
    if (event.code == 'KeyD'){
        movePadRight(); 
    }
});

function movePadLeft(){
    padX -= 20; 
}


function movePadRight(){
    padX += 20; 
}





function draw(){

    
    

    ctx.drawImage(bg, 0, 0); 
    ctx.drawImage(ball, xPos, yPos); 
    ctx.fillRect(padX,padY,padWidth,padHeight); 
    ctx.fillStyle = "#7FFF00"; 




    yPos += grav; 
    xPos += gravSide; 

    




    

    requestAnimationFrame(draw);
    requestAnimationFrame(bounce);

}

bg.onload = draw;
ball.onload = draw;
pad.onload = draw;
