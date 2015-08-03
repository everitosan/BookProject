(function(){
  angular.module('eveBook.directives')
  .directive('gridItem', [function(){
    function link ($scope, $element) {
      var item = $element[0];
      clasify(item, $($element).index());
      mansorify();
    }

    function clasify (el, index) {
      var sizeClass, random;

      sizeClass ="item1";
      
      if(index%3 == 0 && index!=0) {
        random = Math.floor(Math.random()* (2-1+1)) +1;
        sizeClass ="item"+ random;
      
      }
      $(el).addClass(sizeClass);
    }

    function mansorify () {   
      var $grid = $('.grid').masonry({
          percentPosition: true,
          itemSelector: '.item',
          columnWidth: '.item'
      });

      $grid.masonry('reloadItems');

      $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
      });
    }  

    var definitionObject = {
          restrict: 'A',
          link : link,
          scope: {
            url: '@',
            img: '@'
          },
          templateUrl:'templates/eveBook/WorkModule/gridItem/template.html'
        };

        return definitionObject;

  }]);
})();