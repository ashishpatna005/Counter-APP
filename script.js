const count = document.querySelector('#counter');
let currval = 0;
const incre = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const decre = document.querySelector('#decrement');

incre.addEventListener("click", () => {
    currval++;
    count.textContent = currval;
});

reset.addEventListener("click", () => {
    currval = 0;
    count.textContent = currval;
});

decre.addEventListener("click", () => {
    currval--;
    count.textContent = currval;
});
