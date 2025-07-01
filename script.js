let buttons = document.querySelectorAll('.btn');

let calDisplay = document.querySelector('.calc-display');

buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        // btn ga click event qo'shamiz bu yerda click bo'lganda function ishga tushadi

        if ((calDisplay.textContent === "error" || calDisplay.textContent === "undefined") && btn.textContent !== "ac") {
            return;
        }

<<<<<<< Updated upstream
=======
        console.log(btn.textContent)
        // btn larni  ni console ga chiqaramiz

>>>>>>> Stashed changes

        if (btn.textContent === "ac") {

            calDisplay.textContent = '0';

            return;
        }

        if (btn.textContent === '=') {
<<<<<<< Updated upstream
            if (calDisplay.textContent === '0' || calDisplay.textContent === '') {
=======
            // agar = tugmasi bosilsa

            if(calDisplay.textContent === '0' || calDisplay.textContent === '') {
                // p qiymati 0 yoki bo'sh bo'lsa

>>>>>>> Stashed changes
                calDisplay.textContent = 'error';
                // p qiymatini error ga o'zgartiramiz

            } else {
                calDisplay.textContent = eval(calDisplay.textContent);
                // yoki p qiymatini eval orqali hisoblab chiqaramiz
            }
            return;
        }

<<<<<<< Updated upstream

        if (btn.textContent === '%') {
            try {
                calDisplay.textContent = eval(calDisplay.textContent) / 100;
            } catch {
                calDisplay.textContent = 'error';
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
=======
        if (calDisplay.textContent === '0') {
            // agar p 0 bo'lsa

            calDisplay.textContent = btn.textContent;
            // o'sha p ni btn.textContent ga o'zgartiramiz

        } else { //yoki
            calDisplay.textContent = calDisplay.textContent + btn.textContent;
            // p qiymati = p qiymatiga + btn.textContent ga o'zgartiramiz
        }

        if (calDisplay.textContent.length > 10) {
            // agar p uzunligi 12 dan katta bo‘lsa

            calDisplay.textContent = 'undefined';
            //kalkulatorga undefined yozuvini chiqaramiz

        } else if (calDisplay.textContent.length >= 9) {
            // agar p uzunligi 9 ga teng yoki 9 dan katta bo‘lsa

>>>>>>> Stashed changes
            calDisplay.style.fontSize = '3rem';
            // p ni yozuvini 3rem ga kichraytiramiz
        } else {
            calDisplay.style.fontSize = '4rem';
        }


    })
<<<<<<< Updated upstream
})



document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (/^F\d{1,2}$/.test(key)) {
        return;
    }
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

    if (key === '%') {
        try {
            calDisplay.textContent = eval(calDisplay.textContent) / 100;
        } catch {
            calDisplay.textContent = 'error';
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
=======
})
>>>>>>> Stashed changes
