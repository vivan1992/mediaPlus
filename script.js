'use ctrict';

window.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
    const button = document.querySelector('.button');

    blocks.forEach((item,i) => {
        item.addEventListener('animationstart', () => {
            console.log(`start animation block ${i+1}`);
        });
        item.addEventListener('animationend', () => {
            console.log(`end animation block ${i+1}`);
            if (i === blocks.length - 1) {
                endAnimation();
            }
        });
    });

    const startAnimation = (item) => {
        button.textContent = 'in progress';
        item.classList.add('animate');
    };

    function endAnimation() {
        console.log('---Progress End---');
        alert('animation end');
        button.textContent = 'start';
        blocks.forEach(item => {
            item.classList.remove('animate');
        });
    }

    button.addEventListener('click', () => {
        console.log('---Progress Start---');
        blocks.forEach((item, i) => {
            setTimeout(startAnimation, i*500, item);
        });
    });
});

