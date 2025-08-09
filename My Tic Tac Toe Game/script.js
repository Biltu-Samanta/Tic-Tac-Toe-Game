let boxes = document.querySelectorAll(".box")
let resetGame = document.querySelector("#resetGame")
let newGame = document.querySelector("#newGame")
let winner = document.querySelector(".popup")
let turnO = true;
// for(let box of boxes){
//     box.addEventListener("click", ()=>{
//         console.log("Hello !")
//     })
// }

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("hello world")
        if (box.innerText != "") {
            retrun;
        }
        if (turnO) {
            box.innerText = "X"
            turnO = false;
        }
        else {
            box.innerText = "O"
            turnO = true;
        }
        checkWinner();
    },)
})

function checkWinner() {
    for (let pattern of winPatterns) {
        let pasvalue1 = boxes[pattern[0]].innerText;
        let pasvalue2 = boxes[pattern[1]].innerText;
        let pasvalue3 = boxes[pattern[2]].innerText;

        if(pasvalue1 !="" && pasvalue2 != "" && pasvalue3 != ""){
            if(pasvalue1 === pasvalue2 && pasvalue2 === pasvalue3){
                boxDisable();
                showWinner();
            }
        }

    }
}

newGame.addEventListener("click", ()=>{
    boxEnable();
    winner.style.display = "none"
})

resetGame.addEventListener("click", ()=>{
    boxEnable();
})

function boxDisable(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function boxEnable(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
function showWinner(){
    winner.style.display = "block"
}
