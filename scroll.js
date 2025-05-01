jQuery(window).on("load", function () {
	let one = $('#one');
	let containerOne = $('#containerA');
	let three = $('#three');
	let containerThree = $('#containerC'); 

	//Scroll to bottom on start
	scrollToBottom(containerOne, one);
	scrollToBottom(containerThree, three);

	//on Scroll make the move
	$(window).scroll(function() {
		inverseScroll(containerOne, one);
        	inverseScroll(containerThree, three);
	});
});

function inverseScroll(main,target) {
	let heightOfInvisiblePart = $(target).height() - $(window).height();
	$(main).scrollTop(heightOfInvisiblePart - $(window).scrollTop());
}

function scrollToBottom(main,target) {
	$(main).scrollTop($(target).height() - $(window).height());
}
