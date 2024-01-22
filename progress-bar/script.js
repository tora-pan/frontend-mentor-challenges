const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.indicator');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentStep = 1;
let progress = [0, 35, 66, 100];

nextBtn.addEventListener('click', () => {
    if (currentStep < circles.length) {
        circles[currentStep].classList.add('filled');
        circles[currentStep-1].classList.remove('active');
        circles[currentStep].classList.add('active');
        progressBar.style.width = `${progress[currentStep]}%`;
        currentStep++;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        circles[currentStep - 1].classList.remove('filled');
        circles[currentStep - 2].classList.add('active');
        circles[currentStep - 1].classList.remove('active');
        progressBar.style.width = `${progress[currentStep - 2]}%`;
        currentStep--;
    }
});
