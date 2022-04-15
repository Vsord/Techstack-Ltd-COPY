const buttonsClass = document.querySelector('.burger-line-container');
const dropDownList = document.querySelector('.dropdown-list');
const input = document.querySelector('.header-input');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const preloader = document.querySelector('.preloader-container');

// XML data request
const requstUrl = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';
        // xhr.setRequestHeader('Content-Type','application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        // xhr.send(JSON.stringify(body));
        xhr.send();
    });
};
// const body = {
//     name: 'Stanislav',
//     age: 23
// }
//
// sendRequest('GET', requstUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// preloader + data request

function preloaderData() {
    setTimeout(() => {
        sendRequest('GET', requstUrl)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 2000)
};
preloaderData();


// scroll to top button change
window.onscroll = function () {
    ScrollToTop()
};

function ScrollToTop() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

function topFunction() {
    document.documentElement.scrollTop = 0;
};

// Burger menu
function changeBurgerLines() {
    buttonsClass.classList.toggle('changed');
    dropDownList.classList.toggle('change');
};

// Input change
function changeInput() {
    input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            return input.value = '';
        }
    })
};





// function changeToTopButton() {
//     if (window.screen.width < 301) {
//       scrollToTopBtn.innerText = 'fff'
//     }
// };
// changeToTopButton();

