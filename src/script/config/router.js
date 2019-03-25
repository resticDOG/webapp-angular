/*
 * @Author: linkzz
 * @Description: 全局路由配置
 * @Date: 2019-03-25 11:40:29
 */
'use strict';

// 路由模块显示声明
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
    $stateProvider.state('main', {
        url         : '/main',              // 路由id
        templateUrl : 'view/main.html',     // 模板路径
        controller  : 'mainCtrl'            // 控制器
    }).state('position', {
        url         : '/position/:id',
        templateUrl : 'view/position.html',
        controller  : 'positionCtrl'
    });
    // 前面都匹配不到的路由统一转到main路由
    $urlRouterProvider.otherwise('main');
}]);