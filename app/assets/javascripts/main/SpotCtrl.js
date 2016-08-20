var spotCenter = angular.module('SpotCenter', ['ngResource']);

spotCenter.factory("Spot", function($resource) {
  return $resource("spots/:id", { id: '@id' }, {
    index:   { method: 'GET', isArray: true, responseType: 'json' },
    update:  { method: 'PUT', responseType: 'json' }
  });
})

spotCenter.controller("spotsController", function($scope, Spot) {
  $scope.spots = Spot.index()

  $scope.addSpot = function() {
    spot = Spot.save($scope.newSpot)

    $scope.spots.push(spot)
    $scope.newSpot = {}
  }

  $scope.deleteSpot = function(index) {

    spot = $scope.spots[index]
    Spot.delete(spot)
    $scope.spots.splice(index, 1);
  }
})
