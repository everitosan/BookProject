(function(){
	window.playVideo = function(id) {
		document.getElementById(id).play();
	};

	window.videoGoTo = function(id, time) {
		var video = document.getElementById(id);
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

	};

	window.pauseVideo = function(id) {
		document.getElementById(id).pause();
	};


})();