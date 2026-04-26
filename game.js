// This game is gonna be simple, i will place buttons in a grid and in each round the correct button is randomly generated
//if the player clicks the correct button, they get 5 points, if they click the wrong button, they lose 1 point
//This game will be of 5 rounds after which the player can choose to reset the game or not
const mainFrame = document.getElementById('main-frame');
const startButton = document.getElementById('start-game');
const score = document.getElementById('score');
const round = document.getElementById('round');

var correctBtn;

function startGame() {
    mainFrame.className = 'grid grid-cols-5 gap-x-4 gap-y-2 p-4 min-h-[20rem]';
    mainFrame.innerHTML = '';
    newRound();
}

function resetGame(){
    mainFrame.className = 'flex items-center justify-center p-6 min-h-[20rem]';
    score.innerText = '0';
    round.innerText = '0';
    mainFrame.innerHTML = `<button class="bg-zinc-500 hover:bg-zinc-800 text-white font-bold py-6 px-12 rounded-full" id="start-game">Start Game</button>`;
    document.getElementById('start-game').addEventListener('click', startGame);
}

function addButtons(){
    mainFrame.innerHTML = ''; // Clears the previous round's buttons
    for(let i = 0; i < 25; i++){
        const button = document.createElement('button');
        button.className = 'gameBtn bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-2 rounded-full text-sm md:text-base md:px-4 md:py-4 lg:text-lg lg:px-6 lg:py-6';
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
    mainFrame.className = 'flex items-center justify-center p-6 min-h-[20rem]';
    mainFrame.innerHTML = `<button class="bg-zinc-500 hover:bg-zinc-800 text-white font-bold py-6 px-12 rounded-full" id="endGame">End Game</button>`;
    const endBtn = document.getElementById('endGame');
    endBtn.addEventListener('click', () => {
        resetGame();
    });
}

function answerCheck(){
    const btns = document.querySelectorAll('.gameBtn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.id !== `btn-${correctBtn}`) {
                score.innerText = parseInt(score.innerText) - 1;
                return;
            }
            score.innerText = parseInt(score.innerText) + 5;
            newRound();
        });
    })
}
startButton.addEventListener('click', startGame);