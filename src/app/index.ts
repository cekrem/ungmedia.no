/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />

module ungmedia {
  'use strict';

  angular.module('ungmedia', ['ui.router', 'ngMaterial'])
    .controller('MainCtrl', MainCtrl)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      });

    $urlRouterProvider.otherwise('/');
  });
}
