(function(){
	angular.module('eveBook.directives')
	.directive('workDirective', ['$rootScope', '$compile', 'animationSrv', function($rootScope, $compile, animationSrv){
	var svg, canvasGroup, width, height,globalData;

	function link (scope, element) {

		scope.$on('dataObtained', function(event, data){
			if(data.index < 3) {
				printD3(data.data);
				$('#canvas').show();
				$('#gridContainer').hide();
			}
			else {
				$('#canvas').hide();
				$('#gridContainer').show();
				printGrid(data.data, scope);
			}
			if(canvasGroup)
				zoomOut();
		});

		scope.$on('closeDetail', function(event, data){
			zoomOut();
		});

		animationSrv.enterSection();

		TweenMax.to('#work', 1, {opacity: 1, ease: Circ.easeOut, delay: 1});

	}

	function zoomOut() {
		$('#clicked')[0].play();

		TweenMax.to('#detailWork', 1, {right: '-100%'});
		TweenMax.to(canvasGroup, 1, {scale: 1, x:0 , y:0});
		TweenMax.to('.logoProject', 1, {opacity : 0});
		TweenMax.to('.link', 1, {'stroke-opacity': '1', ease: Circ.easeOut});
	}

	function zoomProject() {
		this.querySelector('.logoProject').setAttribute('style', 'opacity :1');
		$('#clicked')[0].play();
		var scale = 5;
		var x = width*.4 - (this.getAttribute('x') * scale);
		var y = height*.5 - (this.getAttribute('y') * scale);
		var id = this.getAttribute('data');
		var dataProject = {};
		
		var tl = new TimelineMax();

		tl.to(canvasGroup, 1, {scale: scale, x:x , y:y, ease: Circ.easeOut})
			.to('.link', 1, {'stroke-opacity': '.5', ease: Circ.easeOut}, '-=1')
			.to('#detailWork', 1, {delay: .25, right: 0, ease: Circ.easeOut});
		
		dataProject = globalData.filter(function ( dataProject ) {
		    return dataProject.id === id ;
		})[0];

		$rootScope.$broadcast('showDetailProject', dataProject);
	}

	function printD3(data) {
		globalData = data;

		d3.select('#canvasGroup').selectAll('*').remove();
		
		width = parseInt($('#canvas').css('width'));
		height = parseInt($('#canvas').css('height'));
		var zoom = d3.behavior.zoom()
					.scaleExtent([1, 40]);

		svg = d3.select('#canvas');
		canvasGroup = d3.select('#canvasGroup').call(zoom); 

		data = setNodesXY(data);
		var links = createLinks(data);

		var force = d3.layout.force()
			.size([width, height])
			.linkDistance(function(){ 
				var anch = 0;
				(width < height)? anch=width : anch=height;
				return Math.floor(Math.random()* ( (anch*.6) - 35 + 1)) + 35 
			})
			.nodes(data)
			.links(links);

		canvasGroup.append('rect').attr('width', width).attr('height', height);

		var link = canvasGroup.selectAll('.link')
			.data(links)
			.enter().append('line')
			.attr('stroke', "url('#myLinearGradient1')")
			.attr('class', 'link');

		var group = canvasGroup.selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('data', function(d) {return d.id; })
			.attr('class', 'nodeParent')
			.on('mouseup', zoomProject)
			.call(force.drag);

		var nodeCirc = group
			.append('circle')
			.attr('r', 20)
			.attr('class', 'Circ');

		var nodeCirc2 = group
			.append('circle')
			.attr('r', 25)
			.attr('class', 'Circ');	

		var node = group
			.append('circle')
			.attr('r', 15)
			.attr('stroke', "url('#myLinearGradient1')")
			.attr('class', 'node');
		
		var logoCirc = group
			.append('image')
			.attr('xlink:href', function(d){ return d.img;})
			.attr('width', '29px')
			.attr('height', '29px')
			.attr('class', 'logoProject');

		var text = group
			.append('text')
			.text(function(d){ return d.title; });

		force.on("tick", function() {
			if(d3.event) {
			 d3.event.sourceEvent.stopPropagation();
			}

			link.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			group.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y; });

			logoCirc
				.attr("x", function(d) { return d.x - 15; })
				.attr("y", function(d) { return d.y - 15; });

			nodeCirc
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });

			nodeCirc2
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });

			text.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y + 40; });

			node.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });
		  });
	
		force.start();	
	}

	function setNodesXY(data) {
		data.forEach(function(el) {
			el.x = 1;
			el.y = 1;
		});
		return data;
	}

	function createLinks(data) {
		var links = [];
		data.forEach(function(el, index, arr){
			var length = (arr.length) - 1;
			var  i = index;	
			for(i; i<length; i++) {
				var par = {
					'target': index,
					'source': i+1
				};
				links.push(par);
			}
		});
		return links;
	}


	function printGrid(data, $scope) {
		var $parent = $('.grid');
		$parent.html('');
		data.forEach(function(curr, index){	
			$parent.append($compile('<div class="item" grid-item url="'+curr.url+'"  img="'+curr.img+'"></div>')($scope));
		});

	}

	var definitionObject = {
        restrict: 'E',
        link: link,
        scope: {},
        templateUrl:'templates/eveBook/WorkModule/template.html'
      };

      return definitionObject;

	}]);
})();