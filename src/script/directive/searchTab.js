/*
 * @Author: linkzz
 * @Description: 搜索页tab指令
 * @Date: 2019-03-27 20:04:15
 */
'use strict';
angular.module('app').directive('appSearchTab', [function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/searchTab.html',
        scope : {
            tabList : '=',
            tabSelected : '&'
        },
        link : function($scope){
            /**
             * @description: 点击tab事件，在通过定义一个回调函数通知父容器自己的状态被改变了
             * @param {Object} tab : tab对象，id和name两个属性 
             */
            $scope.select = function(tab){
                // 记录选中的id
                $scope.selectedId = tab.id;
                // 通知父容器的回调,并把点击的对象传回去
                $scope.tabSelected(tab);
            }
        }
    }
}]);