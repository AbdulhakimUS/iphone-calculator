let buttons = document.querySelectorAll('.btn');
// buttons ni document dan .btn classi orqali chaqirib olamiz

let calDisplay = document.querySelector('.calDisplay');
// calculator yozuvini chiqaradigan p ni chaqiryapmiz 

buttons.forEach((btn)=> {
    // buttons ni forEach orqali har bir elementni btn nomi ga beramiz

    btn.addEventListener('click', ()=> {
    // btn ga click event qo'shamiz bu yerda click bo'lganda function ishga tushadi

        console.log(btn.textContent)
    // btn larni  ni console ga chiqaramiz


        if ( btn.textContent === "ac"){
            // agar ac tugmasi bosilsa

            calDisplay.textContent = '0';
            // p ni 0 ga o'zgartiramiz

            return;
        }


        if(calDisplay.textContent === '0'){
            // agar p 0 bo'lsa
            calDisplay.textContent  = btn.textContent;
            // o'sha p ni btn.textContent ga o'zgartiramiz
        }else{ //yoki
            calDisplay.textContent = calDisplay.textContent + btn.textContent;
            // p qiymati = p qiymati + btn.textContent ga o'zgartiramiz
        }

        if (calDisplay.textContent.length > 10) {
            // agar p uzunligi 12 dan katta bo‘lsa
            calDisplay.textContent = ' undefined';
        } else if (calDisplay.textContent.length >= 9) {
            // agar p uzunligi 9 ga teng yoki 9 dan katta bo‘lsa
            calDisplay.style.fontSize = '3rem';
        } else {
<<<<<<< Updated upstream
            // qolgan oddiy hollarda
=======
            // qolgan oddiy hollardaaz
>>>>>>> Stashed changes
            calDisplay.style.fontSize = '4rem';
        }
    })
})
