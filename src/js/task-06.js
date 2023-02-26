const formInput = document.querySelector('#validation-input');
const dataLength = Number(formInput.getAttribute("data-length"));

formInput.addEventListener('focus', handleInputFocus);
formInput.addEventListener('blur', handleInputBlur);

function handleInputFocus() {
console.log ('input in focus');
};

function handleInputBlur(event) {
 if (this.getAttribute('data-length') > this.value.length) {
 this.classList.remove('valid');
 this.classList.add('invalid');
 } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
 }
};