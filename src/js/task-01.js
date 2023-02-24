const allCategories = categories.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach((element) => {
    let elTitle = element.querySelector('h2').textContent;
    let oneTitleEl = element.querySelectorAll('li');
    let oneTitleElInd = oneTitleEl.length;
console.log('Category:',elTitle);
console.log('Elements:',oneTitleElInd);
});