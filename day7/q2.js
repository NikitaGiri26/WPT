let pos1 = 0;
let pos2 = 0;
let intervalId;
let timeoutId;

function startAnimation() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");

    pos1 = 0;
    pos2 = 0;
    box1.style.top = "0px";
    box2.style.top = "0px";

    intervalId = setInterval(() => {
        pos1 += 5;
        box1.style.top = pos1 + "px";
        if (pos1 >= 300) {
            clearInterval(intervalId);
        }
    }, 100);

    function animateBox2() {
        pos2 += 5;
        box2.style.top = pos2 + "px";
        if (pos2 < 300) {
            timeoutId = setTimeout(animateBox2, 100);
        }
    }
    animateBox2();
}

function stopAnimation() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
}