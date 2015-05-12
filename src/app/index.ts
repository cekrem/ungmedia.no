/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />

/// <reference path="main/main.route.ts" />

module ungmedia {
  'use strict';

  console.log(a);

  angular.module('ungmedia', ['ui.router', 'ngMaterial'])
    .controller('MainCtrl', MainCtrl)
    .config(mainRoute);

}
