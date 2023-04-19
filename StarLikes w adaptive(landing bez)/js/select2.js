let select = function () {
    let selectHeader = document.querySelectorAll('.open-nav_button');
    let selectItem = document.querySelectorAll('.navbutton');
    let selectClose = document.querySelectorAll('.navbutton_open')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    selectClose.forEach(item => {
        item.addEventListener('click', selectChoose2)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active_open');
    }

    function selectChoose() {
        let text = this.innerText;
            select = this.closest('.buttonopen');
        currentText = select.querySelector('.navbutton_open');
        currentText.innerText = text;
        select.classList.remove('is-active_open');
    }
    
    function selectChoose2() {
        let text = this.innerText;
            select = this.closest('.buttonopen');
        currentText = select.querySelector('.navbutton_open');
        select.classList.remove('is-active_open');
    }

};


select();