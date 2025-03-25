// Assessing of required elements of HTML
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; // For turning of players
// Winning pattern of the game storing in an array
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;


// Clickable boxes by an event 'click'
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.classList.remove("colr");
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.classList.add("colr");
        }
        box.disabled = true;

        count++;
        checkDrawCond();

        checkWinner(); // Function call for checking winner
    });
});


// Checking for draw the game
const checkDrawCond = () => {
    if(count === 9){
        msg.innerText = "The game has been drew !\nNo one is winner !";
        msgContainer.classList.remove("hide");
    }
}

// Function of checking for winner
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos2Val); // Function for show winner
            }
        }
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
}
// For disable boxes
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}


// For reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}
// For enable boxes
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
// For reset and restart the game
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);