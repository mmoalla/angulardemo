'use strict';

app
    .service('authProvider', ['$firebaseArray', '$timeout', '$location', '$cookies', function ($firebaseArray, $timeout, $location, $cookies){
        var ref = firebase.database().ref('users');
        var users = $firebaseArray(ref);

        this.signUp = function(user){
            user.privilege = 'user';
            users.$add(user);
            $timeout(function(){
                $location.path('/');
            }, 1000);
            return {'success': 'You are registered'}
        };

        this.login = function (user) {
            users.$loaded().then(function (users) {
                angular.forEach(users, function(usr) {
                    if((user.username === usr.username) && (user.password === usr.password))
                    {
                        console.log(usr);
                        $cookies.putObject('blog', usr);
                        $location.path('/admin');
                    }
                });
            });
        };

        this.authorize = function () {
            var logged = $cookies.get('blog');

            if(!logged){
                $location.path('/login');
            }
        };

        this.logout = function () {
            $cookies.remove('blog');
            $location.path('/');
        }
    }])
;