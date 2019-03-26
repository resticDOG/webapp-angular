/*
 * @Author: linkzz
 * @Description: 职位详情页面控制器
 * @Date: 2019-03-25 14:29:51
 */
'use strict';
angular.module('app').controller('positionCtrl', ['$scope', '$http', '$q', '$state', 
    function($scope, $http, $q, $state){
        $scope.isLogin = true;
        function getPosition() {
            // 声明一个延迟对象
            var def = $q.defer();
            // 请求职位详情
            $http.get('/data/position.json?id=' + $state.params.id).success(function (res) {
                // 请求成功回调
                $scope.positionInfo = res;
                // 延迟对象的回调赋值
                def.resolve(res);
            }).error(function (err) {
                def.reject(err);
            });
            // 返回一个promise
            return def.promise;
        }
        /**
         * 根据id发送ajax请求获取公司信息
         * @param {string} id 
         */
        function getCompany(id) {
            $http.get('/data/company.json?id=' + id).success(function(res){
                $scope.company = res;
            })
        }

        // 调用返回对象的promise继续发送请求
        getPosition().then(function(position){
            getCompany(position.companyId);
        });
}]);
