const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });
    
    const {
        elements: { email, password } 
    } = event.currentTarget;

    const data = {
        [ email.name ]: email.value,
        [ password.name ]: password.value
    };
    console.log( data );

    if (email.value === "" || password.value == "") {
        return alert ("Please fill in all fields!");
        };

    event.currentTarget.reset();
}
