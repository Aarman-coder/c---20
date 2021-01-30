var fixedRect, movRect; 
function setup() {
   createCanvas(1000,400); 
   fixedRect= createSprite(200, 200, 50, 50); 
   movRect= createSprite(400, 300, 100, 100); 
   fixedRect.shapeColor = "purple";
    movRect.shapeColor = "purple"; 
    fixedRect.debug = true; 
    movRect.debug = true; 
  }
     function draw() {
         background(0); 
        movRect.x = World.mouseX; 
        movRect.y = World.mouseY; 
        if(movRect.x - fixedRect.x < fixedRect.width/2+movRect.width/2 && 
          fixedRect.x - movRect.x < fixedRect.width/2+movRect.width/2
          && movRect.y - fixedRect.y < fixedRect.height/2+movRect.height/2 &&
           fixedRect.y - movRect.y < fixedRect.height/2+movRect.height/2) { 
        fixedRect.shapeColor = "yellow";
         movRect.shapeColor = "yellow";
       } 
          else {
             fixedRect.shapeColor = "purple"; movRect.shapeColor = "purple"; } 
          drawSprites();
         }