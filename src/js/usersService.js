var app = angular.module("confluente");

app.factory("users", ["$http", "$timeout", function ($http, $timeout) {

  return {
    getAll: function () {
      return $http.get("/api/user").then(function (result) {
        return result.data;
      });
    },
    /*
    //Untested:
    get: function (id) {
      return $http.get("/api/user/" + id).then(function (result) {
        return result.data;
      });
    },
    create: function (user) {
      //console.log(activity);
      return $http.post("/api/user", user).then(function (result) {
        console.log(result.data);
        return result.data;
      }, function (err) {
        console.error(err);
        return err;
      });
    },
    edit: function (user) {
      return $http.put("/api/user/" + user.id, user).then(function (result) {
        console.log(result.data);
        return result.data;
      });
    }
    */
  };
}]);
