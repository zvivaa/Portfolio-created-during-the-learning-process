let select = function () {
    let selectHeader = document.querySelectorAll('.select-headerindex');
    let selectItem = document.querySelectorAll('.select-item');
    let selectClose = document.querySelectorAll('.select-body2')

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
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
            select = this.closest('.select');
        currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
    
    function selectChoose2() {
        let text = this.innerText;
            select = this.closest('.select');
        currentText = select.querySelector('.select-current');
        select.classList.remove('is-active');
    }

};


select();