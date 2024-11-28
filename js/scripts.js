const nav = document.querySelector('.whiteHeader nav'),
    // contacts = document.querySelector('.contacts'),
    burger = document.querySelector('.hamburger'),
    flex1 = document.querySelector('.flex1')
burger.onclick = function(){
    burger.classList.toggle('hamburgerOpen')
    // contacts.classList.toggle('contactsOpen')
    nav.classList.toggle('navOpen')
    flex1.classList.toggle('flex1Open')
}