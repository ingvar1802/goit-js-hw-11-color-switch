const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.switch = setInterval(() => {
            const min = 0;
            const max = colors.length - 1;
            let i = randomIntegerFromInterval(min, max);
            refs.body.style.backgroundColor = colors[i];
        }, 1000);
    },
    stop() {
        clearInterval(this.switch);
        this.isActive = false;
    },
};

refs.startButton.addEventListener("click", timer.start.bind(timer));
refs.stopButton.addEventListener("click", timer.stop.bind(timer));