function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop == to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}

let wScroll = document.getElementById('button-scroll');
let wWrap = document.getElementById('wrapper-scroll');
if(!!wScroll && !!wWrap) {
	let scrollBtn = wScroll.querySelector('.main-scroll');
	if(!!scrollBtn) {
		scrollBtn.addEventListener('click', function(e){
			e.preventDefault();
			scrollTo(wWrap, wWrap.scrollHeight, 400);
		});
	}
	wWrap.addEventListener('scroll',function() {
		let scrollPos = wWrap.scrollHeight - wWrap.scrollTop;
		let swHeight = wWrap.clientHeight + 100;
		console.log(scrollPos)
		console.log(swHeight)
		if(scrollPos>swHeight) {
			wScroll.classList.remove('-hide');
		} else {
			wScroll.classList.add('-hide');
		}
	}, false);
} 

