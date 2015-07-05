angular.module('myapp').controller('HomeCtrl', function($scope,ItemService,$location,$ionicSideMenuDelegate) {

	$scope.appLevel = 'levelAll';
	$scope.appLearningStatus = 'statusAll'; 
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

	$scope.getItemsBySearchString = function(str){
		$scope.items = ItemService.getItemsBySearchString(str);

	}
	$scope.clearSearch = function(){
		$scope.search.value = '';
		$scope.getItemsBySearchString('');
	}
 $scope.openMenu = function () {
    // $ionicSideMenuDelegate.toggleLeft();
  }
});