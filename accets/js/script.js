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

function guestChoise() {
    
}

function checkAnswer() {

}