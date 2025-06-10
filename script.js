const buttons = document.querySelectorAll('.btn');
const calDisplay = document.querySelector('.calDisplay');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
        if (btn.textContent === 'ac') {
            calDisplay.textContent = '0';
            return;
        }

        if (calDisplay.textContent === '0') {
            calDisplay.textContent = btn.textContent;
            return;
        } else {
            calDisplay.textContent = calDisplay.textContent + btn.textContent;
        }
        // calDisplay.textContent = btn.textContent
    })
})