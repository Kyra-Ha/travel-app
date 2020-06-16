import {performAction} from './js/app.js'
import './styles/style.scss';
import 'regenerator-runtime/runtime';

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener("click", performAction);

function showCard(){
    const card = document.getElementById('trip');
    card.style.display="block";
}
const notes = document.getElementById('to-do');
const btn = document.getElementById("notes");

function addNotes(){
    btn.style.display="none";
    notes.style.display="block";
}
function saveNotes(){
    const saved = document.getElementById('saved');
    const text = document.getElementById('text');
    saved.innerHTML =text.value;
    console.log(text.value);
    notes.style.display = "none";
    saved.style.display = "block";
    btn.style.display="block";
    text = text.replace(/\r?\n/g, '<br />');
}
export{performAction, showCard, addNotes, saveNotes}

