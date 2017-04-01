'use strict';

app
    .controller('ItemsController', ['$scope', 'itemProvider', function ($scope,  itemProvider) {
        $scope.items = itemProvider.getItems();
    }])
    .controller('ItemsCreateController', function($scope, categoriesProvider, itemProvider){
        $scope.categories = categoriesProvider.getCategories();
        $scope.createItem = function(item){
            $scope.items = itemProvider.createItem(item);
        }
    })
    .controller('ItemsUpdateController', function($scope, itemProvider){
        /*$scope.updateItem = function(id, item){
            var ref = firebase.database().ref('items').child(id);
            var syncObject = $firebaseObject(ref);
            syncObject.$remove().then(function(ref){
            });
        }*/
    })
    .controller('ItemsDeleteController', function($scope, $firebaseObject){
        $scope.removeCategory = function(id, item){
            var conf = confirm("Are you sur you want to delete " + item.name + " ?");
            if(conf == true){
                var ref = firebase.database().ref('items').child(id);
                var syncObject = $firebaseObject(ref);
                syncObject.$remove().then(function(ref){
                });
            }
        }
    })
;