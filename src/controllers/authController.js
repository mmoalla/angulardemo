'use strict'

app
    .controller('SignUp', ['$scope','authProvider', function ($scope, authProvider) {
        $scope.signUp = function(user){
            $scope.message = authProvider.signUp(user);
        };
    }])
    .controller('Login', ['$scope','authProvider', "$firebaseObject", "$firebaseArray", "$cookies", function ($scope, authProvider, $firebaseObject, $firebaseArray, $cookies) {
        var ref = firebase.database().ref('users');
        var syncObject = $firebaseObject(ref);
        
        $scope.login = function(user)
        {
            syncObject.$loaded().then(function() {
                // To iterate the key/value pairs of the object, use angular.forEach()
                angular.forEach(syncObject, function(value, key) {
                    if(user.username === value.username && user.password === value.password)
                    {
                        if(value.privilege === "user")
                        {
                            $cookies.putObject('AngularSession', value);
                            window.location.href = "#!/home";
                        }
                        else if(value.privilege === "admin")
                        {
                            $cookies.putObject('AngularSession', value);
                            window.location.href = "#!/admin";
                        }
                    }
                    else
                    {
                        $scope.message = {'error': 'Invalid credentials'}
                    }
                });
            });
        };
    }])
    .controller('Logout', ['$scope','$cookies', function ($scope, $cookies) {
        $scope.logout = function(){
            $cookies.remove("AngularSession");
            window.location.href = "#!/";
        }
    }])
;