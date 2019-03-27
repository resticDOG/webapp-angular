/*
 * @Author: linkzz
 * @Description: 公司详情页面控制器
 * @Date: 2019-03-25 14:29:51
 */
'use strict';
angular.module('app').controller('companyCtrl', ['$scope', '$state', '$http', '$q', 
    function ($scope, $state, $http, $q){
        function getCom(){
            var def = $q.defer();
            $http.get('/data/company.json?id=' + $state.params.id).success(function (res) {
                def.resolve(res);
            });
            return def.promise;
        }
        getCom().then(function(res){
            $scope.company = res;
        });
}]);
