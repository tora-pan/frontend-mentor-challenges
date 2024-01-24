const button = document.getElementById('mover');

const mouseOver = (event) => {
    const minSize = Math.min(window.innerWidth, window.innerHeight);
    const randomX = Math.floor(Math.random() * minSize);
    const randomY = Math.floor(Math.random() * minSize);
    console.log('change mouse position: ', randomX, randomY);
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
};
