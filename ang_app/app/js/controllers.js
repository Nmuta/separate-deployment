app.controller("MainController", function($scope, $http, CatService){
  $scope.cats = "the cat gang...";

  CatService.getCats().then(function(payload){
    console.log("we are getting all Cats");
    $scope.cat_collection = payload.data;
  });

  CatService.getCat(1).then(function(single){
    console.log("we are getting ONE Cat:");
    $scope.singleCat = single.data;
  });

});
