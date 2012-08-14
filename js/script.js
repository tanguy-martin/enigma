(function () {
	var frag,
		i = 0,
		maxHeight = window.innerHeight,
		maxWidth = window.innerWidth,
		getPos = function() {
			return {
				left: (Math.random() * (maxWidth - 10) + 10) + 'px',
				top: (Math.random() * (maxHeight - 10) + 10) + 'px'
			};
		},
		pos;
	while (i < 100) {
		pos = getPos();
		frag = document.createElement('div');
		frag.className = "enigma";
		frag.innerHTML = '?';
		frag.style.top = pos.top;
		frag.style.left = pos.left;
		document.body.appendChild(frag);
		i++;
	}

$('.enigma').on('webkitAnimationIteration mozAnimationEnd msAnimationEnd oAnimationEnd animationIteration', function(e) {
    //$(this).css({left: getPos().left },0);
});
}());