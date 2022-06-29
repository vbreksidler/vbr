window.onload = change;

function change(){
    document.getElementById("key").className += " selected";
}

let selected = 'black';

function select(color){
    selected = color;
}
function selectColor(pixel){
    pixel.style.backgroundColor = selected;
}

const button = document.getElementById("clear-board");

button.addEventListener('click', updateButton);

function updateButton() {
    document.getElementById("clear0").style.backgroundColor = "white";
    document.getElementById("clear1").style.backgroundColor = "white";
    document.getElementById("clear2").style.backgroundColor = "white";
    document.getElementById("clear3").style.backgroundColor = "white";
    document.getElementById("clear4").style.backgroundColor = "white";
    document.getElementById("clear5").style.backgroundColor = "white";
    document.getElementById("clear6").style.backgroundColor = "white";
    document.getElementById("clear7").style.backgroundColor = "white";
    document.getElementById("clear8").style.backgroundColor = "white";
    document.getElementById("clear9").style.backgroundColor = "white";
    document.getElementById("clear10").style.backgroundColor = "white";
    document.getElementById("clear11").style.backgroundColor = "white";
    document.getElementById("clear12").style.backgroundColor = "white";
    document.getElementById("clear13").style.backgroundColor = "white";
    document.getElementById("clear14").style.backgroundColor = "white";
    document.getElementById("clear15").style.backgroundColor = "white";
    document.getElementById("clear16").style.backgroundColor = "white";
    document.getElementById("clear17").style.backgroundColor = "white";
    document.getElementById("clear18").style.backgroundColor = "white";
    document.getElementById("clear19").style.backgroundColor = "white";
    document.getElementById("clear20").style.backgroundColor = "white";
    document.getElementById("clear21").style.backgroundColor = "white";
    document.getElementById("clear22").style.backgroundColor = "white";
    document.getElementById("clear23").style.backgroundColor = "white";
    document.getElementById("clear24").style.backgroundColor = "white";
}