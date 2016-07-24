app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("todo");
    //
    // Now set up the states
    $stateProvider
        .state('todo', {
            url: "/todo",
            templateUrl: "todo.html"
        })
        .state('signup', {
            url: "/signup",
            templateUrl: "signup.html"
        })

});