let one = $('#one');
let containerOne = $('#containerA');
let three = $('#three');
let containerThree = $('#containerC'); 

//Scroll to bottom on start
scrollToBottom(containerOne, one);
scrollToBottom(containerThree, three);
/*
$('html, body').animate({ 
	scrollTop: $('.homeContainer').offset().top
}, 0);*/
$(one).scroll();
//on Scroll make the move
$(window).scroll(function() {
	inverseScroll(containerOne, one);
        inverseScroll(containerThree, three);
});

function inverseScroll(main,target) {
	let heightOfInvisiblePart = $(target).height() - $(window).height();
	$(main).scrollTop(heightOfInvisiblePart - $(window).scrollTop());  
	/*let scrollPercent = $(window).scrollTop() / heightOfInvisiblePart;
	let targetPercent = 1 - scrollPercent;
	let targeOffset = heightOfInvisiblePart * targetPercent;
	$(main).scrollTop(targeOffset); */ 
}

function scrollToBottom(main,target) {
	$(main).scrollTop($(target).height() - $(window).height());
}

