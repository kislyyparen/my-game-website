// МОБИЛЬНОЕ МЕНЮ
const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
// Открыть меню
if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        burgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку
    });
}
    
// Закрыть меню
if (mobileNavClose) {
     mobileNavClose.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    });
}
    
// Закрыть меню при клике на ссылку
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    });
});
    
// Услуги всплывающие окна
const serviceButtons = document.querySelectorAll('.details-btn');
const serviceModals = document.querySelectorAll('.modal[data-type="service"], #modal1, #modal2, #modal3, #modal4');
const closeServiceButtons = document.querySelectorAll('.close-modal');

serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

closeServiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

serviceModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
           }
    });
});

// Увеличение картинок 
const galleryImages = document.querySelectorAll('.imgGaleryContainerItem img');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('#lightboxModal .close');

if (galleryImages.length > 0 && lightboxModal) {
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxModal.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });

    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = 'none';
        }
    });
}

const day2 = document.getElementById('dh2');
const day3 = document.getElementById('dh3');
const day4 = document.getElementById('dh4');
const day5 = document.getElementById('dh5');

function getdays() {
    const today = new Date();

    for (let i = 2; i <= 5; i++) {
        const element = document.getElementById('dh' + i);
        
        if (element) {
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + (i - 1));

            const options = { day: 'numeric', month: 'long' };
            element.textContent = futureDate.toLocaleDateString('ru-RU', options);
        }
    }
}


  



