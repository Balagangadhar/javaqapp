angular.module('myapp').service('UtilityService', function(){

	this.pluckByField = function(obj,field){
		field = field || 'id';
		var extractFn = function(val) {
			if (angular.isObject(val)) {
				return val[field];
			} else {
				return val;
			}	 
		}
		if (angular.isArray(obj)) {
			var res = [];
			for (var i = 0; i < obj.length; i++) {
				res.push(extractFn(obj[i]));
			}
			return res;
		} else {
			return obj ? extractFn(obj) : null;
		}
	}
});