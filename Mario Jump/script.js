const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");


let score = 0;


const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }
    ,500)
}

const stop = setInterval(() => {

    console.log("loop");

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

    console.log (marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = `imagens/gameover.png`;
        mario.style.width = "120px";

        clearInterval(stop);

        const overlayImage = document.getElementById("overlayImage");
        overlayImage.style.display = "block";
    }


document.addEventListener("keydown", function(event) {
    if (event.key === " " || event.code === "Space") {
        jump();  
        }
    }
);
})