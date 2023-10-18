// CHECK BUTTON PRESS 

var len =document.querySelectorAll(".drum").length;
for (var i= 0; i<len; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",function() {
   var buttonText = this.innerHTML;
   makeSound(buttonText);
   buttonAnimation(buttonText); // calling for animation

   /* we used "this" as we wanted something from our object (which is the class "drum") */
   });
}


// DETECTING KEYBOARD PRESS

document.addEventListener("keydown",function(event){
   makeSound(event.key);
   buttonAnimation(event.key); // calling to add function

   /*here we don't use "this" becz we dont want anything from our object(which is the entire file) . By the way this is multi line comment */
});


// MAKING SOUND

function makeSound(Key){
   switch(Key){
      case "w":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
      
      case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
             
      case "s":
               var tom1=new Audio("sounds/tom-3.mp3");
               tom1.play();
               break;
         
        case "d":
                  var tom1=new Audio("sounds/tom-4.mp3");
                  tom1.play();
                  break;
         
         case "j":
                     var tom1=new Audio("sounds/snare.mp3");
                     tom1.play();
                     break;
         
         case "k":
                        var tom1=new Audio("sounds/crash.mp3");
                        tom1.play();
                        break;
         
         case "l":
                           var tom1=new Audio("sounds/kick-bass.mp3");
                           tom1.play();
                           break;
         default:
            console.log(Key);                   
         
   }
}

// ADDING ANIMATION 

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){activeButton.classList.remove("pressed");},150);  /* 150 milisecs = 0.15 secs for timeout after which class "pressed" will be removed */
}