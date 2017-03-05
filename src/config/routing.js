'use strict'

app.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html'
        })
        .when('/items/', {
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
        .when('/categories/', {
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
        });
});