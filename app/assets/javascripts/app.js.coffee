#define my app
faveMovies = angular.module "faveMovies", []


#create my controller
faveMovies.controller "IndexCtrl", [ '$scope', ($scope) ->

  $scope.favoriteMovies = [{
    title: "Lola Versus"
    },
    {
    title: "When Harry Met Sally"
    },
    {
    title: "You've Got Mail"
    },
    {
    title: "Forrest Gump"
    },
    {
    title: "Inglorious Basterds"
    },
    {
    title: "Almost Famous"
    }]

  $scope.style
  $scope.quantity = 3

  $scope.remove = (movie) ->
    $scope.favoriteMovies.splice($scope.favoriteMovies.indexOf(movie), 1)

  $scope.$watch "typing", ->
    if $scope.typing == "sally"
      $scope.notice = "I knew the way you know about a good melon"
      $scope.removed = true



]

faveMovies.filter 'reverse', ->
  (movie) ->
    movie.split('').reverse().join('')