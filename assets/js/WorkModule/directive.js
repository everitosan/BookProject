(function(){
	angular.module('eveBook.directives')
	.directive('workDirective', [function(){
	function link ($scope, element) {

		$scope.$on('dataObtained', function(event, data){
			printD3(data);
		});

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

	function printD3(data) {
		d3.select('#canvas').selectAll('g').remove();
		d3.select('#canvas').selectAll('line').remove();
		
		var width = parseInt($('#canvas').css('width'));
		var height = parseInt($('#canvas').css('height'));

		var svg = d3.select('#canvas');

		data = setNodesXY(data);
		var links = createLinks(data);

		var force = d3.layout.force()
			.size([width, height])
			.linkDistance(function(){ return Math.floor(Math.random()* ( (width*.6) - 10 + 1)) + 10 })
			.nodes(data)
			.links(links);

		var link = svg.selectAll('.link')
			.data(links)
			.enter().append('line')
			.attr('class', 'link');

		var group = svg.selectAll('g')
			.data(data)
			.enter()
			.append('g')
			.attr('data', function(d) {return d.title; })
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
			.attr('class', 'node');

		var text = group
			.append('text')
			.text(function(d){ return d.title; });

		force.on("tick", function() {
			link.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			group.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y; });

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
	var definitionObject = {
        restrict: 'E',
        link: link,
        scope: true,
        templateUrl:'templates/WorkModule/template.html'
      };

      return definitionObject;

	}]);
})();