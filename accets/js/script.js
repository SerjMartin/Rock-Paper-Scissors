document.addEventListener("DOMContentLoadet", function() {
    let button = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
        })
    }
})


let object = ['<i id="icon" class="fas fa-hand-rock"></i>', '<i id="icon" class="fas fa-hand-scissors"></i>', '<i id="icon" class="fas fa-hand-paper"></i>'];
let guest = document.getElementById("guest");
      

function guestChoice() {
     guest.innerHTML ='<i id="icon" class="fas fa-hand-rock"></i>';
} 

function guestChoiceA() {
    guest.innerHTML = '<i id="icon" class="fas fa-hand-paper"></i>';
}

function guestChoiceB() {
    guest.innerHTML = '<i id="icon" class="fas fa-hand-scissors"></i>';
}


function checkAnswer() {

}