const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const solutionDisplay = document.querySelector('#solution')
const suqares = 81
const submission = []

for (let i = 0; i < suqares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 1)
    inputElement.setAttribute('max', 9)

    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
    ) {
        inputElement.classList.add('odd-section')
    }
    puzzleBoard.appendChild(inputElement)
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

const populateValues = (isSolvable, solution) => {
    const inputs = document.querySelectorAll('input')
    if (isSolvable && solution) {
        inputs.forEach(input => {
            input.value = solution[i]
        })
    } else {
        solutionDisplay.innerHTML = 'This is not solvable'
    }

}

const solve = () => {
    joinValues()
    const data = submission.join('')
    console.log('data', data)
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
        populateValues(response.data.solvable.response.data.solution)
    }).catch(function (error) {
        console.error(error);
    });
}

solveButton.addEventListener('click', solve)