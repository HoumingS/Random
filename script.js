var heading = document.getElementById("title");
var button = document.getElementById("button");
var input=document.getElementById("userinput");
var output=document.getElementById("output");
var cloths = ["t-shirt","hoodie","sweater","tank-top","dress","skirt","hat","scarf"];

button.addEventListener("click", generateColor);
button.addEventListener("click", restyle);


function generateColor(){
  var inputNum=userinput.value;
  if (inputNum <= 12){
    var randomR= inputNum * Math.random()*20;
    var randomG=inputNum * Math.random()*20;
    var randomB=inputNum * Math.random()*30;
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
  heading.innerText="you must all have a favorite color, if you do not, let me tell you what to wear"
}

function restyle(){
  heading.style.textShadow= "0px 0px 50px #ff0000";
  output.style.fontSize="50px";
  input.style.color="pink";
  button.style.color="pink";

}
