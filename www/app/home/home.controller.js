angular.module('myapp').controller('HomeCtrl', function($scope,ItemService,$location) {

	$scope.items = ItemService.getItems();

	$scope.getLearningStatusMsg = function(){
		return ItemService.getLearningStatusMsg();
	};

	$scope.openFirstItem = function(){
		$location.path('/item/'+ItemService.getFirstItem().id);
	};

	$scope.openItem = function(item,index){
		ItemService.setCurrentPosition(index);
		$location.path('/item/'+item.id)
	};

	$scope.getLearningStatusIcon = function(item){
		return item.learningStatus === false ? "ion-ios-book-outline" : "ion-android-done-all";
	};

	$scope.getItemsByName = function(str){
		console.log('str',str)
		return ItemService.getItems();
	}

});