let color = 'black'

const container = document.querySelector("#container")

function createGrid(size){
    for (let i=0; i<size*size; i++){
        const div = document.createElement('div')
        div.classList.add('grid')
        div.style.width = 600/size + 'px'
        div.style.height = 600/size + 'px'
        div.addEventListener('mouseover', colorSquare)
        container.appendChild(div)
    }
}

createGrid(16)

function setGrid(input){
let grid = document.querySelectorAll('.grid');
grid.forEach(el => container.removeChild(el));
createGrid(input);
}

function colorSquare(){
    if (color === 'random'){
        this.style.backgroundColor = getRandomRgb()
    } else {this.style.backgroundColor = color}
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  document.querySelector('.random').addEventListener('click', ()=>{
    console.log(1)
    color='random'
    colorSquare();
  })

  document.querySelector('.black').addEventListener('click', ()=>{
    console.log(1)

    color='black'
    colorSquare();

  })

  document.querySelector('.eraser').addEventListener('click', ()=>{
    console.log(1)

    color='white';
    colorSquare();
  })

  document.querySelector('.size').addEventListener('click', (event) =>{
  })