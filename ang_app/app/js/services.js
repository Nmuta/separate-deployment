app.service("CatService", function($http){
  var CatService = {};

  CatService.getCats = function(){
    return $http.get("http://localhost:3000/cats");
  }

  CatService.getCat = function(cat_id){
    return $http.get("http://localhost:3000/cats/"+cat_id);
  }

  return CatService;
});
