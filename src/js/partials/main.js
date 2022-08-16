
/* --------------------------preloader----------------preloader--------------------------- */


var delay_preloader = 1000;
setTimeout("document.getElementById('preloader').style.display='none'", delay_preloader);


/* ---------------------page1------------------------page1----------------------------- */


var delay_page1 = 1500;
setTimeout("document.getElementById('page1').style.opacity='1'", delay_page1);

setTimeout(function(){
	const page1Text = document.querySelector('.page1__text--first');
	page1Text.classList.add('active')
}, 2000);




const textFirst = gsap.timeline();

textFirst.fromTo('.page1__text', 1, {opacity: '1',}, {opacity: '0'}, 0)

ScrollTrigger.create({
	animation: textFirst,
	trigger: '.page1__container',
	start: '0 0',
	end: 'center',
	scrub: true,
})



const page1Image = gsap.timeline();
/* 
page1Image.fromTo('.page1__image', 1, {opacity: '1',}, {opacity: '0'}, 0.2)
*/
ScrollTrigger.create({
	animation: page1Image,
	trigger: '.page1__image',
	start: 'top',
	end: 'bottom+=500',
	scrub: true,
	pin: true,
})


/* -------------------------- */







/* -------------page2-----------------------page2------------------- */




const page2Image1 = gsap.timeline();

page2Image1.fromTo('.page2', 1, {opacity: '0',}, {opacity: '1'}, 0)

ScrollTrigger.create({
	animation: page2Image1,
	trigger: '.page2',
	start: 'top',
	end: 'center',
	scrub: true,
})


const page2Image1Pin = gsap.timeline();

ScrollTrigger.create({
	animation: page2Image1Pin,
	trigger: '.page2__image',
	start: 'top',
	endTrigger: '.page2',
	end: 'bottom+=1750',
	scrub: true,
	pin: true,
})



const textPage2Text = gsap.timeline();

textPage2Text.fromTo('.page2__left--first', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 5)
textPage2Text.fromTo('.page2__right--first', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 7)
textPage2Text.fromTo('.page2__right--second', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 9)

textPage2Text.fromTo('.page2__left--first', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 12)
textPage2Text.fromTo('.page2__right--first', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 14)
textPage2Text.fromTo('.page2__right--second', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 16)


textPage2Text.fromTo('.page2__right--first-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 5)
textPage2Text.fromTo('.page2__right--second-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 6.5)
textPage2Text.fromTo('.page2__left--first-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 8)
textPage2Text.fromTo('.page2__step-back', 1, {y: '10vh', opacity: 0,}, {y: '0px', opacity: 1}, 9.5)

textPage2Text.fromTo('.page2__right--first-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 12.8)
textPage2Text.fromTo('.page2__right--second-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 13.5)
textPage2Text.fromTo('.page2__left--first-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 14.5)
textPage2Text.fromTo('.page2__step-back', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 16)



ScrollTrigger.create({
	animation: textPage2Text,
	trigger: '.page2__container',
	start: 'top',
	end: 'bottom',
	pin: true,
	scrub: 0,
})



//page2Hidden-----------------------page2Hidden--------------page2Hidden

const page2Hidden = gsap.timeline();

page2Hidden.fromTo('.hidden-page2', 1, {opacity: '0', }, {opacity: '1',}, 0)

ScrollTrigger.create({
	animation: page2Hidden,
	trigger: '.hidden-page2',
	start: 'top',/* 
	endTrigger: '.page3', */
	end: 'center',
	scrub: true,
	pin: true,
})



//page3--------------------page3------------------page3



const page3Image1 = gsap.timeline();

page3Image1.fromTo('.page3', 1, {opacity: '0',}, {opacity: '1'}, 0)

ScrollTrigger.create({
	animation: page3Image1,
	trigger: '.page3',
	start: 'top',
	end: 'center',
	scrub: true,
})


const page3Image1Pin = gsap.timeline();

ScrollTrigger.create({
	animation: page3Image1Pin,
	trigger: '.page3__image',
	start: 'top',
	endTrigger: '.page3',
	end: 'bottom+=1700',
	scrub: true,
	pin: true,
})


const textPage3Text = gsap.timeline();

textPage2Text.fromTo('.page3__right--first', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 5)
textPage2Text.fromTo('.page3__left--first', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 7)
textPage2Text.fromTo('.page3__left--second', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 9)

textPage2Text.fromTo('.page3__right--first', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 12)
textPage2Text.fromTo('.page3__left--first', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 14)
textPage2Text.fromTo('.page3__left--second', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 16)

textPage2Text.fromTo('.page3__left--first-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 4.5)
textPage2Text.fromTo('.page3__left--second-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 6)
textPage2Text.fromTo('.page3__right--first-mobile', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 7.5)
textPage2Text.fromTo('.page3__step-back', 1, {y: '10vh', opacity: 0,}, {y: '0px', opacity: 1}, 9)

textPage2Text.fromTo('.page3__left--first-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 12.8)
textPage2Text.fromTo('.page3__left--second-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 13.5)
textPage2Text.fromTo('.page3__right--first-mobile', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 14.3)
textPage2Text.fromTo('.page3__step-back', 1, {y: '0px', opacity: 1}, {y: '-10vh', opacity: 0}, 15.5)




ScrollTrigger.create({
	animation: textPage2Text,
	trigger: '.page3__container',
	start: 'top',
	end: 'bottom',
	pin: true,
	scrub: 0,
})



const page3Hidden = gsap.timeline();

page3Hidden.fromTo('.hidden-page3', 1, {opacity: '0',}, {opacity: '1'}, 0)

ScrollTrigger.create({
	animation: page3Hidden,
	trigger: '.hidden-page3',
	start: 'top',
	end: 'center',
	scrub: true,
	pin: true,
})



//page4-------------------page4------------------page4

const page4Image = gsap.timeline();

page4Image.fromTo('.page4', 1, {opacity: '0',}, {opacity: '1'}, 0)
page4Image.fromTo('.page4__text--first', 1, {y: '10vh', opacity: 0}, {y: '0px', opacity: 1}, 1)

ScrollTrigger.create({
	animation: page4Image,
	trigger: '.page4',
	start: 'top',
	endTrigger: '.page4',
	end: 'bottom+=700',
	scrub: true,
	pin: true,
})




//прокрутка при клике
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 700,
		easing: "linear"
	});

	return false;
});

//page1----------------------page1------------------page1
const next1 = document.querySelector('.page1__text--first');
next1.addEventListener("click", function(e) {
	const page2 = document.getElementById('page2');
	page2.scrollIntoView({
		block: "center",
		behavior: "smooth",
	});
});

//page2------------------------page2--------------------page
const next2 = document.querySelector('.page2-text-mobile');
next2.addEventListener("click", function(e) {
	const page3 = document.getElementById('page3');
	page3.scrollIntoView({
		block: "center",
		behavior: "smooth",
	});
});
const next21 = document.querySelector('.page2-text-mobileB');
next21.addEventListener("click", function(e) {
	const page3 = document.getElementById('page3');
	page3.scrollIntoView({
		block: "center",
		behavior: "smooth",
	});
});


//page3------------------page3------------------page3
const prev3 = document.querySelector('.page3__step-back');
prev3.addEventListener("click", function(e) {
	const page2 = document.getElementById('page2');
	page2.scrollIntoView({
		block: "center",
		behavior: "smooth",
	});
});
$(".next3").click(function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: '+=3000',
	}, 700);
});