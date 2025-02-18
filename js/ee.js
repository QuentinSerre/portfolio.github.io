const searchInput = document.querySelector('#hidden');
const player = document.querySelector('#player');
const key = document.querySelector('#key');

// my array of walls doesn't work :(
// const allWalls = Array.from(document.querySelectorAll('.wall'));

const audio1 = new Audio("../file/adventure-atari-2600-take.mp3")
const audio2 = new Audio("../file/adventure-atari-2600-throw.mp3")

// Player position
let positionX = 0;
let positionY = 0;
// Player velocity
let velocity = 20;

// Block scroll from arrow
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// Check all caractere
searchInput.addEventListener('input', checkInput);
function checkInput(occ){

        const searchValue = occ.target.value;

        // And if he's equal at easter egg
        if(searchValue.toLowerCase() == "easteregg")
        {
            // Unlock easter egg
            searchInput.disabled = true;
            audio1.play();
            player.style.display = "block";

            // Movement
            // Move player on top
            addEventListener("keydown", (e) => {
                if(e.code === 'ArrowUp' || e.code === 38){
                    positionX -= velocity;
                    player.style.setProperty("--top", positionX +"px");

                    if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                        positionX += velocity;
                    }
                }
                // Move player on bottom
                else if(e.code === 'ArrowDown' || e.code === 40){
                    positionX += velocity;
                    player.style.setProperty("--top", positionX +"px");

                    if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                        positionX -= velocity;
                    }
                }

                // Move player at left
                else if(e.code === 'ArrowLeft' || e.code === 37){
                    positionY -= velocity;
                    player.style.setProperty("--left", positionY +"px");

                    if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                        positionY += velocity;
                    }
                }
                // Move player at right
                else if(e.code === 'ArrowRight' || e.code === 39){
                    positionY += velocity;
                    player.style.setProperty("--left", positionY +"px");

                    if ((keyCollision() || wallCollision1() || wallCollision2() || wallCollision3() || wallCollision4() || wallCollision5() || wallCollision6() || wallCollision7() || wallCollision8() || wallCollision9() || wallCollision10() || wallCollision11() || wallCollision12() || wallCollision13() || wallCollision14() || wallCollision15()) === true){
                        positionY -= velocity;
                    }
                }

                // Take object
                if((e.code === 'Space' || e.code === 32) && keyCollision() === true){
                    audio1.play();
                    key.style.display = 'none';
                    document.querySelector('#container_e_first').style.display = 'block';
                    
                    // player.src = ;
                }
            });
        }
}

// Detect key collision
function keyCollision(){
    return !(
        (player.getBoundingClientRect().bottom < key.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > key.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < key.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > key.getBoundingClientRect().right)
    );
}

// Detect wall collision
function wallCollision1(){
    // allWalls.forEach(wall => {
        var wall = document.querySelector('#wall1');
        return !(
            (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
            (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
            (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
            (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
        );
    // })
}

function wallCollision2(){
    var wall = document.querySelector('#wall2');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision3(){
    var wall = document.querySelector('#wall3');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision4(){
    var wall = document.querySelector('#wall4');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision5(){
    var wall = document.querySelector('#wall5');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision6(){
    var wall = document.querySelector('#wall6');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision7(){
    var wall = document.querySelector('#wall7');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision8(){
    var wall = document.querySelector('#wall8');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision9(){
    var wall = document.querySelector('#wall9');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision10(){
    var wall = document.querySelector('#wall10');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision11(){
    var wall = document.querySelector('#wall11');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision12(){
    var wall = document.querySelector('#wall12');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision13(){
    var wall = document.querySelector('#wall13');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision14(){
    var wall = document.querySelector('#wall14');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}

function wallCollision15(){
    var wall = document.querySelector('#wall15');
    return !(
        (player.getBoundingClientRect().bottom < wall.getBoundingClientRect().top) ||
        (player.getBoundingClientRect().top > wall.getBoundingClientRect().bottom) ||
        (player.getBoundingClientRect().right < wall.getBoundingClientRect().left) ||
        (player.getBoundingClientRect().left > wall.getBoundingClientRect().right)
    );
}