const formInputEl = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

formInputEl.addEventListener('input', (event) => {
    if (formInputEl.value === "") {
        return userNameOutput.textContent = `Anonymous`;
    }
else {
    return userNameOutput.textContent = event.target.value;
}
});