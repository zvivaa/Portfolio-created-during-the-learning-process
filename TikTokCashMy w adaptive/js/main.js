const openPopUp = document.getElementById('open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const popUpBody = document.getElementById('pop-up-body')
const changePopUp = document.getElementById('btn-deposite');
const hidePopUP = document.getElementById('vvod');
const showPopUP = document.getElementById('select-wrapper');
const backPopUP = document.getElementById('pop-up-back')
const selectPopUP = document.getElementById('select');
const showSelect = document.getElementById('select-body');


const openPopUp2 = document.getElementById('open-pop-up2');
const popUp2 = document.getElementById('pop-up2');
const popUpBody2 = document.getElementById('pop-up-body2')
const closePopUp2 = document.getElementById('pop-up-close2');


openPopUp.addEventListener('click', () => {
    popUp.classList.add('active');
    popUpBody.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    hidePopUP.classList.remove('hide');
    showPopUP.classList.remove('active');
    backPopUP.classList.remove('active');
})

changePopUp.addEventListener('click', () => {
    hidePopUP.classList.add('hide');
    showPopUP.classList.add('active');
    backPopUP.classList.add('active');
})

backPopUP.addEventListener('click', () => {
    hidePopUP.classList.remove('hide');
    showPopUP.classList.remove('active');
    backPopUP.classList.remove('active');
})

selectPopUP.addEventListener('click', () =>{
    showSelect.classList.add('active');
})

selectPopUP.addEventListener('click', () =>{
    showSelect.classList.remove('active');
})



openPopUp2.addEventListener('click', () => {
    popUp2.classList.add('active');
    popUpBody2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
})

