
	angular.module('adminService', [])

	// super simple service
	// each function returns a promise object 
	.factory('admin', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			},
			create : function(userData) {
				return $http.post('/api/users', userData);
			},
			delete : function(id) {
				return $http.delete('/api/users/' + id);
			}
		}
	}]);
