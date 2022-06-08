//ELEMENTS START
var npcSelection = document.getElementById("npcSelection")
var playerSelection = document.getElementById("playerSelection")
var gameResults = document.getElementById("game-results")
var shoot = document.querySelector('#shoot')
var btn= document.querySelector('#btn')
var roundNumber = document.getElementById('rounds')
var scoreBoard = document.getElementById('scoreBoard')
//ELEMENTS END

//POSSIBILITIES START
var possibilities = [
    {
        selection : "Rock",
        beats : "Scissors"
    },
    {
        selection : "Paper",
        beats : "Rock"
    },
    {
        selection : "Scissors",
        beats : "Paper"
    },
]
//POSSIBILITIES END

//GAME INFO START
var playerOneScore = 0;
var playerTwoScore = 0;
var rounds = 1
// GAME INFO END



// CALLS A RANDOM SELECTION FOR THE COMPUTER
const computerPlay = () => {
    let randomSelection = Math.floor(Math.random() * possibilities.length);
    npcSelection.innerHTML = `The NPC chose ${possibilities[randomSelection].selection}`
    return possibilities[randomSelection]
}
// TAKES THE USERS INPUT SELECTION
const playerPlay = (value) => {
    const selection = possibilities.find(selection => selection.selection === value)
    playerSelection.innerHTML = `You chose ${selection.selection}!`
    return selection
}
// GETS THE CURRENT SCORE AND SCORE RESULTS 
const getGameResults = (playerOne, playerTwo) => {
    if(playerOne.beats === playerTwo.selection){
        playerOneScore++
        gameResults.innerHTML = `You win! ${playerOne.selection} beats ${playerTwo.selection}`
    }
    else if(playerOne.selection === playerTwo.selection){
        gameResults.innerHTML = 'It is a draw!'
    }
    else{
        playerTwoScore++
        gameResults.innerHTML = `CPU wins ${playerTwo.selection} beats ${playerOne.selection}`
    }

}
// GETS FINAL ROUND RESULTS
const getRoundResults = (pOne, pTwo) => {
    if(pOne > pTwo){
        return "You"
    }
    else{
        return "The computer"
    }
}

// BUTTON FUNCTIONALITY
btn.onclick = (e) => {
    if(rounds <= 4){
        e.preventDefault()
        var playerOne = playerPlay(shoot.value)
        var playerTwo = computerPlay()
        getGameResults(playerOne, playerTwo)
        scoreBoard.innerHTML = `You : ${playerOneScore} CPU : ${playerTwoScore}`
        roundNumber.innerHTML = `Round ${rounds}`
        rounds++
    }
    else{
        var finalResults = getRoundResults(playerOneScore, playerTwoScore)
        alert(`The rounds are over! ${finalResults} won! Click 'OK' to restart.`)
        playerOneScore = 0
        playerTwoScore = 0
        rounds = 1
    }
}

    

    
        








    
    



    



