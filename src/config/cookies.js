'use strict'

app.config(['$cookiesProvider', function ($cookiesProvider){
    $cookiesProvider.defaults.domain = 'angulardemo.alwaysdata.net';
    $cookiesProvider.defaults.secure = true;
}]);
