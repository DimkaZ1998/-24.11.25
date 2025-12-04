'use strict'

function safeOutput(){
    let safeOutput = document.getElementById('safe-output');
    console.log(safeOutput.textContent);
}

function unsafeOutput(){
    let unsafeOutput = document.getElementById('unsafe-output');
    console.log(unsafeOutput.innerHTML);
}