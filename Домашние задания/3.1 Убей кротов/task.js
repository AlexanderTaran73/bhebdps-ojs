let deadCount = 0;
let missCount = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetGame() {
  deadCount = 0;
  missCount = 0;
  document.getElementById('dead').textContent = deadCount;
  document.getElementById('lost').textContent = missCount;
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  hole.onclick = function () {
    let hasMole = hole.classList.contains('hole_has-mole');

    if (hasMole) {
      deadCount++;
      document.getElementById('dead').textContent = deadCount;
    } else {
      missCount++;
      document.getElementById('lost').textContent = missCount;
    }

    if (deadCount === 10) {
      alert('Победа! Ты убил 10 кротов.');
      resetGame();
    }

    if (missCount === 5) {
      alert('Поражение! Ты промахнулся 5 раз.');
      resetGame();
    }
  };
}
