angular.module('starter.controllers', ['starter.services', 'ionic'])



// Login Controller 
.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {}; 

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data){
            $state.go('tab.dash'); 
        }).error(function(data){
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!', 
                template: 'Please check your credentials!'
            }); 
        }); 
    }
})


.controller('DashCtrl', function($scope, $http) {




  })

.controller('MaptovenueCtrl', function($scope) {

})



// A Controller To Display A Model On The Bands Seen View






.controller('BandsseenCtrl', function($scope) {

})





// A Controller To Display A Google Map Of The Current Location
.controller('MapCtrl', function($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    })

})


.controller('CountdownCtrl', function($scope) {

})



.controller('PlacesToDrinkCtrl', function($scope) {

})

