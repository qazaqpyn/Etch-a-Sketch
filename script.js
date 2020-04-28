const container = document.querySelector(".container");

for (let i = 0; i < 16**2; i++) {
    let divOfGrid = document.createElement('div');
    container.appendChild(divOfGrid);
    console.log(i);
}