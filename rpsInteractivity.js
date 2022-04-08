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

rock.addEventListener('click', () => clickPlay('rock'));
paper.addEventListener('click', () => clickPlay('paper'));
scissors.addEventListener('click', () => clickPlay('scissors'));

const resultDiv = document.createElement('div')
resultDiv.textContent = 'Test'
document.body.appendChild(resultDiv)