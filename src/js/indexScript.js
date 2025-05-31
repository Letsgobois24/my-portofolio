const contactForm = document.getElementById('contact-form');
const inputForm = contactForm.querySelectorAll('input, textarea');
const validationMessage = contactForm.getElementsByTagName('span');

const submission = document.getElementById('submission');

const validationModal = submission.querySelector('#validation');
const submitButton = validationModal.querySelector('#submit-button');
const successionModal = submission.querySelector('#succession');

const closeButton = submission.querySelectorAll('.close-button');
closeButton.forEach(button => {
    button.addEventListener('click', function () {
        submission.classList.add('hidden');
    });
});

const loadingGif = submission.querySelector('#loading');
const successionIcon = successionModal.getElementsByTagName('svg');
const messageSuccession = successionModal.querySelector('h4');
const informationSuccession = successionModal.querySelector('p');

contactForm.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();

    // Cek jika input kosong
    for (let index = 0; index < inputForm.length; index++) {
        if (inputForm[index].value.trim() == '') {
            validationMessage[index].classList.remove('hidden');
            scrollIntoView(validationMessage[index]);
            return
        } else validationMessage[index].classList.add('hidden');

        // Cek kevalidan email
        if (index == 1) {
            if (!isValidEmail(inputForm[1].value)) {
                validationMessage[1].classList.remove('hidden');
                validationMessage[1].textContent = 'Email tidak valid';
                return
            } else if ((inputForm[1].value.trim() == '')) {
                validationMessage[1].textContent = 'Tolong, isikan email Anda!';
                scrollIntoView(validationMessage[1]);
            }
        }
    }

    // Show Modal
    submission.classList.remove('hidden');
    validationModal.classList.remove('hidden')
    successionModal.classList.add('hidden');
})

// Post Form
submitButton.addEventListener('click', function () {
    validationModal.classList.add('hidden');
    loadingGif.classList.remove('hidden');

    fetch("https://rymalfarizi.rf.gd/apicontact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inputForm[0].value || "",
            email: inputForm[1].value || "",
            message: inputForm[2].value || ""
        })
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.status == 400) {
                errorMessage();
                firstKey = Object.keys(response.messages)[0]
                informationSuccession.textContent = response.messages[firstKey];
            } else if (response.status == 429) {
                console.log(response)
            } else {
                inputForm[2].value = '';  // mengosongkan message
                messageSuccession.textContent = 'Pesan Anda telah terkirim';
                informationSuccession.textContent = response.messages;
                successionIcon[0].classList.remove('hidden');
                successionIcon[1].classList.add('hidden');
            }

        })
        .catch(() => {
            errorMessage();
            informationSuccession.textContent = 'Terdapat kesalahan pada pengiriman data';
        })
        .finally(() => {
            successionModal.classList.remove('hidden');
            loadingGif.classList.add('hidden');
        })
});

function scrollIntoView(tag) {
    const yOffset = -250;
    const y = tag.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function errorMessage() {
    messageSuccession.textContent = 'Pesan Anda gagal terkirim';
    successionIcon[0].classList.add('hidden');
    successionIcon[1].classList.remove('hidden');
}