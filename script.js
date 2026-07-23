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
let round = 0
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
    round++
    score.textContent='You '+ hscore +'-'+ cscore +' PC'

    if (round==5) {
        if (hscore > cscore) {
            result.textContent='The final winner is...you, congratulations'
        }
        else if (cscore > hscore) {
            result.textContent='The final winner is...the PC, you sucked like usual'
        }
        else {
            result.textContent='The final winner is...no one...what a waste of time'
        }
        paper.disabled=true
        rock.disabled=true
        scissors.disabled=true
    }
}
function playgame() {
    hscore=0
    cscore=0
    round=0
    score.textContent='You 0-0 PC'
    result.textContent='Choose rock, paper or scissors'
    paper.disabled=false
    rock.disabled=false
    scissors.disabled=false
}
const paper = document.querySelector('#pa')
const rock = document.querySelector('#ro')
const scissors = document.querySelector('#sc')
const result = document.querySelector('#result')
const score = document.querySelector('#score')
const start =document.querySelector('#start')

paper.addEventListener('click',()=>{playround('paper',getcomputerchoice())})
rock.addEventListener('click',() => {playround('rock',getcomputerchoice())})
scissors.addEventListener('click',() => {playround('scissors',getcomputerchoice())})
start.addEventListener('click',() => {playgame(5)})