(function(){
	window.playVideo = function(id) {
		var video = document.getElementById(id);
		if (video)
			video.play();
	};

	window.videoGoTo = function(id, time) {
		var video = document.getElementById(id);
		if (video) {
			var currT = parseInt(video.currentTime);

			if (currT != time) {
				if (currT == 0) {
					video.currentTime = time;
				}
				else {
					var seek = setInterval(function() {
						currT++;
						video.currentTime = currT;
						if (currT == time) {
							clearInterval(seek);
						}
					}, 50);
				}
			}
		}

	};

	window.pauseVideo = function(id) {
		document.getElementById(id).pause();
	};


})();