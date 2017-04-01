'use strict';
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/auth/login.html'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/items', {
            templateUrl: 'views/items/index.html',
            controller: 'ItemsController',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/items/new', {
            templateUrl: 'views/items/create.html',
            controller: 'ItemsCreateController',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/items/update', {
            templateUrl: 'views/items/update.html',
            controller: 'ItemsUpdateController',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/categories', {
            templateUrl: 'views/categories/index.html',
            controller: 'CategoriesIndex',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/categories/new', {
            templateUrl: 'views/categories/create.html',
            controller: 'CategoriesCreate',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/admin/categories/update/:id', {
            templateUrl: 'views/categories/update.html',
            controller: 'CategoriesUpdate',
            resolve: {
                logged: function (authProvider) {
                    return authProvider.authorize();
                }
            }
        })
        .when('/404', {
            templateUrl: 'views/errors/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        })
    ;
}]);