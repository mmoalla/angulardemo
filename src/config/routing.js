'use strict'

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/admin', {
            templateUrl: 'views/templates/admin.html'
        })
        .when('/admin/items', {
            controller: 'ItemsIndex',
            templateUrl: 'views/items/index.html'
        })
        .when('/admin/items/new', {
            controller: 'ItemsCreate',
            templateUrl: 'views/items/create.html'
        })
        .when('/admin/items/update', {
            controller: 'ItemsUpdate',
            templateUrl: 'views/items/update.html'
        })
        .when('/admin/categories', {
            controller: 'CategoriesIndex',
            templateUrl: 'views/categories/index.html'
        })
        .when('/admin/categories/new', {
            controller: 'CategoriesCreate',
            templateUrl: 'views/categories/create.html'
        })
        .when('/admin/categories/update/:id', {
            controller: 'CategoriesUpdate',
            templateUrl: 'views/categories/update.html'
        })
        .when('/', {
            controller: 'Login',
            templateUrl : 'views/auths/login.html'
        })
        .when('/home', {
            templateUrl: 'views/templates/default.html'
        })
        .when('/signup', {
            controller: 'SignUp',
            templateUrl: 'views/auths/signup.html'
        });
}]);