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
    }
}]);