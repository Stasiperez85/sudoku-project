const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const suqares = 81

for (let i = 0; i < suqares; i++) {
    const inputeElement = document.createElement('input')
    inputeElement.setAttribute('type', 'number')
    inputeElement.setAttribute('min', 0)
    inputeElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputeElement)
}