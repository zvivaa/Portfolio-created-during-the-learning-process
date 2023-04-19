let select = function () {
    let selectHeader1 = document.querySelectorAll('.lkname');
    let selectItem1 = document.querySelectorAll('.lkname-select');
    let selectClose1 = document.querySelectorAll('.lkname-box')

    selectHeader1.forEach(item => {
        item.addEventListener('click', selectToggled)
    });

    selectItem1.forEach(item => {
        item.addEventListener('click', selectChoosed)
    });

    selectClose1.forEach(item => {
        item.addEventListener('click', selectChoosed2)
    });

    function selectToggled() {
        this.parentElement.classList.toggle('is-active_lk');
    }

    function selectChoosed() {
        let text = this.innerText;
            select = this.closest('.lkname');
        currentText = select.querySelector('.lkname-box');
        currentText.innerText = text;
        select.classList.remove('is-active_lk');
    }
    
    function selectChoosed2() {
        let text = this.innerText;
            select = this.closest('.lkname');
        currentText = select.querySelector('.lkname-box');
        select.classList.remove('is-active_lk');
    }

};


select();