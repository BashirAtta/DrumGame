//detect button click 

var numButton =document.querySelectorAll(".drum").length;

for(var i=0;i<numButton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btnPressed=this.innerHTML;
    makeSound(btnPressed);   
})
}

//detect keyboard click

document.addEventListener("keydown",function(event){

    makeSound(event.key);
})

//function to play sound by passsing keys 
function makeSound(key){
switch (key) {
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;
    case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
    ;
    break;
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;

    case "j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();

        break;

        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();

    default:
        break;
}


}
















// var numOfButton;
// numOfButton = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numOfButton; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//       var btnPressed=this.innerHTML;
//       keyIsPress(btnPressed);
//     });

// }

// function keyIsPress(key) {
//     switch (key) {
//         case "w":
//             var drum1 = new Audio('sounds/tom-1.mp3');
//         drum1.play();
//             break;

//         case "a": 
//         var drum2 = new Audio('sounds/tom-2.mp3');
//         drum2.play();
//         break;

//         case "s": 
//         var drum3 = new Audio('sounds/tom-3.mp3');
//         drum3.play();
//         break;
      
//         case "d": 
//         var drum4 = new Audio('sounds/tom-4.mp3');
//         drum4.play();
//         break;
      
//         case "j": 
//         var kick= new Audio('sounds/kick-bass.mp3');
//         kick.play();
//         break;
      
//         case "k": 
//         var snare = new Audio('sounds/snare.mp3');
//         snare.play();
//         break;
//         case "l": 
//         var crash = new Audio('sounds/crash.mp3');
//         crash.play();
//         break;
      
        
        
      
//         default:
//             break;
//       }
// }
// document.addEventListener("keydown",function(event){
    
    
//       keyIsPress(event.key);
// });  

















// function add(num1,Num2){
//     return num1+Num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function subtract(num1,num2){
//     return num1-num2;
// }
// function division(num1,num2){
//     return num1/num2;
// }
// function calculator(num1, num2, operation) {
//     return operation(num1, num2);

// }