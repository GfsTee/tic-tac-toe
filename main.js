const plays = document.querySelectorAll('.play')
const player = document.getElementById("player")
const win = document.getElementById("win")


let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let round = 0

const game = (e) => {

    console.log(e.target.classList.value);
    if (e.target.classList.value !== "play x" && e.target.classList.value !== "play o") {
        e.target.classList.add(round % 2 === 0 ? "x" : "o")
        gameBoard[e.target.id] = round % 2 === 0 ? "x" : "o"
        winningConditions.forEach(ele => {
            if (gameBoard[ele[0]] === "x" && gameBoard[ele[1]] === "x" && gameBoard[ele[2]] === "x") {
                for (let i = 0; i < plays.length; i++) {
                    plays[i].removeEventListener('click', game)
                }
                return win.innerHTML = "Player 1 won!"
            }
            if (gameBoard[ele[0]] === "o" && gameBoard[ele[1]] === "o" && gameBoard[ele[2]] === "o") {
                for (let i = 0; i < plays.length; i++) {
                    plays[i].removeEventListener('click', game)
                }
                return win.innerHTML = "Player 2 won!"
            }
        })
        if (round === 8) {
            console.log("Game Over. No Winner");
        }


        round++

        player.innerHTML = (round % 2) + 1
    }

    console.log(gameBoard);




}

for (let i = 0; i < plays.length; i++) {
    plays[i].addEventListener('click', game)
}