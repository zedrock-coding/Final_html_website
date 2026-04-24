// This game is gonna be simple, i will place buttons in a grid and in each round the correct button is randomly generated
//if the player clicks the correct button, they get 5 points, if they click the wrong button, they lose 1 point
//This game will be of 5 rounds after which the player can choose to reset the game or not
const mainFrame = document.getElementById('main-frame');
const startButton = document.getElementById('start-game');

function startGame() {
    mainFrame.classList.remove('startFrame');
    mainFrame.classList.add('mainFrame');
    mainFrame.innerHTML = '';
}

function resetGame(){
    mainFrame.classList.remove('mainFrame');
    mainFrame.classList.add('startFrame');
    mainFrame.innerHTML = `<button class="startBtn" id="start-game">Start Game</button>`;
}

function addButtons(){
    for(let i = 0; i < 25; i++){
        const button = document.createElement('button');
        button.classList.add('gameBtn');
        button.id = `${i}`;
        button.innerText = 'Push Me!';
        mainFrame.appendChild(button);
    }
}

function generateCorrectButton(){
    randomBtn = Math.floor(Math.random() * 25);
    return randomBtn;
}
