/**
 * Created by NaxFast on 20.05.2017.
 */
(function () {
    'use strict';
    var main = angular.module('app', ['ngRoute']);

    //-----------------------------------------------------------------------------------------------------------Routing
    main.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<log-in></log-in>'
        })
            .when('/chat', {
                template: '<chat></chat>'

            })
            .when('/chat-room', {
                template: '<chat-room></chat-room>'

            })
        /*  .when('/add_abonent_page', {
         template: '<add-abonent-page></add-abonent-page>'
         })*/;

        $routeProvider.otherwise({redirectTo: ''});
    }]);
    //---------------------------------------------------------------------------------------------------------------End

    main.controller('AppCtrl', function ($scope) {
    });

})
();