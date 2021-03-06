(function(){
	window.playSound = function(id){
		resetSound(id);
		document.getElementById(id).play();
	};

	window.resetSound = function(id) {
		document.getElementById(id).pause();
		document.getElementById(id).currentTime = 0;
	};

	window.pauseSound = function (id) {
		document.getElementById(id).pause();
	};

	window.toggleVolume = function(id) {
		var media = document.getElementById(id);
		media.volume = !media.volume;
	}
})();