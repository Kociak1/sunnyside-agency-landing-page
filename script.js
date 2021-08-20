const openmenu = document.querySelector('#openmenu')
const menu = document.querySelector('#menu')

openmenu.addEventListener('click', () => {
    menu.classList.toggle('open')
    openmenu.classList.toggle('open')
})