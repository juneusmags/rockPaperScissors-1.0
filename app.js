

const game = () => {
    var npcSelection = document.getElementById("npcSelection")
    var playerSelection = document.getElementById("playerSelection")
    var gameResults = document.getElementById("game-results")
    var shoot = document.querySelector('#shoot')
    var btn= document.querySelector('#btn')

    var scoreBoard = document.getElementById('scoreBoard')
    var i = 0


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
    var playerOneScore = 0;
    var playerTwoScore = 0;



    const computerPlay = () => {
        let randomSelection = Math.floor(Math.random() * possibilities.length);
        npcSelection.innerHTML = `The NPC chose ${possibilities[randomSelection].selection}`
        return possibilities[randomSelection]
    }

    const playerPlay = (value) => {
        const selection = possibilities.find(selection => selection.selection === value)
        playerSelection.innerHTML = `You chose ${selection.selection}!`
        return selection
    }

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
        while(i < 5){
            btn.onclick = (event) => {
                event.preventDefault()
                var playerOne = playerPlay(shoot.value)
                var playerTwo = computerPlay()
                getGameResults(playerOne, playerTwo)
                scoreBoard.innerHTML = `You : ${playerOneScore} CPU : ${playerTwoScore}`
                i++
            }
            return alert("The Rounds are over")
        }
        
}


game()

    
    



    



