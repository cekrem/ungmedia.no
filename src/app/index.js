'use strict';

import MainCtrl from './main/main.controller';

angular.module('um', ['ngRoute', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)

  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      })
      .when('/hvem', {
        templateUrl: 'app/main/hvem.html'
      })
      .when('/hva', {
        templateUrl: 'app/main/hva.html'
      })
      .when('/hvor', {
        templateUrl: 'app/main/hvor.html'
      })
      .when('/hvordan', {
        templateUrl: 'app/main/hvordan.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('grey');
  });
