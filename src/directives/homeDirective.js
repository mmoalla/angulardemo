'use strict'

app
.directive ('headerDirective', function () {
    return {
        element: 'E',
        templateUrl: 'views/header.html'
    }
})
.directive ('footerDirective', function () {
    return {
        element: 'E',
        templateUrl: 'views/footer.html'
    }
});

