document.addEventListener("DOMContentLoadet", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                comChoise();
            }
        })
    }
})


let object = ['<i id="icon" class="fas fa-hand-rock" aria-hidden="true"></i>', '<i id="icon" class="fas fa-hand-scissors" aria-hidden="true"></i>', '<i id="icon" class="fas fa-hand-paper" aria-hidden="true"></i>'];
let guest = document.getElementById("guest");
let compChoice = document.getElementById("computer");
let result = document.getElementById("resultP");

function comChoise() {
    index = Math.floor(Math.random() * 3);
    compChoice.innerHTML = object[index];
}

let rock = object[0];
let scissors = object[1];
let paper = object[2];

function guestChoice() {
    guest.innerHTML = rock;
}

function guestChoiceA() {
    guest.innerHTML = paper;
}

function guestChoiceB() {
    guest.innerHTML = scissors;
}

function resetGame() {
    compChoice.innerHTML = "";
    result.innerHTML = "";
}


function checkAnswer() {
       if (guest.innerHTML == rock && compChoice.innerHTML == paper) {
           console.log(guest.innerHTML);
           result.innerText= "You Lost!!";
           incrementWrongScore();
       }  else if (guest.innerHTML == scissors && compChoice.innerHTML == rock) {
           result.innerText= "You Lost!!";
           incrementWrongScore();
       } else if (guest.innerHTML == paper && compChoice.innerHTML == scissors) {
          result.innerText= "You Lost!!";
          incrementWrongScore();
       } else if (guest.innerHTML == scissors && compChoice.innerHTML == paper) {
            result.innerText= "You Won!!";
            incrementScore();
       } else if (guest.innerHTML == rock && compChoice.innerHTML == scissors) {
            result.innerText= "You Won!!";
            incrementScore();
       } else if (guest.innerHTML == paper && compChoice.innerHTML == rock) {
            result.innerText= "You Won!!";
            incrementScore();
       }  else if (guest.innerHTML == compChoice.innerHTML) {
        result.innerText= "It's tie!!";
       } else { 
        result.innerText= "Make your choise!";
       }

}

function incrementScore() {
 let oldscore = parseInt(document.getElementById('won').innerText);
 document.getElementById("won").innerText = ++oldscore;
}

function incrementWrongScore() {
   let oldscore = parseInt(document.getElementById("lost").innerText);
   document.getElementById("lost").innerText = ++oldscore;
}
