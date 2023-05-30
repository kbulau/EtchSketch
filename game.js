const container = document.querySelector("#container")

function createGrid(size){
    for (let i=0; i<size*size; i++){
        console.log(i)
        const div = document.createElement('div')
        div.style.width = 600/size + 'px'
        div.style.height = 600/size + 'px'

        container.appendChild(div)
    }
}

createGrid(10)