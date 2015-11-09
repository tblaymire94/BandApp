angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
})

// Login Service 
.service('LoginService', function ($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer(); 
      var promise = deferred.promise;

      if(name == 'user' && pw == 'secret') {
        deferred.resolve('Welcome' + name + '!'); 
      } else {
        deferred.reject('Wrong Credentials.'); 
      }
      promise.success = function(fn) {
        promise.then(fn); 
        return promise; 
      }
      promise.error = function(fn) {
        promise.then(null, fn); 
        return promise; 
      }
        return promise; 
    }
  }
})




.factory('API', function($http, $rootScope){

    function apiUrl(endPoint){
      var url = "http://api.brewerydb.com/v2/"+endPoint;
      return url;
    }

    return {
      get: function(endPoiunt) {
        return $http.get(apiUrl(endPoint),
          {
            headers: {
              Accept: 'application/json',
              apikey: '27cd6be2aff7bb696e74592ff3e1deb4'
            }
          }
        );
      }
    }
  });
