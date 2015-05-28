'use strict';

import MainCtrl from './main/main.controller';

angular.module('um', ['ngRoute', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
