const swiper = new Swiper('.swiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	speed: 600,

	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	loop: false,

	keyboard: {
		enabled: true,
	},

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: false,
		reverseDirection: false,
	},
	breakpoints: {
		768: {
		  slidesPerView: 2,
		  spaceBetween: 20,
		},
		1000: {
			slidesPerView: 'auto',
			spaceBetween: 0,
		  },
	  }
});
