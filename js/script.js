
$(document).ready(function () {
	setTimeout(() => {
		$('body').addClass('visiblle');
		$('.preloader').addClass('translateToLeft');
		// $('.header').addClass('translateToLeft');
	}, 3000); 

	
	
	  $('.menu-toggler').on('click', function () {
	  $(this).toggleClass('open');
	  $('.navigation').toggleClass('open');
	  $('.header__menu').toggleClass('open');
	  $('.header__menu .button').toggleClass('open');
	  $('.navigation .button').toggleClass('open2');
	  $('.navigation .contact-mobile').toggleClass('open');
	  
	  
	  
	});
	$('.nav-list_link').on('click', function () {
	  $('.menu-toggler').removeClass('open');
	  $('.navigation').removeClass('open');
	  $('.header__menu').removeClass('open');
	  $('.navigation .button').removeClass('open2');
	  $('.navigation .contact-mobile').removeClass('open');
	});
	$('.navigation .button').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.navigation').removeClass('open');
		$('.header__menu').removeClass('open');
		$('.header__menu .button').removeClass('open');
		$('.navigation .button').removeClass('open2');
		$('.navigation .contact-mobile').removeClass('open');
	  });
	 $('.writetUs-mobile__icons_icon').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.navigation').removeClass('open');
		$('.header__menu').removeClass('open');
		$('.header__menu .button').removeClass('open');
		$('.navigation .button').removeClass('open2');
		$('.navigation .contact-mobile').removeClass('open');
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop()){
			$('.menu').addClass('menu-move');
		}
		else{
			$('.menu').removeClass('menu-move');
		}
	});
	
  });

  // tel picker
// swiper1
const swiper = new Swiper('.feedback-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor:true,
	slidesPerView: 4,
	spaceBetween: 15,
	
	breakpoints: {
		310: {
			slidesPerView: 1.25,
		  //   spaceBetween: 20
		  },
		// when window width is >= 370px
		370: {
		  slidesPerView: 1.4,
		//   spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 1.5,
		//   spaceBetween: 30
		},
		// when window width is >= 640px
		769: {
			slidesPerView: 2.4,
		  //   spaceBetween: 40
		  },
		1000: {
			slidesPerView: 3.3,
		  //   spaceBetween: 40
		  },
		1200: {
			slidesPerView: 4,
		  //   spaceBetween: 40
		  }
		
	  }
  
  });

  // swiper2
const swiper2 = new Swiper('.review-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// slidesPerView: 2.58,
	// spaceBetween: 15,
	grabCursor:true,
	centeredSlides:true,
	// slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
	  rotate: 0,
	  slideShadows: true,
	  stretch:0,
	  depth:100,
	  modifier: 2,
	},

		// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	 prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		310: {
			slidesPerView: 1.02,
		  //   spaceBetween: 20
		  },
		// when window width is >= 370px
		370: {
		  slidesPerView: 1.02,
		//   spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 1.1,
		//   spaceBetween: 30
		},
		// when window width is >= 640px
		769: {
			slidesPerView: 1.8,
		  //   spaceBetween: 40
		  },
		1000: {
			slidesPerView: 2,
		  //   spaceBetween: 40
		  },
		1200: {
			slidesPerView: 2.58,
		  //   spaceBetween: 40
		  }
		
	  }
  
  });

// validation
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validationName (){
	var name = document.getElementById('name');
	var nameValue = name.value;

	if(nameValue != ''){
		name.style.border = '1px solid #00ff00';
		name.style.boxShadow = ' 0px 0px 5px #00ff00';
	}
	else{
		name.style.border = '1px solid #ddd';
		name.style.boxShadow = ' 0px 0px 0px #ddd';
	}
}

function validationEmail (){	
	var email = document.getElementById('email');
	var emailValue = email.value;

	if(emailValue.match(pattern)){
		email.style.border = '1px solid #00ff00';
		email.style.boxShadow = ' 0px 0px 5px #00ff00';
	}
	else{
		email.style.border = '1px solid #ff0000';
		email.style.boxShadow = ' 0px 0px 5px #ff0000';
	}

	if(emailValue == ''){
		email.style.border = '1px solid #ddd';
		email.style.boxShadow = ' 0px 0px 0px #ddd';
	}
}

