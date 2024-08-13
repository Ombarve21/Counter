let number = 75;
const maxNumber = 150;
const minNumber = 0;

let history = [];
let future = [];

const numberDisplay = document.getElementById('number');
const progressBar = document.getElementById('progressBar');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');
const resetBtn = document.getElementById('resetBtn');

function updateUI() {
    numberDisplay.textContent = number;
    progressBar.style.width = `${(number / maxNumber) * 100}%`;

    undoBtn.disabled = history.length === 0;
    redoBtn.disabled = future.length === 0;
}

subtractBtn.addEventListener('click', () => {
    if (number > minNumber) {
        history.push(number);
        future = [];
        number--;
        updateUI();
    }
});

addBtn.addEventListener('click', () => {
    if (number < maxNumber) {
        history.push(number);
        future = [];
        number++;
        updateUI();
    }
});

undoBtn.addEventListener('click', () => {
    if (history.length > 0) {
        future.push(number);
        number = history.pop();
        updateUI();
    }
});

redoBtn.addEventListener('click', () => {
    if (future.length > 0) {
        history.push(number);
        number = future.pop();
        updateUI();
    }
});

resetBtn.addEventListener('click', () => {
    number = 75;
    updateUI();
});


updateUI();