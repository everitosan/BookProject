(function() {
	window.onload = function() {
		var tl = new TimelineMax();
		tl.to('#loader', 1, {opacity: 0, ease: Circ.easeOut })
			.to('#loader', .5, {'display': 'none' });
	};

	window.onbeforeunload = function() {
		alert('bye');
		pauseVideo('vide0');
		pauseSound('myste');
	};


	function test () {
		if(!isMobile()) {
			playVideo('vide0');
		}
	}
})();