// phone val
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
//   hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  preferredCountries: ['ua', 'us'],
  separateDialCode: true,
  utilsScript: "js/utils.js",
});

var input = document.querySelector("#phone2");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
//   hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  preferredCountries: ['ua', 'us'],
  separateDialCode: true,
  utilsScript: "js/utils.js",
});



















// popup
const openPopup = document.querySelector('.openPopup');
const closePopup = document.querySelector('#closePopup');
// if (openPopups > 0){
// 	for (let index = 0; index < openPopups.length; index++) {
// 		const openPopup = openPopups[index];
		
// 	}
// }


let popup =  document.querySelector('#popup');
let body =  document.querySelector('body');
// 
openPopup.addEventListener('click', function(){
	popup.classList.add('openPopup');
	 body.classList.add('fadeBody');
})

closePopup.addEventListener('click', function(){
	popup.classList.remove('openPopup');
	 body.classList.remove('fadeBody');
})





// animation
gsap.from('.header', {opacity: 0, duration: 4, x: -700});	
gsap.from('.dollar2, .dollar', {opacity: 0, duration: 4, x: -700});
gsap.from('.clouds', {opacity: 0, duration: 4, y: -1000});
gsap.from('.bigPlane', {opacity: 0, duration: 4, x: 1500, y: 1000});
gsap.from('.menu, h1', {opacity: 0, duration: 3.5, y: 300});
gsap.from('.forms, .feedback, #firstButton', {opacity: 0, duration: 3.8, y: 500});


// scrollTrigger
let tl = gsap.timeline({
	scrollTrigger:{
		trigger:'.gadjets__image',
		start: '20% 90%'
	}
});

tl.from('#ticket', {
	x:-150, opacity:0, duration:2, ease: "elastic" 
})
.from('#phone1', {
	x:-120, opacity:0, duration:2, ease: "elastic" 
}, "-=1")
.from('#airpodRight', {
	x:-100, opacity:0, duration:2, ease: "elastic" 
}, "-=1.2")
.from('#airpodLeft', {
	x:-100, opacity:0, duration:2, ease: "elastic" 
}, "-=1.2");


let tl2 = gsap.timeline({
	scrollTrigger:{
		trigger:'.section2',
		start: '15% 90%'
	}
});

tl2.from('.section2__container_row', {
	y: 150, opacity:0, duration:1.5, ease: "power2" 
});


let tl3 = gsap.timeline({
	scrollTrigger:{
		trigger:'.section3',
		start: '15% 90%'
	}
});

tl3.from('.section3__container', {
	y: 150, opacity:0, duration:1.5, ease: "power2" 
});



let tl4 = gsap.timeline({
	scrollTrigger:{
		trigger:'.section4__container',
		start: '25% 75%'
	}
});

tl4.from('.section4__container', {
 opacity:0, duration:2.5, ease: "power2" 
});



let tl5 = gsap.timeline({
	scrollTrigger:{
		trigger:'.section5__container__row',
		start: '25% 75%'
	}
});

tl5.from('.dollar3', {
 opacity:0, duration:1.5, ease: "back" 
})
.from('.shield', {
	 opacity:0, duration:1.5, ease: "back" 
}, "-=1")
.from('.smile', {
	opacity:0, duration:1.5, ease: "back" 
}, "-=1");



let tl6 = gsap.timeline({
	scrollTrigger:{
		trigger:'.section6',
		start: '20% 80%'
	}
});

tl6.from('.section6 h4', {
	y: 150, opacity:0, duration:0.5, ease: "power2" 
})
.from('.section6 h2', {
	y: 150, opacity:0, duration:1, ease: "power2" 
})
.from('.forms2', {
	y: 150, opacity:0, duration:1, ease: "power2" 
}, "-=0.5")
.from('.section6__container__callBack', {
	y: 150, opacity:0, duration:1, ease: "power2" 
})





// animation ScrollMagic

const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
	triggerElement:'.section1',
	triggerHook: 0.65
})
.setClassToggle('.header__background2, .section1__background', 'show')
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
	triggerElement:'.section2',
	triggerHook: 0.65
})
.setClassToggle('.section2__background, .section1__background2', 'show2')
.addTo(controller);


// smallPlane
gsap.registerPlugin(MotionPathPlugin)

const flightPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [{x: 100, y: -200}]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.small-plane__img', {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
);