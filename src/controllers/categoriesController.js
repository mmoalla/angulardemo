'use strict'

app
    .controller('CategoriesIndex', ['$scope','categoriesProvider', function ($scope, categoriesProvider) {
        $scope.categories = categoriesProvider.getCategories();
    }])
    .controller('CategoriesCreate', function($scope, categoriesProvider){
        $scope.createCategory = function(category){
            $scope.categories = categoriesProvider.createCategory(category);
        }
    })
    .controller('CategoriesUpdate', function($scope, categoriesProvider, $routeParams, $firebaseObject){
        var ref = firebase.database().ref('categories').child($routeParams.id);
        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "category");

        $scope.updateCategory = function(category){
            categoriesProvider.updateCategory(category);
        }
    })
    .controller('CategoriesDelete', function($scope, $firebaseObject, $location){
        $scope.removeCategory = function(id, category){
            var conf = confirm("Are you sur you want to delete " + category.name + " ?");
            if(conf == true){
               var ref = firebase.database().ref('categories').child(id);
                var syncObject = $firebaseObject(ref);
                syncObject.$remove().then(function(ref){
                    $location.path('/categories');
                });
            }
        }  
    })
;