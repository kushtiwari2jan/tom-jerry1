var tom,jerry,tomImage,jerryImage1,tomImage2
function preload() {
   
    tomImage1=loadanimation("tomOne.png")
    tomImage2=loadanimation("tomtwo.png,tomthree.png")
    tomIamge3=loadanimation("tomfour.png") 
    jerryImage=loadanimation("jerryone.png,jerrytwo.png,jerrythree.png,jerryfour.png")

    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createsprite(700,799,50,80)
tom.addanimation(tomImage1)
jerry=createsprite(400,799,50,80)
jerry.addanimation(jerryImage)
}

function draw() {

    background("red");
   
    

   
    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    tom.velocityX = -5;
    
    tom.changeAnimation("tomIamge2")
    isTouching(tom,jerry)
}
}
function isTouching (ob1,ob2){
    if (ob2.x - ob1.x < ob1.width/2 + ob2.width/2
        && ob1.x - ob2.x < ob1.width/2 + ob2.width/2
        && ob2.y - od1.y < ob1.height/2 + ob1.height/2
        && ob1.y - ob2.y < ob1.height/2 + ob2.height/2) {
     tom.changeAnimation("tomfour.png")
    }
   

  }



    
