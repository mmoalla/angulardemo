'use strict'

app
    .controller('ItemsIndex', ['$scope', 'itemProvider', function ($scope,  itemProvider) {
        $scope.items = itemProvider.getItems();
    }])
    .controller('ItemsCreate', function($scope, categoriesProvider, itemProvider){
        $scope.categories = categoriesProvider.getCategories();
        $scope.createItem = function(item){
            $scope.items = itemProvider.createItem(item);
        }
    })
    .controller('ItemsUpdate', function($scope){
    })
    .controller('ItemsDelete', function($scope){
    })
;