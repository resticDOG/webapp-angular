/*
 * @Author: linkzz
 * @Description: 搜索页控制器
 * @Date: 2019-03-27 19:15:17
 */
'use strict';
angular.module('app')
    .controller('searchCtrl', ['$scope', '$http', function ($scope, $http) {
        // 获取职位列表
        $http.get('/data/positionList.json').success(function(res){
            $scope.positionList = res;
        });
    }]);