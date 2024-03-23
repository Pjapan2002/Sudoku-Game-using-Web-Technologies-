const tableBody = document.querySelector('tbody');
const startButton = document.getElementById('start');
const restartButton = document.getElementById('restart');
const timer = document.getElementById('timer');

let startTime;
let intervalId;

function generateSudoku() {
  for (let i = 0; i < 9; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('td');
      cell.textContent = Math.floor(Math.random() * 10);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

function startTimer() {
  startTime = Date.now();
  intervalId = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  timer.textContent = '00:00';
}

generateSudoku(); // Generate initial grid (replace with actual logic)

startButton.addEventListener('click', () => {
  startTimer();
  // Add functionality to handle user input and validation (check row, column, submatrix)
});

restartButton.addEventListener('click', () => {
  stopTimer();
  tableBody.innerHTML = ''; // Clear existing grid
  generateSudoku(); // Generate new grid
});
