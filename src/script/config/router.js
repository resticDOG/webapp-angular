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
    }).state('company', {
        url         : '/company/:id',
        templateUrl : 'view/companyDetail.html',
        controller  : 'companyCtrl'
    }).state('search', {
        url: '/search',
        templateUrl: 'view/search.html',
        controller: 'searchCtrl'
    }).state('login', {
        url         : '/login',
        templateUrl : 'view/login.html',
        controller  : 'loginCtrl'
    }).state('register', {
        url         : '/register',
        templateUrl : 'view/register.html',
        controller  : 'registerCtrl'
    }).state('my', {
        url: '/my',
        templateUrl: 'view/my.html',
        controller: 'myCtrl'
    }).state('post', {
        url: '/post',
        templateUrl: 'view/post.html',
        controller: 'postCtrl'
    }).state('favorite', {
        url: '/favorite',
        templateUrl: 'view/favorite.html',
        controller: 'favoriteCtrl'
    });
    // 前面都匹配不到的路由统一转到main路由
    $urlRouterProvider.otherwise('main');
}]);