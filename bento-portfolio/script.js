const bento = document.querySelector('.bento');
const bentoBoxes = document.querySelectorAll('.bento_box');
const bentoBoxesSpan = document.querySelectorAll('.bento_box > span');
const bentoIntro = bento.querySelectorAll(
    '.bento_intro > .bento_intro_row > h1',
);

const init = () => {
    const date = document.getElementById('date');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const today = new Date();
    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();
    day.innerHTML = weekDays[today.getDay()];
    month.innerHTML = months[today.getMonth()];
    year.innerHTML = today.getYear();

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
            duration: 0.6,
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
            delay: 0.9,
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

// const animateInnerText = (dataSpan) => {
//     gsap.timeline({ defaults: { duration: 0.62 } })
//         .to(dataSpan, {
//             y: '-100%',
//             ease: 'expo.in',
//             overwrite: true,
//         })
//         .set(dataSpan, { y: '100%' })
//         .to(dataSpan, { y: '0', ease: 'expo.out' });
// };

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

const child1 = document.querySelector('.bento_box:nth-child(1)');
const child2 = document.querySelector('.bento_box:nth-child(2)');
const child3 = document.querySelector('.bento_box:nth-child(3)');
const child4 = document.querySelector('.bento_box:nth-child(4)');
const child5 = document.querySelector('.bento_box:nth-child(5)');
const child6 = document.querySelector('.bento_box:nth-child(6)');

const layoutArray = [
    { tr: 0, tl: 10, br: 0, bl: 10 },
    { tr: 10, tl: 0, br: 10, bl: 0 },
    { tr: 0, tl: 0, br: 10, bl: 0 },
    { tr: 0, tl: 10, br: 10, bl: 0 },
    { tr: 10, tl: 10, br: 10, bl: 0 },
    { tr: 0, tl: 0, br: 0, bl: 0 },
];

const randomlyRoundCorner = (box) => {
    const randomIndex = Math.floor(Math.random() * layoutArray.length);
    const randomLayout = layoutArray[randomIndex];
    gsap.to(box, {
        duration: 1,
        ease: 'bounce.in',
        borderTopRightRadius: `${randomLayout.tr}%`,
        borderTopLeftRadius: `${randomLayout.tl}%`,
        borderBottomRightRadius: `${randomLayout.br}%`,
        borderBottomLeftRadius: `${randomLayout.bl}%`,
        onComplete: () => {
            setTimeout(() => {
                gsap.to(box, {
                    duration: 1,
                    gap: 4,
                    ease: 'bounce.out',
                    borderTopRightRadius: '0%',
                    borderTopLeftRadius: '0%',
                    borderBottomRightRadius: '0%',
                    borderBottomLeftRadius: '0%',
                });
            }, 2000);
        },
    });
};
setInterval(() => {
    const randomEl = document.querySelector(
        `.bento_box:nth-child(${Math.floor(Math.random() * 6) + 1})`,
    );
    randomlyRoundCorner(randomEl);
}, 5000);

init();
