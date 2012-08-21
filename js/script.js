(function () {
	var frag,
		i = 0,
		maxHeight = window.innerHeight,
		maxWidth = window.innerWidth,
		/**
		 * Return a random position for the elements, within the screen.
		 * 
		 * @return {Object}
		**/
		getPos = function () {
			return {
				left: (Math.random() * (maxWidth - 60)) + 'px',
				top: (Math.random() * (maxHeight - 80)) + 'px'
			};
		},
		pos,
		creationInterval = 100,
		maxElements = 20;

	// create new element every at a specified interval
	var intervalId = setInterval(function () {
		pos = getPos();
		
		frag = document.createElement('div');
		frag.className = "enigma";
		frag.id = "enigma" + i;
		frag.innerHTML = '?';
		frag.style.top = pos.top;
		frag.style.left = pos.left;
		document.body.appendChild(frag);
		i++;

		if (i == maxElements) {
			clearInterval(intervalId);
		}
		
	}, creationInterval),
		/**
		 * Just a simple jQuery cache, 
		 * the cache id is the id attribute of the DOM element
		 *
		**/
		_$ = (function () {

			var arr = {};

			return function (el) {
				if (!arr[el.id]) {
					arr[el.id] = $(el);
				}
				return arr[el.id];
			};

		}());

	$('body').on('webkitAnimationIteration mozAnimationEnd msAnimationEnd oAnimationEnd animationiteration', '.enigma', function(e) {
		// move at each iteration
		_$(this).css({
			left: getPos().left,
			top: getPos().top
		});
	});

	(function(window) {
		// adjust maxWidth and maxHeight on resize
		$(window).on('resize', function() {
			maxHeight = window.innerHeight;
			maxWidth = window.innerWidth;
		});
	}(window));	

}());