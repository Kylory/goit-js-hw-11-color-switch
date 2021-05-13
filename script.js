const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('.start'),
    stop: document.querySelector('.stop'),
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor () {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

let timerId = null;

refs.start.addEventListener('click', () => {
    timerId = setInterval(() => {
        changeColor()
    }, 1000);
    refs.start.disabled = true;
});

refs.stop.addEventListener('click', () => {
    clearInterval(timerId);
    refs.start.disabled = false;
});