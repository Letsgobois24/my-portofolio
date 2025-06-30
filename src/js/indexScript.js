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
                scrollIntoView(validationMessage[1]);
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

function scrollIntoView(tag) {
    const yOffset = -250;
    const y = tag.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Import Firestore Module
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "IzaSyBiLRIhF20eUP4GpMsQlT5WV5cmasScAFY",
    authDomain: "myportofolio-65aed.firebaseapp.com",
    projectId: "myportofolio-65aed",
    storageBucket: "myportofolio-65aed.firebasestorage.app",
    messagingSenderId: "234953842468",
    appId: "1:234953842468:web:893cca114458d487141db1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Post Data to Firestore
async function setNewData(event) {
    event.preventDefault();

    showModal();

    const ref = collection(db, "MessagesList")
    const now = new Date();
    const timestamp = Timestamp.fromDate(now);

    await addDoc(
        ref, {
        Name: inputForm[0].value,
        Email: inputForm[1].value,
        Message: inputForm[2].value,
        CreatedAt : timestamp
    })
        .then(() => successMessage())
        .catch((error) => errorMessage(error))
        .finally(() => finallyMessage())
}


const showModal = () => {
    validationModal.classList.add('hidden');
    loadingGif.classList.remove('hidden');
}

const errorMessage = (error) => {
    messageSuccession.textContent = 'Pesan Anda gagal terkirim';
    informationSuccession.textContent = error;
    successionIcon[0].classList.add('hidden');
    successionIcon[1].classList.remove('hidden');
}

const successMessage = () => {
    inputForm[2].value = '';
    messageSuccession.textContent = 'Pesan Anda telah terkirim';
    informationSuccession.textContent = "Terimakasih telah menghubungi kami!";
    successionIcon[0].classList.remove('hidden');
    successionIcon[1].classList.add('hidden');
}

const finallyMessage = () => {
    successionModal.classList.remove('hidden');
    loadingGif.classList.add('hidden');
}

submitButton.addEventListener('click', setNewData);