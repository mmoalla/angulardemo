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
    })
    .directive ('modalDirective', function () {
        return {
            element: 'E',
            templateUrl: 'views/elements/modal.html'
        }
    })
    .directive ('homeDirective', function () {
        return {
            element: 'E',
            templateUrl: 'views/elements/home.html'
        }
    })
    .directive ('headerAdminDirective', function () {
        return {
            element: 'E',
            templateUrl: 'views/elements/admin/header.html'
        }
    })
    .directive ('sidebarAdminDirective', function () {
        return {
            element: 'E',
            templateUrl: 'views/elements/admin/sidebar.html'
        }
    })
;

