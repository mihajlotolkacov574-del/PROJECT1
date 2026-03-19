//const form = document.getElementById('registrationForm');

//const MIN_NAME_LENGHT = 3;
//const MIN_PASSWORD_LENGHT = 6;
//const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

//form.onsubmit = function(event) {
//    event.preventDefault();
//    const name = document.getElementById('name').value;
//    const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;
//    if (name.lenght < MIN_NAME_LENGHT) {
//        alert('в імені міє бути не менше 2 символів!');
//        return;
//    }
//    if (!EMAIL_PATTERN.test(email)) {
//        alert('Пароль повинен бути щонайменш 6 символів');
//        return;
//    }
//    if (password.lenght < MIN_PASSWORD_LENGHT) {
//        alert('користувач шз ткаим email вже шснує!');
//       return;
//    }
//    alert("Форма успішно відправлена!"); 
//    form.reset();
//}; 

const form = document.getElementById('registrationForm');

const MIN_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 6;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name.length < MIN_NAME_LENGTH) {
        alert("Ім'я повинне містити не менше " + MIN_NAME_LENGTH + " символів.");
        return;
    }

    if (!EMAIL_PATTERN.test(email)) {
        alert("Введіть коректний email-адрес.");
        return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
        alert("Пароль повинен бути довжиною мінімум " + MIN_PASSWORD_LENGTH + " символів.");
        return;
    }
    alert("Форма успішно відправлена!");
    form.reset();
}; 