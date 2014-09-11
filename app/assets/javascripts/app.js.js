// Generated by CoffeeScript 1.8.0
var faveMovies;

faveMovies = angular.module("faveMovies", []);

faveMovies.controller("IndexCtrl", [
  '$scope', function($scope) {
    $scope.favoriteMovies = [
      {
        title: "Lola Versus"
      }, {
        title: "When Harry Met Sally"
      }, {
        title: "You've Got Mail"
      }, {
        title: "Forrest Gump"
      }, {
        title: "Inglorious Basterds"
      }, {
        title: "Almost Famous"
      }
    ];
    $scope.style;
    $scope.quantity = 3;
    $scope.remove = function(movie) {
      return $scope.favoriteMovies.splice($scope.favoriteMovies.indexOf(movie), 1);
    };
    return $scope.$watch("typing", function() {
      if ($scope.typing === "sally") {
        $scope.notice = "I knew the way you know about a good melon";
        return $scope.removed = true;
      }
    });
  }
]);

faveMovies.filter('reverse', function() {
  return function(movie) {
    return movie.split('').reverse().join('');
  };
});
