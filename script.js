
let colorBG = 'Black';
let answer = 16;
const buttons = document.querySelectorAll('.colors');
let grids = document.querySelectorAll('.container');
let container = document.querySelector(".container");
const buttonNew = document.querySelector('#new');
const resetBtn = document.querySelector('#reset');

buttonNew.addEventListener('click',deleteGrid);
resetBtn.addEventListener('click', reset);
grids.forEach((div) => div.addEventListener('mouseover', changeColor));
buttons.forEach((button) => button.addEventListener('click', changeButton));

createGrid(answer);

function changeColor(e) {
    container.style.backgroundColor = "white";
    if (colorBG == 'Black') {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = 1;
    } else if (colorBG == 'White') {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = 1;
    } else if (colorBG == 'Disko') {
        e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.opacity = 1;
    } else if (colorBG == 'Wash') {
        e.target.style.backgroundColor = 'black';
        e.target.dataStep += 0.2;
        e.target.style.opacity = e.target.dataStep;
    }
    container.style.backgroundColor = "white";
} 

function changeButton(e) {
    colorBG = e.target.textContent;
}

function reset() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(answer);
}

function deleteGrid() {

    answer = +prompt('Grid:');
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(answer);
}

function createGrid(number) {
    for (let i = 0; i < number; i++) {
        let containerOfDiv = document.createElement('div');
        containerOfDiv.classList.add('containerOfDiv');
        for (let j = 0; j < number; j++) {
            let divOfGrid = document.createElement('div');
            divOfGrid.classList.add('divOfGrid');
            divOfGrid.dataStep = 0;
            containerOfDiv.appendChild(divOfGrid);
        }
        container.appendChild(containerOfDiv);
    }
}