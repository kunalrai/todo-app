
	angular.module('adminService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/user');
			},
			create : function(todoData) {
				return $http.post('/api/user', userData);
			},
			delete : function(id) {
				return $http.delete('/api/user/' + id);
			}
		}
	}]);
