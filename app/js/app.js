(function () {

'use strict';

angular.module('sapient', [])
    .controller('DashBoardCtrl', DashBoardCtrl)
    .factory('products', Products);
    
    DashBoardCtrl.$inject = ['$scope', '$http', '$location', 'products', '$filter'];    
    Products.$injecy = ['$http'];    

    function DashBoardCtrl ($scope, $http, $location, products, $filter){
        var allProducts = [];
        $scope.title ="RKart";

        products.getData().then(function (res) {
            allProducts = res.data.Details;
            $scope.products = res.data.Details;
        });


       $scope.cartItems = [];

       $scope.sortBy = function () {
            $scope.products = $filter('orderBy')($scope.products, 'Price', parseInt($scope.sortOrder));
       };

        $scope.addCart =  function(p,index){
            var matchedItem = $filter('filter')($scope.cartItems, {Id : p.Id});
            if(matchedItem.length > 0){
                $scope.cartItems[$scope.cartItems.indexOf(matchedItem[0])] = angular.copy(p);
            } else {
                $scope.cartItems.push(angular.copy(p));
            }
        }
    };

    function Products ($http){
        return {
            getData: function () {
                    return $http.get('./lib/data.json');
                }
        }
    };

})();