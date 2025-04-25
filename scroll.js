$('#containerA').scrollTop(-14);
/*let one = $('#one');
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

function inverseScroll(main,target){
	let window_height = $(window).height();
	let scrollTop = $(window).scrollTop();
	let scrollPercent = scrollTop / ($(document).height() - window_height);
	let targetPercent = 1 - scrollPercent;
	let height =target.height();
	let offset = target.offset().top;
	let targeOffset = (height - window_height) * targetPercent;
	$(main).scrollTop(targeOffset);     	   

}

function scrollToBottom(main,target) {
	let height = target.height();
	let div_offset = target.offset().top;
	let window_height = $(window).height();
	$(main).scrollTop(height - window_height);   
	alert(height - window_height);
}
*/
