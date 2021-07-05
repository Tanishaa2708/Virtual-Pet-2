//Create variables here
var food, stilldog,happydog
function preload()
{
	//load images here
  stilldog = loadImage("images/dogImg.png")
  happydog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)

  milk1 = new Food()
  milk1.getfeedTime()

  dog = createSprite(700,400,50,50)
  dog.addImage(stilldog)
  dog.scale = 0.2
  
}


function draw() {  
  background("pink")
  drawSprites();
  //add styles here
  textSize(20)
  text("fedtime: " + milk1.feedtime, 200,50)
  milk1.buttons()
  milk1.milkImg()
  
  if(food===0){
       dog.addImage(happydog)
    dog.scale = 0.2
    
     
  }
 
}

function readPosition(data){
  food = data.val()
}
function writeStock(data){
  database.ref('/').set({
    food:data, 
    feedtime:hour()
  })
}

