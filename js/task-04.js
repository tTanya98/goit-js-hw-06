let counterValue = 0;
let step = 1;

const countEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

countEl.firstElementChild.addEventListener('click', handleDecrementButtonEl);
countEl.lastElementChild.addEventListener('click', handleIncrementButtonEl);

function handleDecrementButtonEl () {
    counterValue -= step;
    valueEl.textContent = counterValue;
    console.log('Click on decrement button');
};

function handleIncrementButtonEl () {
    counterValue += step;
    valueEl.textContent = counterValue;
    console.log('Click on increment button');
};