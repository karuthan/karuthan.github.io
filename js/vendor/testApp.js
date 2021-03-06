( function() {
  'use strict';  
  angular.module( 'testApp.routing', ['ui.router'] );
  angular.module( 'testApp.controllers', [] );
  angular.module( 'testApp.directives', [] );
  angular.module( 'testApp.filters', [] );
  angular.module( 'testApp.services', [] );
  angular.module( 'testApp.constants', [] );
  angular.module( 'testApp', ['testApp.controllers'] );
  var myApp = angular.module('testApp');
  myApp.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
  ]);
} )();


( function() {

  'use strict';
  angular.module( 'testApp.controllers' ).controller( 'testController', 
  function( $scope, $http) {	  
	$scope.results = ['Killer_new',' <==> ','Prince']; 	
	$scope.searchText ="";
	$scope.canShowTerm = function(term) {
		if(!angular.isDefined($scope.searchText) || $scope.searchText == "" ){
			return true;
		}
		return term.toLowerCase().indexOf($scope.searchText.toLowerCase()) > -1;
	} 	
   
    $http.get("/js/vendor/terms.js")
    .success(function(response) {
		$scope.results = response;
		});	
	})
})();