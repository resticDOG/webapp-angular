/*
 * @Author: linkzz
 * @Description: 主控制器
 * @Date: 2019-03-25 14:29:51
 */
'use strict';
angular.module('app')
    .controller('postCtrl', ['$scope', '$http', function ($scope, $http){
       $scope.tabList = [{
           id   : 'all',
           name : '全部'
       }, {
            id  : 'pass',
            name : '面试邀请' 
       }, {
           id   : 'fail',
           name : '不合适'
       }] 
}]);
