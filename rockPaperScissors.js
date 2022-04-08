function computerPlay() {
    num = Math.floor(Math.random()*3);
    console.log(num)
    if (num < 1) {
        computerSelection = 'Rock';
       } else if (num < 2) {
           computerSelection = 'Paper';
       } else {
           computerSelection = 'Scissors';
       } return computerSelection
   }

let playerWins = 0
let compWins = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWins ++
    roundWinner = 'player' 
        return "You win! You now have " + playerWins + " wins"

}   else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock') {
    compWins ++
    roundWinner = 'computer'
        return "You lose. The computer now has " + compWins + " wins"

}   else if (playerSelection === computerSelection) {
    roundWinner = 'tie'
        return "Meh. Tie"

}   else {
        return 'Please re-enter an appropriate selection. Maybe check your spelling?'
}
}

function clickPlay(playerSelection)

    playRound(playerSelection, computerPlay()) 