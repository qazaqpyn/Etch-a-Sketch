const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let containerOfDiv = document.createElement('div');
    containerOfDiv.classList.add('containerOfDiv');
    for (let j = 0; j < 16; j++) {
        let divOfGrid = document.createElement('div');
        divOfGrid.classList.add('divOfGrid');
        containerOfDiv.appendChild(divOfGrid);
    }
    container.appendChild(containerOfDiv);
}
