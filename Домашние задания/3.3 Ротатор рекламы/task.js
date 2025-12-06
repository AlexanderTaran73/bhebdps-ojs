let rotators = document.querySelectorAll('.rotator');

for (let rotator of rotators) {
  startRotator(rotator);
}

function startRotator(rotator) {
  let cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {
    let current = cases[index];
    current.classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;
    let next = cases[index];

    let speed = Number(next.dataset.speed) || 1000;
    let color = next.dataset.color || 'black';

    next.style.color = color;
    next.classList.add('rotator__case_active');

    setTimeout(rotate, speed);
  }

  rotate();
}
