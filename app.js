const board = document.getElementById('board');
const gridCount = document.querySelector('input[type="text"]');
const enterButton = document.querySelector('input[type="submit"]');
const clearButton = document.getElementById('reload');
const select = document.querySelector('select');
let selectedColor = '';


let count = 16;

let sideLength = 0;

// gets the grid count per row and column and creates the board accordingly
enterButton.addEventListener('click', getCount);
enterButton.addEventListener('click', createBoard);

// reloads the document and clears grid
clearButton.addEventListener('click', () => {
    location.reload();
});

select.addEventListener('change', (e) => {
    selectedColor = e.target.value;
})

function getCount(e){
    e.preventDefault();
    count = gridCount.value;
    sideLength = 500/+count;
    console.log(sideLength);
    console.log(count);
}

function createBoard() {
    for(let i=0;i<count*count;i++){
        const grid = document.createElement('div');
        grid.classList.add('grid-item');
        grid.id = i;
        grid.setAttribute('style', `width: ${sideLength}px;height: ${sideLength}px; background-color: white;`);
        board.appendChild(grid);
    }
    board.setAttribute('style', `width: ${count*sideLength}px; height: ${count*sideLength}px; grid-template-columns: repeat(${count}, 1fr); grid-template-rows: repeat(${count}, 1fr); border: 1rem solid black; background-color: white;`);
    const gridItem = document.getElementsByClassName('grid-item');  
    var grid = Array.from(gridItem);
    console.log(grid);
    grid.forEach(element => {
        let opacity = 0.1;
        element.addEventListener('mouseover', () => {
            if(selectedColor == "B&W"){
                element.style.backgroundColor = 'black';
            }  else if (selectedColor == "Darken") {
                element.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            } else {
                console.dir(element);
                element.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            }
        });
        element.addEventListener('mouseout', () => {
            opacity = opacity + 0.1
        });
    });
}













