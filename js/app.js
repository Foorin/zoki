let button = document.getElementById('showAllCats')
let cats = document.getElementById('hiddenCats')
button.addEventListener('click', showAllFeedbacks)
function showAllFeedbacks(){
    cats.classList.remove('hidden');
    button.classList.add('hidden')
}

function updateMenuVisibility() {
    const menu = document.querySelector('.menu');
    const burgerMenu = document.getElementById('menuBurger')
    const burger = document.querySelector('.burger');
    const sliderCat = document.querySelector('.sliderCat')

    burger.addEventListener('click', () =>{
        menuBurger.classList.toggle('show');
    })

    if (window.innerWidth >= 300 && window.innerWidth <= 900) {
        menu.classList.add('hidden');
        burger.classList.remove('hidden');
        sliderCat.classList.remove('hidden');
    } else {
        menu.classList.remove('hidden');
        burger.classList.add('hidden');
        sliderCat.classList.add('hidden');
    }
}

// Проверяем размер окна при загрузке страницы
updateMenuVisibility();

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', updateMenuVisibility);


let currentIndex = 0
function showSlide(index){
    const slides = document.querySelector('.slides');

    const totalSlides = slides.children.length;

    if(index>=totalSlides) {
        currentIndex = 0;
    }
    else if (index<0){
        currentIndex = totalSlides -1;
    }
    else{
        currentIndex = index;
    }

    const offset = -currentIndex *100;
    slides.style.transform = "translateX(" + offset + "%)";

}
function changeSlide(direction){
    showSlide(currentIndex + direction);
}

showSlide(currentIndex);


let currentCatIndex = 0
function showSlideCat(index){
    const slidesCat = document.querySelector('.slidesCat');

    const totalCatSlides = slidesCat.children.length;

    if(index>=totalCatSlides) {
        currentCatIndex = 0;
    }
    else if (index<0){
        currentCatIndex = totalCatSlides -1;
    }
    else{
        currentCatIndex = index;
    }

    const offset = -currentCatIndex *100;
    slidesCat.style.transform = "translateX(" + offset + "%)";

}
function changeSlideCat(direction){
    showSlideCat(currentCatIndex + direction);
}

showSlideCat(currentCatIndex);