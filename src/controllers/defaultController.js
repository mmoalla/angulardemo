'use strict'

app
    .controller('Home', ['$scope', '$cookies', 'authProvider', function ($scope, $cookies, authProvider) {
        $scope.logged = $cookies.get('AngularSession');
    }])
;