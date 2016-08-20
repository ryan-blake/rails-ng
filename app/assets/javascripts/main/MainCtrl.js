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
    .controller('MainCtrl', MainCtrl);


      function MainCtrl($scope){
        $scope.things = ['Angular', 'Rails 4.2.5', 'UI Router', 'Together!!'];
        $scope.words = ['earth', 'in', 'words', 'Together!!'];


}
})();
