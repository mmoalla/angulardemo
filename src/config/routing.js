'use strict'

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'views/elements/home.html'
        })
        .when('/items', {
            controller: 'ItemsIndex',
            templateUrl: 'views/items/index.html'
        })
        .when('/items/new', {
            controller: 'ItemsCreate',
            templateUrl: 'views/items/create.html'
        })
        .when('/items/update', {
            controller: 'ItemsUpdate',
            templateUrl: 'views/items/update.html'
        })
        .when('/categories', {
            controller: 'CategoriesIndex',
            templateUrl: 'views/categories/index.html'
        })
        .when('/categories/new', {
            controller: 'CategoriesCreate',
            templateUrl: 'views/categories/create.html'
        })
        .when('/categories/update/:id', {
            controller: 'CategoriesUpdate',
            templateUrl: 'views/categories/update.html'
        })
        .when('/signup', {
            controller: 'SignUp',
            templateUrl: 'views/auths/signup'
        });
}]);