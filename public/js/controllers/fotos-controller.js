angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    
    var promise = $http.get("/v1/fotos")
    .success(function(fotos) {
        $scope.fotos = fotos
    })
    .error(function(error) {
        console.log(error);
    })
    // var promise = $http.get("/v1/fotos");
    // promise.then(function(result) {
    //     $scope.fotos = result.data;
    // }).catch(function(error) {
    //     console.log(error);
    // })
})