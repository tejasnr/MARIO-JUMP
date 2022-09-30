const mario = document.getElementById("mario");
const enemy = document.getElementById("enemy");

function jump() {
    if (mario.classList != "jump") {
    mario.classList.add("jump");

    setTimeout(function () {
        mario.classList.remove("jump");
    }, 300);
    }
}

let isAlive = setInterval(function () {
    // current mario y position
    let mariotop = parseInt( window.getComputedStyle(mario).getPropertyValue("top"));
    // current enemy y position
    let enemyleft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    
    // detect collision
   if (enemyleft < 50 && enemyleft > 0 && mariotop >= 140){
    //collision
    alert("GAME OVER!");
   }

},10);

    document.addEventListener("keydown", function (event){
        jump();
    });
