var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handle_click);

    //passsing a function as a parameter so that it can only be called when a certain event occured!
}
function handle_click(){ //named function
    var buttonInnerHTML = this.innerHTML;
    make_sound(buttonInnerHTML);

}

//anaonomus function
// document.querySelectorAll("button").addEventListener("click",function() {
    //     alert("I got clicked!!!");
    // }) //it will run on the pagereload


document.addEventListener("keydown",function(event){
   make_sound(event.key);
});



function make_sound(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;    
        default:
            console
            break;
    }

}
