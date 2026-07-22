function getcomputerchoice() {
    const roll = Math.floor(Math.random()*3)
    if (roll == 1) {
        return 'paper'
    }
    else if (roll==2) {
        return 'rock'
    }
    else {
        return 'scissors'
    }
}
function getuserchoice() {
    const choice = prompt('rock, paper or scissors').toLowerCase()
    switch (choice) {
        case 'rock':
            return 'rock'
        case 'paper':
            return 'paper'
        default:
            return 'scissors'
     }
    }
let hscore = 0
let cscore = 0
function playround(huchoice, comchoice) {
    if ((huchoice == 'paper' && comchoice== 'rock')||(huchoice == 'rock' && comchoice== 'scissors')||(huchoice == 'scissors' && comchoice== 'paper')) {
        hscore++
        result.textContent='You won, what a genius!'
    }
    else if ((huchoice == 'scissors' && comchoice== 'rock')||(huchoice == 'paper' && comchoice== 'scissors')||(huchoice == 'rock' && comchoice== 'paper')) {
        cscore++
        result.textContent='You lost, what a loser!'
    }
    else {
        result.textContent='Draw, what a mid gameplay!'
    }
}
function playgame(rounds) {
    for (let i=1;i<=rounds;i++) {
        playround(getuserchoice(),getcomputerchoice())
        console.log('You '+ hscore +'-'+ cscore +' PC')
    }
    if (hscore > cscore) {
        console.log('The final winner is...you, congratulations')
    }
    else if (cscore > hscore) {
        console.log('the final winner is...the PC, you sucked like usual')
    }
    else {
        console.log('The final winner is...no one...what a waste of time')
    }
}
const paper = document.querySelector('#pa')
const rock = document.querySelector('#ro')
const scissors = document.querySelector('#sc')
const result = document.querySelector('#result')
paper.addEventListener('click',()=>{playround('paper',getcomputerchoice())})
rock.addEventListener('click',() => {playround('rock',getcomputerchoice())})
scissors.addEventListener('click',() => {playround('scissors',getcomputerchoice())})