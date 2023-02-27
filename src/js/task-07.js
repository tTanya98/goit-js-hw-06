const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// function handleInputChange(event) {
//     textEl.style.fontSize = event.currentTarget.value + "px";
// };

// fontSizeEl.addEventListener("input", handleInputChange);

textEl.style.fontSize = fontSizeEl.value + "px";

fontSizeEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.target.value + "px";
});