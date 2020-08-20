var body = document.querySelector("body");
var timer = document.getElementById("timer");
var instructions = document.querySelector(".instructions");
var beginButtonClick = document.querySelector("#beginButton");

var quizQuestion = function () {

}

beginButtonClick.addEventListener("click", function () {
    var seconds = 60,
        mins = 1;

    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = "Time " + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
        if (seconds < 21) {
            timer.style.color = "red";
        }
    }
    tick();

    instructions.style.display = "none";
})