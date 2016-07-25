app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("todo");
    //
    // Now set up the states
    $stateProvider
        .state('todo', {
            url: "/todo",
            templateUrl: "view/todo.html"
        })
        .state('signup', {
            url: "/signup",
            templateUrl: "view/signup.html"
        })
         .state('login', {
            url: "/login",
            templateUrl: "view/login.html"
        })

});