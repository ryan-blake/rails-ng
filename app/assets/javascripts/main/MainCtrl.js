(function(){

//
// angular
//   .module('app')
//   .controller('MainCtrl', MainCtrl);
//
// function MainCtrl($scope){
//
// }
angular.module('app')
    .controller('MainCtrl', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.2.5', 'UI Router', 'Together!!'];
    });
})();
