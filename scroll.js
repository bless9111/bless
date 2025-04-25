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

function inverseScroll(main,target) {
	alert($(window).scrollTop());
	let heightOfInvisiblePart = $(target).height() - $(window).height();
	let scrollPercent = $(window).scrollTop() / heightOfInvisiblePart;
	let targetPercent = 1 - scrollPercent;
	let targeOffset = heightOfInvisiblePart * targetPercent;
	$(main).scrollTop(targeOffset);     	   

}

function scrollToBottom(main,target) {
	$(main).scrollTop($(target).height() - $(window).height());
	/*let height = target.height();
	let div_offset = target.offset().top;
	let window_height = $(window).height();
	$(main).scrollTop(height - window_height);   
	alert(height - window_height);*/
}

