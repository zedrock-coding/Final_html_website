// This game is gonna be simple, i will place buttons in a grid and in each round the correct button is randomly generated
//if the player clicks the correct button, they get 5 points, if they click the wrong button, they lose 1 point
//This game will be of 5 rounds after which the player can choose to reset the game or not
const mainFrame = document.getElementById('main-frame');
const startButton = document.getElementById('start-game');
const score = document.getElementById('score');
const round = document.getElementById('round');

var correctBtn;

function startGame() {
    mainFrame.classList.remove('startFrame');
    mainFrame.classList.add('mainFrame');
    mainFrame.innerHTML = ''; // Removes the start button from the screen
    score.innerText = '0';
    round.innerText = '0';
    newRound();
}

function resetGame(){
    mainFrame.classList.remove('mainFrame');
    mainFrame.classList.add('startFrame');
    mainFrame.innerHTML = `<button class="startBtn" id="start-game">Start Game</button>`;
    document.getElementById('start-game').addEventListener('click', startGame);
}

function addButtons(){
    mainFrame.innerHTML = ''; // Clears the previous round's buttons
    for(let i = 0; i < 25; i++){
        const button = document.createElement('button');
        button.classList.add('gameBtn');
        button.id = `btn-${i}`;
        button.innerText = 'Push Me!';
        mainFrame.appendChild(button);
    }
}

function generateCorrectButton(){
    randomBtn = Math.floor(Math.random() * 25);
    return randomBtn;
}

function newRound(){
    // Check if the game has reached 5 rounds before starting a new one
    if (parseInt(round.innerText) >= 5) {
        endGame();
        return;
    }
    round.innerText = parseInt(round.innerText) + 1;
    addButtons();
    correctBtn = generateCorrectButton();
    answerCheck(); // Attach listeners to the newly created buttons
    return correctBtn;
}

function endGame(){
    mainFrame.classList.remove('mainFrame');
    mainFrame.classList.add('startFrame');
    mainFrame.innerHTML = `<button class = "startBtn" id = "endGame">End Game</button>`;
    const endBtn = document.getElementById('endGame');
    endBtn.addEventListener('click', () => {
        resetGame();
    });
}

function answerCheck(){
    const btns = document.querySelectorAll('.gameBtn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            while(btn.id !== `btn-${correctBtn}`){
                score.innerText = parseInt(score.innerText) - 1;
                return;
            }
            score.innerText = parseInt(score.innerText) + 5;
            newRound();
        });
    })
}
startButton.addEventListener('click', startGame);