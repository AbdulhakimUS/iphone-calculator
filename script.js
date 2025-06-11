let buttons = document.querySelectorAll('.btn');

let calDisplay = document.querySelector('.calc-display');

buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        if ((calDisplay.textContent === "error" || calDisplay.textContent === "undefined") && btn.textContent !== "ac") {
            return;
        }


        if (btn.textContent === "ac") {

            calDisplay.textContent = '0';

            return;
        }

        if (btn.textContent === '=') {
            if (calDisplay.textContent === '0' || calDisplay.textContent === '') {
                calDisplay.textContent = 'error';
            } else {
                calDisplay.textContent = eval(calDisplay.textContent);
            }
            return;
        }

        let lastItem = calDisplay.textContent.slice(-1);
        let operators = ['+', '-', '/', '*', '.', '%', '+/-'];

        if (operators.includes(lastItem) && operators.includes(btn.textContent)) {
            return;
        }

        if (calDisplay.textContent === '0') {
            calDisplay.textContent = btn.textContent;
        } else {
            calDisplay.textContent = calDisplay.textContent + btn.textContent;
        }

        if (calDisplay.textContent.length > 9) {
            calDisplay.textContent = 'undefined';
        } else if (calDisplay.textContent.length >= 8) {
            calDisplay.style.fontSize = '3rem';
        } else {
            calDisplay.style.fontSize = '4rem';
        }


    })
})



document.addEventListener("keydown", (event) => {
    let key = event.key; 

    if ((calDisplay.textContent === "error" || calDisplay.textContent === "undefined") && key !== "Escape") {
        return;
    }

    if (key === "Escape") { 
        calDisplay.textContent = "0";
        return;
    }

    if (key === "Enter") { 
        if (calDisplay.textContent === "0" || calDisplay.textContent === "") {
            calDisplay.textContent = "error";
        } else {
            calDisplay.textContent = eval(calDisplay.textContent);
        }
        return;
    }

    let operators = ['+', '-', '/', '*', '.', '%',];

    if (operators.includes(key) || /\d/.test(key)) { 
        let lastItem = calDisplay.textContent.slice(-1);

        if (operators.includes(lastItem) && operators.includes(key)) {
            return;
        }

        if (calDisplay.textContent === "0") {
            calDisplay.textContent = key;
        } else {
            calDisplay.textContent += key;
        }
    }

    if (calDisplay.textContent.length > 9) {
        calDisplay.textContent = "undefined";
    } else if (calDisplay.textContent.length >= 8) {
        calDisplay.style.fontSize = "3rem";
    } else {
        calDisplay.style.fontSize = "4rem";
    }
});
