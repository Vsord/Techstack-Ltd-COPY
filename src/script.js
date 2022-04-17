//Variables/////////////////////////
const buttonsClass = document.querySelector('.burger-line-container');
const dropDownList = document.querySelector('.dropdown-list');
const input = document.querySelector('.header-input');
input.addEventListener('input', searchArea);
const scrollToTopBtn = document.getElementById('scroll-to-top');
const preloader = document.querySelector('.preloader-container');
const inputSearchArea = document.getElementById('search-area');
////////////////////////////////////


////////////////// XML data request
const requstUrl = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
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
        xhr.send();
    });
};
//////////////////////////////////////


////////////// preloader + data request

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
///////////////////////////////////////

///////////// scroll to top button change

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
    document.getElementById('header-scroll-to')
        .scrollIntoView({
            behavior: 'smooth'
        });
};

//////////////////////////////////////////////

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

////////////////////////////////////////////////


// Search-input-area appearing/////////////////

function searchArea() {
    if (input.value === '') {
        inputSearchArea.style.display = 'none';
    } else {
        inputSearchArea.style.display = 'block';
    }
};
/////////////////////////////////////////////////
// Search input data by integers /////////////////////
input.oninput = function () {
    let val = this.value.trim();
    let searchInputItems = document.querySelectorAll('.active ul li');

    if (val !== '') {
        searchInputItems.forEach(function(elem) {
            if (elem.innerText.search(val) === -1) {
                elem.style.display = 'none'
            } else {
                elem.style.display = 'block'
            }
        });
    } else {
        searchInputItems.forEach(function(elem) {
            if (elem.innerText.search(val) === -1) {
                elem.style.display = 'none'
            }
        })
    }
}
