let drums = document.querySelectorAll('.drum');
let sound;

drums.forEach((drum) => {
    drum.addEventListener("click", function(){
        let drumType = this.innerText;
        makeSound(drumType);
        buttonAnimation(drumType);
    }) 
});

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {

    switch (key) {
        case "w":
            sound = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            sound = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            sound = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            sound = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            sound = new Audio('sounds/snare.mp3');
            break;
        case "k":
            sound = new Audio('sounds/kick-bass.mp3');
            break;
        case "l":
            sound = new Audio('sounds/crash.mp3');
            break;
        default:
            console.log(drumType)
            break;
    }
        sound.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed')

    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}