/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/indexScript.js":
/*!*******************************!*\
  !*** ./src/js/indexScript.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst contactForm = document.getElementById('contact-form');\r\nconst inputForm = contactForm.querySelectorAll('input, textarea');\r\nconst validationMessage = contactForm.getElementsByTagName('span');\r\n\r\nconst submission = document.getElementById('submission');\r\n\r\nconst validationModal = submission.querySelector('#validation');\r\nconst submitButton = validationModal.querySelector('#submit-button');\r\nconst successionModal = submission.querySelector('#succession');\r\n\r\nconst closeButton = submission.querySelectorAll('.close-button');\r\ncloseButton.forEach(button => {\r\n    button.addEventListener('click', function () {\r\n        submission.classList.add('hidden');\r\n    });\r\n});\r\n\r\nconst loadingGif = submission.querySelector('#loading');\r\nconst successionIcon = successionModal.getElementsByTagName('svg');\r\nconst messageSuccession = successionModal.querySelector('h4');\r\nconst informationSuccession = successionModal.querySelector('p');\r\n\r\ncontactForm.querySelector('button').addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n\r\n    // Cek jika input kosong\r\n    for (let index = 0; index < inputForm.length; index++) {\r\n        if (inputForm[index].value.trim() == '') {\r\n            validationMessage[index].classList.remove('hidden');\r\n            scrollIntoView(validationMessage[index]);\r\n            return\r\n        } else validationMessage[index].classList.add('hidden');\r\n\r\n        // Cek kevalidan email\r\n        if (index == 1) {\r\n            if (!isValidEmail(inputForm[1].value)) {\r\n                validationMessage[1].classList.remove('hidden');\r\n                validationMessage[1].textContent = 'Email tidak valid';\r\n                return\r\n            } else if ((inputForm[1].value.trim() == '')) {\r\n                validationMessage[1].textContent = 'Tolong, isikan email Anda!';\r\n                scrollIntoView(validationMessage[1]);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Show Modal\r\n    submission.classList.remove('hidden');\r\n    validationModal.classList.remove('hidden')\r\n    successionModal.classList.add('hidden');\r\n})\r\n\r\n// Post Form\r\nsubmitButton.addEventListener('click', function () {\r\n    validationModal.classList.add('hidden');\r\n    loadingGif.classList.remove('hidden');\r\n\r\n    fetch(\"https://rymalfarizi.rf.gd/apicontact\", {\r\n        method: \"POST\",\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        },\r\n        body: JSON.stringify({\r\n            name: inputForm[0].value || \"\",\r\n            email: inputForm[1].value || \"\",\r\n            message: inputForm[2].value || \"\"\r\n        })\r\n    })\r\n        .then(response => response.json())\r\n        .then(response => {\r\n            console.log(response)\r\n            if (response.status == 400) {\r\n                errorMessage();\r\n                firstKey = Object.keys(response.messages)[0]\r\n                informationSuccession.textContent = response.messages[firstKey];\r\n            } else if (response.status == 429) {\r\n                console.log(response)\r\n            } else {\r\n                inputForm[2].value = '';  // mengosongkan message\r\n                messageSuccession.textContent = 'Pesan Anda telah terkirim';\r\n                informationSuccession.textContent = response.messages;\r\n                successionIcon[0].classList.remove('hidden');\r\n                successionIcon[1].classList.add('hidden');\r\n            }\r\n\r\n        })\r\n        .catch(() => {\r\n            errorMessage();\r\n            informationSuccession.textContent = 'Terdapat kesalahan pada pengiriman data';\r\n        })\r\n        .finally(() => {\r\n            successionModal.classList.remove('hidden');\r\n            loadingGif.classList.add('hidden');\r\n        })\r\n});\r\n\r\nfunction scrollIntoView(tag) {\r\n    const yOffset = -250;\r\n    const y = tag.getBoundingClientRect().top + window.pageYOffset + yOffset;\r\n\r\n    window.scrollTo({ top: y, behavior: 'smooth' });\r\n}\r\n\r\nfunction isValidEmail(email) {\r\n    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return regex.test(email);\r\n}\r\n\r\nfunction errorMessage() {\r\n    messageSuccession.textContent = 'Pesan Anda gagal terkirim';\r\n    successionIcon[0].classList.add('hidden');\r\n    successionIcon[1].classList.remove('hidden');\r\n}\n\n//# sourceURL=webpack://my-portofolio/./src/js/indexScript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/indexScript.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;