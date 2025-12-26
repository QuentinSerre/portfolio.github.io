const searchInput = document.querySelector('#hidden');
const player = document.querySelector('#player');
const key = document.querySelector('#key');

const audio1 = new Audio("/src/medias/audios/adventure-atari-2600-take.mp3")
const audio2 = new Audio("/src/medias/audios/adventure-atari-2600-throw.mp3")

// Player position
let positionX = 0;
let positionY = 0;
// Player velocity
let velocity = 20;

// Block scroll from arrow
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// Check all caractere
searchInput.addEventListener('input', checkInput);
function checkInput(occ) {

    const searchValue = occ.target.value;

    // And if he's equal at easter egg
    if (searchValue.toLowerCase() == "easteregg") {
        // Unlock easter egg
        searchInput.disabled = true;
        audio1.play();
        player.style.display = "block";

        // Movement
        // Move player on top
        addEventListener("keydown", (e) => {
            if (e.code === 'ArrowUp' || e.code === 38) {
                positionX -= velocity;
                player.style.setProperty("--top", positionX + "px");

                // if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                if ((keyCollision() || wallCollision()) === true) {
                    positionX += velocity;
                }
            }
            // Move player on bottom
            else if (e.code === 'ArrowDown' || e.code === 40) {
                positionX += velocity;
                player.style.setProperty("--top", positionX + "px");

                // if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                if ((keyCollision() || wallCollision()) === true) {
                    positionX -= velocity;
                }
            }

            // Move player at left
            else if (e.code === 'ArrowLeft' || e.code === 37) {
                positionY -= velocity;
                player.style.setProperty("--left", positionY + "px");

                // if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                if ((keyCollision() || wallCollision()) === true) {
                    positionY += velocity;
                }
            }
            // Move player at right
            else if (e.code === 'ArrowRight' || e.code === 39) {
                positionY += velocity;
                player.style.setProperty("--left", positionY + "px");

                // if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                if ((keyCollision() || wallCollision()) === true) {
                    positionY -= velocity;
                }
            }

            // Take object
            if ((e.code === 'Space' || e.code === 32) && keyCollision() === true) {
                audio1.play();
                key.style.display = 'none';
                document.querySelector('#container_e_first').style.display = 'block';

                // player.src = ;
            }
        });
    }
}

// Detect key collision
function keyCollision() {
    return !(
        (player.getBoundingClientRect().bottom < key.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > key.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < key.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > key.getBoundingClientRect().right)
    );
}

// Detect wall collision
function wallCollision() {
    const allWalls = Array.from(document.querySelectorAll('.wall'));
    var arrayCollision = new Array();
    var collision = false;

    // Create array of all collisions
    allWalls.forEach(wall => {
        arrayCollision.push(!(
            (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
            (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
            (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
            (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
        ) === true)
    });
    console.log(arrayCollision);

    // For all elm verify collision
    for (var i = 0; i < arrayCollision.length; i++) {
        if (arrayCollision[i] === true) {
            collision = true;
        }
    }

    return collision;
}