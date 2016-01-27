var app = angular.module('app', []);

app.directive('charlimit', ['$timeout', function ($timeout) {
 	return {
 		restrict: 'A',
 		scope: true,
		link: function($scope, element, attrs){
            if(element[0].innerHTML.length > attrs.charlimit){
            		//Fiz o substring mas aqui você faria o que bem achar melhor
					element.text(element.text().substr(0, attrs.charlimit));
					//Add algum estilo ao elemento caso queira.
					element.addClass('Lorem Ipsum');
			}
		}
 	} 
}]);