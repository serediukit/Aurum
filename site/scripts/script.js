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

// Додаємо подію для очищення форми після відправки
const form = document.getElementById('phone-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    submitBtn = document.getElementById("submit-btn");
    submitBtn.setAttribute('visibility', 'hidden');

    fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            phoneInput.setAttribute('disabled', true);
            let formText = document.getElementById('form-text');
            formText.value = 'Дякуємо. Ми Вам зателефонуємо як тільки зможемо ✨';
        })
        .catch((error) => console.log('Sending form failed'));
})