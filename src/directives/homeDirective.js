'use strict'

app
.directive ('headerDirective', function () {
    return {
        element: 'E',
        templateUrl: 'views/elements/header.html'
    }
})
.directive ('footerDirective', function () {
    return {
        element: 'E',
        templateUrl: 'views/elements/footer.html'
    }
})
.directive ('alertDirective', function () {
    return {
        element: 'E',
        templateUrl: 'views/elements/alert.html'
    }
});

