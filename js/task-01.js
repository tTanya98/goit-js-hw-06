const allCategories = categories.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach((element) => {
    let elTitle = element.firstElementChild.textContent.trim();
    let oneTitleEl = element.lastElementChild.children.length;
console.log('Category:',elTitle);
console.log('Elements:',oneTitleEl);
});
