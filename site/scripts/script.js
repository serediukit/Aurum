function showHideNavigation() {
    var x = document.getElementById("navHide");
    if (x.className.indexOf("aurum-show") === -1) {
        x.className += " aurum-show";
    } else {
        x.className = x.className.replace(" aurum-show", "");
    }
}

function onClick(element) {
    document.getElementById("image-view").src = element.src;
    document.getElementById("gallery-view").style.display = "block";
}

// Очищує поле при натисканні на нього
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('click', () => {
    phoneInput.value = '';
});

// // Додаємо подію для очищення форми після відправки
// const form = document.getElementById('phone-form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Запобігає перезавантаженню сторінки
//     form.submit(); // Відправляє форму
//     phoneInput.value = ''; // Очищає поле після відправки
// });