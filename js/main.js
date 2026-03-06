document.addEventListener('DOMContentLoaded', () => {
    swiperSlider();
    tabs();
    arrowUp();
    burger();

});

//burger
function burger() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const headerContainer = document.querySelector('.top__wrap');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        headerContainer.classList.toggle('top__wrap_active');
    });
}

// arrow up
function arrowUp() {
    const arrow = document.querySelector('.arrow');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
            arrow.style.bottom = '70px';
        } else {
            arrow.style.bottom = '-200px';
        }
    });
}

// swiper
function swiperSlider() {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 300,
        autoplay: {
            delay: 3000,
        },
        effect: 'cube',
        cubeEffect: {
            slideShadows: false,
        },
        loop: true,  
    });
}

// tabs
function tabs() {  
    const tabNavItems = document.querySelectorAll('.tabs_button');  
    const tabItems = document.querySelectorAll('.tabs_body_items');  

    document.addEventListener('click', (e) => {  
        const targetElement = e.target;  

        if (targetElement.closest('.tabs_button')) {  
            let currentActiveIndex = null;  
            let newActiveIndex = null;  

            tabNavItems.forEach((tabNavItem, index) => {  
                if (tabNavItem.classList.contains('active')) {  
                    currentActiveIndex = index; 
                }  
                if (tabNavItem === targetElement) {  
                    newActiveIndex = index; 
                }  
            });  
 
            if (newActiveIndex !== currentActiveIndex) {   
                tabNavItems[currentActiveIndex].classList.remove('active');  
                tabItems[currentActiveIndex].classList.remove('active');  

                setTimeout(() => {  
                    tabItems[currentActiveIndex].style.display = 'none'; 
                }, 0); 

                tabNavItems[newActiveIndex].classList.add('active');  
                tabItems[newActiveIndex].style.display = 'flex';
                setTimeout(() => {  
                    tabItems[newActiveIndex].classList.add('active');
                }, 30); 
            }  
        }  
    });  
}