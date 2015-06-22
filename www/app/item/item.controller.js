angular.module('myapp').controller('ItemCtrl', function($scope,ItemService,UtilityService,$stateParams,$location,$cordovaSocialSharing) {
	
	$scope.item = ItemService.getItemById($stateParams.itemId);

	$scope.getTagsAsString = function(){
		return UtilityService.pluckByField($scope.item.tags,'tag').join(', ');
	};

	$scope.getVersionsAsString = function(){
		return UtilityService.pluckByField($scope.item.versions,'version').join(', ');
	};

	$scope.getLearningStatusMsg = function(){
		return ItemService.getLearningStatusMsg();
	};

	$scope.getLearningStatusIcon = function(){
		return $scope.item.learningStatus === false ? "ion-ios-book-outline" : "ion-android-done-all";
	};

	$scope.getLearningStatusBtnText = function(){
		return $scope.item.learningStatus === false ? "Mark as Learned" : "Undo Learning";
	};

	$scope.toggleLearningStatus = function(){
		ItemService.toggleLearningStatus($scope.item.id);
	};

	$scope.openPreviousItem = function(){
		console.log('prev',ItemService.currentPosition)
		var item = ItemService.getPreviousItem();
		if(item && item.id){
			$location.path('/item/'+item.id);
			ItemService.decrementCurrentPosition();
		}else{
			$location.path('/');
			ItemService.resetCurrentPosition();
		}
	};

	$scope.openNextItem = function(){

		var item = ItemService.getNextItem();
		if(item && item.id){
			$location.path('/item/'+item.id);
			ItemService.incrementCurrentPosition();
		}else{
			$location.path('/');
			ItemService.resetCurrentPosition();
		}
	};

	$scope.gotoHome = function(){
		$location.path('/');
		ItemService.resetCurrentPosition();
	}

	$scope.shareSocially = function(){
		$cordovaSocialSharing.share($scope.item.question, $scope.item.answer+"<br/>Shared via QAPP...", "", "");
	}


});