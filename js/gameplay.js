var gallery = 1;


const buttonL = document.getElementById("left-btn");
const buttonR = document.getElementById("right-btn");

const Video1 = document


buttonL.onclick = function (){
    Left();
}
buttonR.onclick = function (){
    Right();
    
}

function Left(){

    if(gallery == 1){
        gallery = 3;
    } else {
        gallery -= 1;
    }
    show();
}
function Right(){

    if(gallery == 3){
        gallery = 1;
    } else{
        gallery += 1;
    }
    show();
}

const titleText = {
    1: "START AN OFFICE",
    2: "SELECT A COMMISION",
    3: "A JOB TO DO"
};

const descText = {
    1: "and rise your ranks through commissions",
    2: "task you must do; Higher risk, Higher earnings",
    3: "Finish your job then you will be rewarded; Fail and you will pay."
};


function show(){
    if (gallery == 1){
        typewriter2(titleText[1]);
        typewriter3(descText[1]);
        gallery1();
    } else if (gallery == 2){
        typewriter2(titleText[2]);
        typewriter3(descText[2]);
        gallery2();
    } else {
        typewriter2(titleText[3]);
        typewriter3(descText[3]);

        gallery3();
    }
}


const el = document.querySelector('.gameplay-image-inner');


function gallery1(){
    // Video
    document.getElementById('vid1').removeAttribute('hidden');
    document.getElementById('vid2').setAttribute('hidden', true);
    document.getElementById('vid3').setAttribute('hidden', true);
    // Image

    el.classList.remove('gameplay-image-img3');
    el.classList.remove('gameplay-image-img2');
    el.classList.add('gameplay-image-img1');
}
function gallery2(){
    // Video
    document.getElementById('vid1').setAttribute('hidden', true);
    document.getElementById('vid2').removeAttribute('hidden');
    document.getElementById('vid3').setAttribute('hidden', true);
    // Image
    el.classList.remove('gameplay-image-img3');
    el.classList.add('gameplay-image-img2');
    el.classList.remove('gameplay-image-img1');
}
function gallery3(){
    // Videob
    document.getElementById('vid1').setAttribute('hidden', true);
    document.getElementById('vid2').setAttribute('hidden', true);
    document.getElementById('vid3').removeAttribute('hidden');
    // Image
    el.classList.add('gameplay-image-img3');
    el.classList.remove('gameplay-image-img2');
    el.classList.remove('gameplay-image-img1');
}
const destination2 = document.getElementById("destination-title");
const iSpeed2 = 30;
let typeTimer2 = null;

function typewriter2(text) {
    clearTimeout(typeTimer2);
    let pos = 0;

    function step2() {
        // If we land inside a tag, jump to its end
        if (text[pos] === "<") {
            const close = text.indexOf(">", pos);
            if (close !== -1) pos = close;
        }
        pos++;
        destination2.innerHTML = text.substring(0, pos);

        if (pos < text.length) {
            typeTimer2= setTimeout(step2, iSpeed2);
        }
    }

    destination2.innerHTML = "";
    step2();
}

const destination3 = document.getElementById("destination-desc");
const iSpeed3 = 20;
let typeTimer3 = null;

function typewriter3(text) {
    clearTimeout(typeTimer3);
    let pos = 0;

    function step3() {
        // If we land inside a tag, jump to its end
        if (text[pos] === "<") {
            const close = text.indexOf(">", pos);
            if (close !== -1) pos = close;
        }
        pos++;
        destination3.innerHTML = text.substring(0, pos);

        if (pos < text.length) {
            typeTimer2= setTimeout(step3, iSpeed3);
        }
    }

    destination2.innerHTML = "";
    step3();
}