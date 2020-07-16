import {showCard} from '../index.js'

function animat(){
    const gif = document.getElementById("loading");
    gif.style.display= "block";
    setTimeout(function(){
        gif.style.display = "none";
    }, 3620);
}

export { animat }