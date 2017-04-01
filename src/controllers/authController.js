app
    .controller('LoginController', ['$scope', 'authProvider', function ($scope, authProvider) {
        $scope.login = function(user){
            $scope.message = authProvider.login(user);
        };
    }])
    .controller('LogoutController', ['$scope', 'authProvider', function ($scope, authProvider) {
        $scope.logout = function () {
            authProvider.logout();
        };
    }])
;
