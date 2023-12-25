const bento = document.querySelector('.bento');
const bentoBoxes = document.querySelectorAll('.bento_box');
const bentoBoxesSpan = document.querySelectorAll('.bento_box > span');
const bentoIntro = bento.querySelectorAll(
    '.bento_intro > .bento_intro_row > h1',
);

console.log(bentoIntro);

const init = () => {
    gsap.set(bentoBoxes, { scaleY: 0, transformOrigin: 'bottom' });
    gsap.set(bentoBoxesSpan, { y: '110%' });

    splitText();
};

const splitText = () => {
    console.log('here');
    Splitting({
        target: bentoIntro,
        key: null,
    });
    Splitting({ target: bentoIntro });

    gsap.set('.bento_intro .char', { y: '100%' });

    animateIntro();
};

const animateIntro = () => {
    gsap.timeline({
        defaults: { duration: 1.5, ease: 'expo.inOut', stagger: 0.02 },
    })
        .to('.bento_intro .char', {
            y: '0',
            onComplete: () => {
                animateBoxes();
            },
        })
        .to('.bento_intro .char', {
            y: '-100%',
            duration:.6,
            onComplete: () => {
                document.querySelector('.bento_intro').remove();
            },
        });
};

const animateBoxes = () => {
    gsap.timeline()
        .to(bentoBoxes, {
            duration: 1.6,
            scaleY: '100%',
            ease: 'expo.inOut',
            delay: .9,
            stagger: 0.05,
            onComplete: () => {
                addEventListeners();
            },
        })
        .to(
            bentoBoxesSpan,
            {
                duration: 1.6,
                y: '0',
                ease: 'expo.out',
            },
            1,
        );
};

const animateInnerText = (dataSpan) => {
    gsap.timeline({ defaults: { duration: 0.62 } })
        .to(dataSpan, {
            y: '-100%',
            ease: 'expo.in',
            overwrite: true,
        })
        .set(dataSpan, { y: '100%' })
        .to(dataSpan, { y: '0', ease: 'expo.out' });
};

const addEventListeners = () => {
    bentoBoxes.forEach((box) => {
        box.addEventListener('mouseenter', handleMouseEnter);
        box.addEventListener('mouseleave', handleMouseLeave);
    });
};

const handleMouseEnter = (e) => {
    const dataSpan = e.target.children[0].children[0];
    e.target.classList.add('active');
    animateInnerText(dataSpan);
};

const handleMouseLeave = (e) => {
    e.target.classList.remove('active');
};

init();
