var heading = document.getElementById("title");
var button = document.getElementById("button");
var input=document.getElementById("userinput");
var output=document.getElementById("output");
var cloths = ["t-shirt","hoodies","sweaters","tank-top","dress","skirt","hat","scarf"];

button.addEventListener("click", generateColor);

function generateColor(){
  var inputNum=userinput.value;
  if (inputNum <= 12){
    var randomR= inputNum * Math.random()*20;
    var randomG=inputNum * Math.random()*20;
    var randomB=inputNum * Math.random()*20;
  }
  else if (inputNum>=50 ) {
    var randomR= inputNum * Math.random()*5;
    var randomG=inputNum * Math.random()*4;
    var randomB=inputNum * Math.random()*5;
  }
  else {
    var randomR= inputNum * Math.random()*10;
    var randomG=inputNum * Math.random()*9;
    var randomB=inputNum * Math.random()*15;
  }

  var colorString="rgb(" + randomR + "," + randomG + "," + randomB + ")";

  output.style.color= colorString;
  var randomIndex = Math.floor(Math.random()*8);
  var randomIndex1 = Math.floor(Math.random()*8);
  output.innerText = "It is this color, but you need to decide your fav color, not me. " + "\nHowever you may consider wearing a " + cloths[randomIndex]+" and a "+cloths[randomIndex1]+ " today. ";

}
