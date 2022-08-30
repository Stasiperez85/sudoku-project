const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const suqares = 81
const submission = []

for (let i = 0; i < suqares; i++) {
    const inputeElement = document.createElement('input')
    inputeElement.setAttribute('type', 'number')
    inputeElement.setAttribute('min', 1)
    inputeElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputeElement)
}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
    console.log(submission)
}


const solve = () => {

const options = {
  method: 'POST',
  url: 'https://solve-sudoku.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ec4df9eb82msh499ecb287b9136ap1f22cajsn0a22cab9e50f',
    'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
  },
  data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

solveButton.addEventListener('click', joinValues)