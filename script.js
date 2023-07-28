const inputBoxes = document.querySelectorAll('.bill-div');
const custom = document.querySelector('#custom');
const inputs = document.querySelectorAll('input');
const redAlert = document.querySelector('.red-alert');
let tipAmount = document.querySelector('.tip-amount');
let total = document.querySelector('.total');
let billInpt = document.querySelector('#bill');
let people = document.querySelector("#people");
const btns = document.querySelectorAll('.tip, .cust');
const reset = document.querySelector('.reset')


inputBoxes.forEach(inputDv => {

    inputs.forEach(input => {

        input.addEventListener('focus', (e) => {
            input.parentElement.classList.add('active')
            input.classList.add('active')
        })
        input.addEventListener('blur', (e) => {
            input.parentElement.classList.remove('active')
            input.classList.remove('active')

        })
        function valid() {
            if (people.value == 0) {
                redAlert.textContent = "Can't be zero"
                people.parentElement.style.borderColor = '#E17052';

            }
            else {
                redAlert.textContent = ""
                inputDv.style.borderColor = '';
            }

            resetFunc();
        }
        people.addEventListener('input', valid);
        resetFunc();
    });

});

people.addEventListener('input', calc)
billInpt.addEventListener('input', calc)

btns.forEach(btnex => {
    btnex.addEventListener('click', () => {
        document.querySelector('.ac')?.classList.remove('ac');
        btnex.classList.add('ac');

    })


    custom.addEventListener('input', () => {
        var n = billInpt.value;
        var p = people.value;
        let resultCustomAmount = n * (custom.value / 100) / p;
        let resultCustomTotal = (n / 1 + n * (custom.value / 100)) / p;

        tipAmount.textContent = `$${resultCustomAmount.toFixed(2)}`;
        total.textContent = `$${resultCustomTotal.toFixed(2)}`;


    })


})


function resetAll() {
    tipAmount.textContent = `$0`;
    total.textContent = `$0`;
    document.querySelector('.ac')?.classList.remove('ac');
    billInpt.value = '';
    people.value = '';
    custom.value = '';

}

function resetFunc() {

    if (billInpt.value === '' && custom.value === '' && people.value === '') {
        reset.disabled = true;
        reset.classList.add('resetAlll');
    }
    else {
        reset.disabled = false;
        reset.classList.remove('resetAlll')
    }

}


function calc() {

    btns.forEach(btn => {

        if (btn.classList.contains('ac')) {

            var n = billInpt.value;
            var p = people.value;
            let resultAmount = n * (btn.value / 100) / p;
            let resultTotal = (n / 1 + n * (btn.value / 100)) / p;

            tipAmount.textContent = `$${resultAmount.toFixed(2)}`;
            total.textContent = `$${resultTotal.toFixed(2)}`;

            console.log(btn.value);

        }
        else {
            btn.addEventListener('click', () => {
                var n = billInpt.value;
                var p = people.value;
                let resultAmount = n * (btn.value / 100) / p;
                let resultTotal = (n / 1 + n * (btn.value / 100)) / p;

                tipAmount.textContent = `$${resultAmount.toFixed(2)}`;
                total.textContent = `$${resultTotal.toFixed(2)}`;

                console.log(btn.value);
            })
        }
    });




}





