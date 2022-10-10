var timer1 = 0;
var timer1 = 0;
var timer2 = 0;
var timer3 = 0;
let stopButton = document.querySelector("#stop");
let isTurbo = false;

window.onload = function () {
    "use strict";

    let startButton = (document.querySelector("#start").onclick = start);
    stopButton = document.querySelector("#stop").onclick = stop;

    let animation = (document.querySelector("#animation").onchange =
        changeAnimation);
    let fontsze = (document.querySelector("#fontsize").onchange = changeFontSize);
    let turbo = (document.querySelector("#turbo").onclick = changeSpeed);
};

function changeSpeed() {
    isTurbo = turbo.checked;
}

const start = () => {
    let hidenButtons = document.querySelectorAll("#start, #animation, #fontsize");
    for (let i = 0; i < hidenButtons.length; i++) {
        hidenButtons[i].setAttribute("disabled", "disabled");
    }

    stopButton = document.querySelector("#stop");
    stopButton.attributes.removeNamedItem("disabled");

    if (timer1 === 0) {
        animateInteraval();
    }
};

const stop = () => {
    let showButtons = document.querySelectorAll("#start, #animation, #fontsize");

    for (let i = 0; i < showButtons.length; i++) {
        showButtons[i].attributes.removeNamedItem("disabled");
    }

    stopButton.setAttribute("disabled", "disabled");

    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);

    timer1 = 0;
    timer2 = 0;
    timer3 = 0;
    timer4 = 0;
};

const changeAnimation = () => {
    var selected = document.getElementById("animation").value;
    document.querySelector("#text-area").value = ANIMATIONS[selected];
};

const changeFontSize = () => {
    debugger;
    var selected = document.getElementById("fontsize").value;
    document.querySelector("#text-area").className = selected;
};

const animateInteraval = () => {

    timer1 = setInterval(
        function () {
            console.log("interval");

            document.querySelector("#text-area").value = ANIMATIONS["Exercise"];
        },
        isTurbo === true ? 50 : 250
    );

    timer2 = intervalID = setInterval(
        function () {
            document.querySelector("#text-area").value = ANIMATIONS["Juggler"];
        },
        isTurbo === true ? 100 : 500
    );

    timer3 = intervalID = setInterval(
        function () {
            document.querySelector("#text-area").value = ANIMATIONS["Bike"];
        },
        isTurbo === true ? 150 : 750
    );

    timer4 = intervalID = setInterval(
        function () {
            document.querySelector("#text-area").value = ANIMATIONS["Dive"];
        },
        isTurbo === true ? 200 : 1000
    );
}
