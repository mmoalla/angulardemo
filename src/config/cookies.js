'use strict'

app.config(['$cookiesProvider', function ($cookiesProvider){
    $cookiesProvider.defaults.domain = 'angulardemo.dev';
    $cookiesProvider.defaults.secure = true;
}]);