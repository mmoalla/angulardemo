'use strict'

app
    .controller('SignUp', ['$scope','authProvider', function ($scope, authProvider) {
        $scope.signUp = function(user){
            $scope.message = authProvider.signUp(user);
        }
    }])
;