const formInput = document.querySelector('#validation-input');
const dataLength = Number(formInput.getAttribute("data-length"));

formInput.addEventListener('focus', handleInputFocus);
formInput.addEventListener('blur', handleInputBlur);

function handleInputFocus() {
console.log ('input in focus');
};

function handleInputBlur(event) {
   if (event.target.value.trim().length === Number(formInput.getAttribute('data-length')))
    {
   event.target.style.outline = ' 3px solid green';
   } else {
      event.target.style.outline = ' 3px solid red';
   }
  };