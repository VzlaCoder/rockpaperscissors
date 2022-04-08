const btns = document.querySelectorAll("#btnContainer")

const rock = document.createElement('button')
const paper = document.createElement('button')
const scissors = document.createElement('button')

rock.textContent = "Rock"
paper.textContent = "Paper"
scissors.textContent = "Scissors"

btnContainer.appendChild(rock)
btnContainer.appendChild(paper)
btnContainer.appendChild(scissors)

rock.addEventListener('click', function (e) {
    console.log(RPS('rock', computerPlay()))
});

paper.addEventListener('click', function (e) {
    console.log(RPS('paper', computerPlay()))
});

scissors.addEventListener('click', function (e) {
    console.log(RPS('scissors', computerPlay()))
});

const resultDiv = document.createElement('div')
resultDiv.textContent = console.log(playerWins + ' - ' + compWins)
document.body.appendChild(resultDiv)