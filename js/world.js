
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const destination = document.getElementById("change-text-as");

const root = document.documentElement;

let back1 = 0;
let back2 = 0;
let back3 = 0;

const defaultText = "Returning...................";

const texts = {
    1: "Explore the stores by your office. They sell: Augments... Weapons... and snacks! ",
    2: "Instinct, Fortitude, Prudence, Temperance, and Speed. <br>spend SPs then you may receive stat boosts, passives, and even Auxiliary Abilities.",
    3: "They are hireable characters that aid you in the battle!"
};

const iSpeed = 20;
let typeTimer = null;

// Types `text` into the destination. Tags like <br> are inserted whole,
// so they never flash as half-written characters.
function typewriter(text) {
    clearTimeout(typeTimer);
    let pos = 0;

    function step() {
        // If we land inside a tag, jump to its end
        if (text[pos] === "<") {
            const close = text.indexOf(">", pos);
            if (close !== -1) pos = close;
        }
        pos++;
        destination.innerHTML = text.substring(0, pos);

        if (pos < text.length) {
            typeTimer = setTimeout(step, iSpeed);
        }
    }

    destination.innerHTML = "";
    step();
}

function setPanels(s1, f1, s2, f2, s3, f3) {
    root.style.setProperty("--pos-s1", s1);
    root.style.setProperty("--f-st1", f1);
    root.style.setProperty("--pos-s2", s2);
    root.style.setProperty("--f-st2", f2);
    root.style.setProperty("--pos-s3", s3);
    root.style.setProperty("--f-st3", f3);
}

function activate1() {
    setPanels(
        "calc(-100% + 35px)", "right",
        "calc(300% - 35px)", "left",
        "calc(300% - 75px)", "left"
    );
    typewriter(texts[1]);
}

function activate2() {
    setPanels(
        "calc(300% - 75px)", "left",
        "calc(-100% + 35px)", "right",
        "calc(300% - 35px)", "left"
    );
    typewriter(texts[2]);
}

function activate3() {
    setPanels(
        "calc(300% - 75px)", "left",
        "calc(300% - 35px)", "left",
        "calc(-100% + 35px)", "right"
    );
    typewriter(texts[3]);
}

function back() {
    setPanels(
        "calc(0%)", "left",
        "calc(100%)", "left",
        "calc(200%)", "left"
    );
    typewriter(defaultText);
}

menu1.onclick = function () {
    back1++;
    if (back1 === 2) {
        back();
        back1 = back2 = back3 = 0;
    } else {
        back2 = back3 = 0;
        activate1();
    }
};

menu2.onclick = function () {
    back2++;
    if (back2 === 2) {
        back();
        back1 = back2 = back3 = 0;
    } else {
        back1 = back3 = 0;
        activate2();
    }
};

menu3.onclick = function () {
    back3++;
    if (back3 === 2) {
        back();
        back1 = back2 = back3 = 0;
    } else {
        back1 = back2 = 0;
        activate3();
    }
};
