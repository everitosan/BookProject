(function() {

	window.isMobile = function(){
			return (
							window.navigator.userAgent.indexOf('Mobile') != -1||
							window.navigator.userAgent.indexOf('Tablet') != -1||
							window.navigator.userAgent.indexOf('KFAPWI') != -1||
							window.navigator.userAgent.indexOf('BB10') != -1||
							window.navigator.userAgent.indexOf('Android') != -1
							);
		};
		
})();