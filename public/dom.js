var petLoginSection = document.getElementsByClassName('login-pet')[0];
var petRegisterSection = document.getElementsByClassName('register-pet')[0];
var walkerLoginSection = document.getElementsByClassName('login-walker')[0];
var walkerRegisterSection = document.getElementsByClassName('register-walker')[0];

var petLoginBtn = document.getElementsByClassName('home__buttons-pet__login-btn')[0];

var petRegisterBtn = document.getElementsByClassName('home__buttons-pet__register-btn')[0];

var walkerLoginBtn = document.getElementsByClassName('home__buttons-walker__login-btn')[0];

var walkerRegisterBtn = document.getElementsByClassName('home__buttons-walker__register-btn')[0];


var registerPetPasswordOne = document.getElementById('petregisterpasswordinput');
var registerPetPasswordTwo = document.getElementById('petregisterconfirmpasswordinput');
var registerPetBtn = document.getElementById('petregistersubmit');
var registerPetDisplayError = document.getElementsByClassName('register-pet__form__displayError')[0];
var registerPetDisplayErrorTwo = document.getElementsByClassName('register-pet__form__displayError')[1];

var registerWalkerPasswordOne = document.getElementById('walkerregisterpasswordinput');
var registerWalkerPasswordTwo = document.getElementById('walkerregisterconfirmpasswordinput');
var registerWalkerBtn = document.getElementById('walkerregistersubmit');
var registerWalkerDisplayError = document.getElementsByClassName('register-walker__form__displayError')[0];
var registerWalkerDisplayErrorTwo = document.getElementsByClassName('register-walker__form__displayError')[1];

var sections = [
    petLoginSection,
    petRegisterSection,
    walkerLoginSection,
    walkerRegisterSection
]

function toggleForms(sections, sectionToShow) {
    sections.forEach(function(section) {
         section === sectionToShow ? section.classList.add('showForm') : section.classList.remove('showForm');
    })
}

petLoginBtn.addEventListener("click", function() {

     toggleForms(sections, petLoginSection);
})

petRegisterBtn.addEventListener("click", function() {
    toggleForms(sections, petRegisterSection);
})

walkerLoginBtn.addEventListener("click", function() {
     toggleForms(sections, walkerLoginSection);
})

walkerRegisterBtn.addEventListener("click", function() {
    toggleForms(sections, walkerRegisterSection);
})

function checkPasswordMatch(password1, password2, displayError, submitBtn) {
  if (password1.value !== password2.value) {
    displayError.classList.add('showError');
    submitBtn.disabled = true;
  } else {
    displayError.classList.remove('showError');
    submitBtn.disabled = false;
  }
}

registerPetPasswordTwo.addEventListener('keyup', function(){
  checkPasswordMatch(registerPetPasswordOne,registerPetPasswordTwo, registerPetDisplayError, registerPetBtn);
})

registerWalkerPasswordTwo.addEventListener('keyup', function(){
  checkPasswordMatch(registerWalkerPasswordOne,registerWalkerPasswordTwo, registerWalkerDisplayError, registerWalkerBtn);
})

function strongPassword(passwordInput, displayError, submitBtn){
  var regex = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$');
  if(!regex.test(passwordInput.value)){
    displayError.classList.add('showError');
    submitBtn.disabled = true;
  } else{
    displayError.classList.remove('showError');
    submitBtn.disabled = false;
  }
}

registerWalkerPasswordOne.addEventListener('keyup', function(){
  strongPassword(registerWalkerPasswordOne, registerWalkerDisplayErrorTwo, registerWalkerBtn);
})

registerPetPasswordOne.addEventListener('keyup', function(){
  strongPassword(registerPetPasswordOne, registerPetDisplayErrorTwo, registerPetBtn);
})
