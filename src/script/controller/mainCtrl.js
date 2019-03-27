/*
 * @Author: linkzz
 * @Description: 主控制器
 * @Date: 2019-03-25 14:29:51
 */
'use strict';
angular.module('app')
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http){
        // $http服务用于发送ajax请求，常用api有get()和post()
        $http.get('/data/positionList.json').success(function(res){
            $scope.list = res;        
        });
}]);
