

function changeText(){
    const wysokoscSkrola = window.scrollY;

    const wysokoscSekcji1 = document.querySelector(".section1").clientHeight;
    const wysokoscSekcji2 = document.querySelector(".section2").clientHeight;
    const wysokoscSekcji3 = document.querySelector(".section3").clientHeight;
    const wysokoscSekcji4 = document.querySelector(".section4").clientHeight;

    const odlegloscOdPoczatkuSekcji1 = document.querySelector(".section1").offsetTop;
    const odlegloscOdPoczatkuSekcji2 = document.querySelector(".section2").offsetTop;
    const odlegloscOdPoczatkuSekcji3 = document.querySelector(".section3").offsetTop;
    const odlegloscOdPoczatkuSekcji4 = document.querySelector(".section4").offsetTop;
    
    const info = document.querySelector(".info");
    if(wysokoscSkrola < wysokoscSekcji1){
        info.textContent = "Sekcja 1";
    }
    else if(wysokoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2)
    {
        info.textContent = "Sekcja 2";
    }
    else if(wysokoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3)
    {
        info.textContent = "Sekcja 3";
    }
    else{
        info.textContent = "Sekcja 4"; 
    }

}

window.addEventListener("scroll",changeText);
