
	angular.module('userCtrl', [])

	// inject the Todo service factory into our controller
	.controller('userCtrl', ['$scope','$http','adminService', function($scope, $http, adminService) {
		$scope.formData = {};
		$scope.loading = true;

		

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createUser = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				adminService.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteUser = function(id) {
			$scope.loading = true;

			adminService.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);