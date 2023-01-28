let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');
startScreen.addEventListener('click', startGame);
document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);
let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}
let player = {
    speed: 5,
    score: 0,
    start: false
}
function start(){
     console.log("Car")
    let car = document.querySelector('.car');   
     if(player.start){
       car.style.top = 
       requestAnimationFrame(start);
     }
}
function keyPressed(e) {
    console.log("Pressed",e.key);
    if(controls.e.key !== undefined){
      controls[e.key] = true;  
    }
}
function keyReleased(e) {
    console.log("Released",e.key);
    if(controls.e.key !== undefined){
        controls[e.key] = false;    
      }
}
function startGame() {
     console.log("Clicked")
     player.start = true;   
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');
     let car = document.createElement('div');
     car.setAttribute('class', 'car');
     car.innerText = "Car";
     car.style.left = "10px";
     car.style.top = "10px";
     car.style.backgroundColor = "red";
     gameScreen.appendChild(car);
     requestAnimationFrame(start)
}
