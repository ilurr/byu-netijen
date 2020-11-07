
function scrollTo(element, to, duration) {
	if (isNaN(to)) to = to.offsetTop-100
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
// let wWrap = document.getElementById('wrapper-scroll');
if(!!wScroll) {
	let scrollBtn = wScroll.querySelector('.main-scroll');
	if(!!scrollBtn) {
		scrollBtn.addEventListener('click', function(e){
			e.preventDefault();
			scrollTo(document.documentElement, document.documentElement.scrollHeight, 400);
		});
	}
	document.addEventListener('scroll',function() {
		// let scrollPos = wWrap.scrollHeight - wWrap.scrollTop;
		let scrollPos = window.pageYOffset + document.body.clientHeight;
		// let scrollPos = window.pageYOffset;
		let swHeight = document.documentElement.scrollHeight;
		let mark = swHeight * 75 / 100;
		// console.log(scrollPos)
		// console.log(swHeight)
		// console.log(mark)
		if(scrollPos>mark) {
			wScroll.classList.add('-hide');
		} else {
			wScroll.classList.remove('-hide');
		}
	}, false);
} 



let soc = document.querySelectorAll('.social-block');
if(!!soc) {
	soc.forEach(function(item){
		let socBtn = item.querySelector('.social-trigger');
		if(!!socBtn) {
			socBtn.addEventListener('click', function(e){
				e.preventDefault();
				item.classList.add('-active');
			});
		}
	});
	document.addEventListener('click', function(e){
		soc.forEach(function(item){
			if(item.contains(e.target)) {
			} else {
				item.classList.remove('-active');
			}
		});
	});
}


