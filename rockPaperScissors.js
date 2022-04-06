function computerPlay() {
    num = Math.random();
    if (num <= .33) {
        play = 'Rock';
       } else if (num <= .66) {
           play = 'Paper';
       } else {
           play = 'Scissors';
       } return play
   }

function RPS(input, play) {

input = input.toLowerCase()
let rest = input.slice(1)
let upper = input.charAt(0)
upper = upper.toUpperCase()
input = upper + rest    

if (input === 'Rock' && play === 'Scissors' || 
    input === 'Paper' && play === 'Rock' ||
    input === 'Scissors' && play === 'Paper') {
       return 'You win! ' + input + ' beats ' + play

}   else if (input === 'Rock' && play === 'Paper' || 
    input === 'Paper' && play === 'Scissors' ||
    input === 'Scissors' && play === 'Rock') {
    return 'You lose! ' + play + ' beats ' + input

}   else if (input === play) {
    return 'Tie, try again.'

}    else {
        return 'Please re-enter an appropriate input. Maybe check your spelling?'
}
}

function game() {
let playerWins = 0
let compWins = 0
//    for (let i = 0;  i < 5; i++) {
        play = computerPlay()
        let input = prompt('Enter Rock, Paper, or Scissors: ')
        let result = RPS(input, play)
        console.log(result)
            if (result.includes('win')) {
            playerWins ++
            console.log('Player wins: ' + playerWins)
            }   else if (result.includes('lose')) {
                compWins ++
                console.log('Computer wins: ' + compWins) 
        }
}

//let text = ''
//    if (playerWins < compWins) {
//        text = 'You lose'
//        console.log(text)
//        } else if (playerWins > compWins) {
//        text = 'Hell yeah, brother! You win!'
//        console.log(text)
//        } else {
//        text = 'You tied...'
//        console.log(text)
//    }
//}

game()