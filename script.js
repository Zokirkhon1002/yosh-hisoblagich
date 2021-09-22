const oylar = [31,28,31,30,31,30,31,31,30,31,30,31];

var son = 1;
if (son == 1) {
  window.oncontextmenu = function (e) {
    son++;
   if(son === 3){ 
     alert('uzr, sizni chiqarib yubordik!') 
   }
    else if(son === 2) {
      alert(`sichqonchani o'ng tomonini bosdingiz \n iltimos bu ishni qilmang. \n keyingi safar chiqarilib yuborilasiz!`);
    }
    else {
     return son === 3? window.close() : e.preventDefault();
    }
    
  };
}


function nameSpeaker() {
      let inputName = document.querySelector(".js");
        const firstName = inputName.value;
        const Speech = new SpeechSynthesisUtterance(firstName);
        Speech.volume = 2;
        Speech.rate = 1;
        Speech.pitch = 2;

        window.speechSynthesis.speak(Speech);
        event.preventDefault();
      }

function yoshHisoblagich() {
    let bugun = new Date(),
        inputDate = new Date(document.getElementById("date-input").value),
        birthMonth,
        birthDate,
        birtYear,
        birthDetails = {
            date: inputDate.getDate(),
            month: inputDate.getMonth()+1,
            year: inputDate.getFullYear()
        };

    let hozirgiYil = bugun.getFullYear(),
        hozirgiOy = bugun.getMonth()+1,
        hozirgiSana = bugun.getDate();

        kabisaYil(hozirgiYil);

        const { date, month, year } = birthDetails; // destructing qilib oldik, (birthDetails) so'zni takrorlamaslik uchun
        if(
            year > hozirgiYil ||
            (month > hozirgiOy && year == hozirgiYil) ||
            (date > hozirgiSana && month == hozirgiOy && year == hozirgiYil)
        ) {
                alert(`Siz hali tug'ilmagansiz`);
                return;
            }

        birtYear = hozirgiYil - year;

        if(hozirgiOy >= month){
            birthMonth = hozirgiOy - month;
        }
        else {
            birtYear--;
            birthMonth = 12 + hozirgiOy - month;
        }


        if(hozirgiSana >= date){
            birthDate = hozirgiSana - date;
        }
        else {
            birthMonth--;
            let kunlar = oylar[hozirgiOy - 2];
            birthDate = kunlar + hozirgiSana - date;
            if(birthMonth < 0){
                birthMonth = 11;
                birtYear--;
            }
        }
        displayResult(birthDate,birthMonth,birtYear); // natijani shu funksiya orqali chiqaramiz
}

// natijani shu funksiya orqali chiqaramiz
function displayResult(bDate, bMonth, bYear){

    let inputName = document.querySelector(".js").value;
    let inputDate = new Date(document.getElementById("date-input").value);

    if(inputName.length == 0){
        alert(`Ismingizni kiritmadingiz`);
        return;
    }
    console.log(inputDate);
    if(inputDate == 'Invalid Date'){
        alert(`Tug'ilgan sanangizni kiritmadingiz`);
        return;
    }
      

      
    document.getElementById("yil").textContent = bYear;
    document.getElementById("oy").textContent = bMonth;
    document.getElementById("kun").textContent = bDate;
    document.getElementById("nameOutput").style.opacity = '1';
    document.getElementById("nameOutput").textContent = inputName;
}



// 4-yilda fevral 29 bo'ladi, shuni to'g'irlab oldik.
function kabisaYil(yil){
    if(yil % 4 == 0 || (yil % 100 == 0 && yil % 400 == 0)) {
        oylar[1] = 29;
    }
    else {
        oylar[1] = 28;
    }
}
