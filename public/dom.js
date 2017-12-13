var petLoginSection = document.getElementsByClassName('login-pet')[0];
var petRegisterSection = document.getElementsByClassName('register-pet')[0];
var walkerLoginSection = document.getElementsByClassName('login-walker')[0];
var walkerRegisterSection = document.getElementsByClassName('register-walker')[0];

var petLoginBtn = document.getElementsByClassName('home__buttons-pet__login-btn')[0];

var petRegisterBtn = document.getElementsByClassName('home__buttons-pet__register-btn')[0];

var walkerLoginBtn = document.getElementsByClassName('home__buttons-walker__login-btn')[0];

var walkerRegisterBtn = document.getElementsByClassName('home__buttons-walker__register-btn')[0];


petLoginBtn.addEventListener("click", function() {
    walkerLoginSection.classList.remove('showForm');
    petRegisterSection.classList.remove('showForm');
    walkerRegisterSection.classList.remove('showForm');
    petLoginSection.classList.add('showForm');
})

petRegisterBtn.addEventListener("click", function() {
  petRegisterSection.classList.add('showForm');
  walkerLoginSection.classList.remove('showForm');
  petLoginSection.classList.remove('showForm');
  walkerRegisterSection.classList.remove('showForm');
})

walkerLoginBtn.addEventListener("click", function() {
  petRegisterSection.classList.remove('showForm');
  walkerLoginSection.classList.add('showForm');
  petLoginSection.classList.remove('showForm');
  walkerRegisterSection.classList.remove('showForm');
})

walkerRegisterBtn.addEventListener("click", function() {
  petRegisterSection.classList.remove('showForm');
  walkerLoginSection.classList.remove('showForm');
  petLoginSection.classList.remove('showForm');
  walkerRegisterSection.classList.add('showForm');
})
