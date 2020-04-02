
var totalButtons=document.querySelectorAll("button").length;

for(var i=0 ; i<totalButtons ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color="black";
    var buttonHTML=this.innerHTML;
    makeSound(buttonHTML);
    activateButton(buttonHTML);
  }
)
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  activateButton(event.key);
})

function makeSound(key) {

  switch (key) {
  case "v":
  var tom1= new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "a":
  var tom2= new Audio("sounds/crash.mp3");
  tom2.play();
  break;

  case "r":
  var tom3= new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "d":
  var tom4= new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "h":
  var snare= new Audio("sounds/snare.mp3");
  snare.play();
  break;

  case "a":
  var crash= new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "n":
  var kick= new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;

  default: console.log(buttonHTML);

  }

}

function activateButton(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
