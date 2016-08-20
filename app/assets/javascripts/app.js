angular
  .module('app', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('/', {
          url:'/',
          templateUrl: 'main/_home.html',
          controller: 'MainCtrl'
        })
        .state('/posts', {
          url:'/posts',
          templateUrl: 'main/_post.html',
          controller: 'MainCtrl'
        })
        .state('page', {
          url:'/page',
          templateUrl:'main/_page.html',
          contrller: 'MainCtrl'
        });

        $urlRouterProvider.otherwise('/')

    }]);
