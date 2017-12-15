var petLoginSection = document.getElementsByClassName('login-pet')[0];
var petRegisterSection = document.getElementsByClassName('register-pet')[0];
var walkerLoginSection = document.getElementsByClassName('login-walker')[0];
var walkerRegisterSection = document.getElementsByClassName('register-walker')[0];

var petLoginBtn = document.getElementsByClassName('home__buttons-pet__login-btn')[0];

var petRegisterBtn = document.getElementsByClassName('home__buttons-pet__register-btn')[0];

var walkerLoginBtn = document.getElementsByClassName('home__buttons-walker__login-btn')[0];

var walkerRegisterBtn = document.getElementsByClassName('home__buttons-walker__register-btn')[0];

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
