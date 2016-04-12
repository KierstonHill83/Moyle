var app = angular.module('savvyLife', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeController',
      templateUrl: '/views/partials/home.html',
      access:{restricted: false},
    })
    .when('/about', {
      controller: 'aboutController',
      templateUrl: '/views/partials/about.html',
      access:{restricted: false},
    })
    .when('/blog', {
      controller: 'blogController',
      templateUrl: '/views/partials/blog.html',
      access:{restricted: false},
    })
    .when('/contact', {
      controller: 'contactController',
      templateUrl: '/views/partials/contact.html',
      access:{restricted: false},
    })
    .otherwise({
      redirectTo: '/'
    });
});