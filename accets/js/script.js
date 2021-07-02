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


      const rock = document.getElementById("rockButton");
      const paper = document.getElementById("paperButton");
      const scissors = document.getElementById("scissorsButton");
      let guest = document.getElementById("guest");
      

function guestChoice() {
     guest.innerHTML ='<i id="icon" class="fas fa-hand-rock"></i>';
} 


function checkAnswer() {

}