
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
