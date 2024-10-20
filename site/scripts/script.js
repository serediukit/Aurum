const phoneInput = document.getElementById('phone');
let formText = document.getElementById('form-text');
let submitBtn = document.getElementById("submit-btn");

function disableForm() {
    phoneInput.disabled = true;
    formText.innerText = 'Зачекайте 5 хвилин, щоб відправити ще раз. Дякуємо за розуміння ✨';
    submitBtn.style.display = 'none';
};

const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
let currentTime = new Date().getTime();
const fiveMinutes = 5 * 60 * 1000;

if (lastSubmissionTime && (currentTime - lastSubmissionTime) < fiveMinutes) {
    disableForm();
}

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
phoneInput.addEventListener('click', () => {
    phoneInput.value = '';
});

const phonePattern = /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

// Додаємо подію для очищення форми після відправки
const form = document.getElementById('phone-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    currentTime = new Date().getTime();

    if (lastSubmissionTime && (currentTime - lastSubmissionTime) < fiveMinutes) {
        disableForm();
        return;
    }

    let phoneValue = phoneInput.value;
    if (!phonePattern.test(phoneValue)) {
        alert("Будь ласка, введіть коректний номер телефону.");
        return;
    }

    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            localStorage.setItem('lastSubmissionTime', currentTime);
            phoneInput.disabled = true;
            formText.innerText = 'Дякуємо, ми Вам зателефонуємо як тільки зможемо ✨';
            submitBtn.style.display = 'none';
        })
        .catch((error) => console.log('Sending form failed'));
});