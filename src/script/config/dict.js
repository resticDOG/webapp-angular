/*
 * @Description: 全局对象配置
 * @Author: linkzz
 * @Github: https://github.com/resticDOG
 * @Date: 2019-03-30 23:24:11
 */
'use strict';
angular.module('app').value("dict", {}).run(['$http', 'dict', function($http, dict){
    // value 用于保存一个全局的值， run 是在程序运行前进行一些配置
    $http.get('/data/city.json').success(function(res){
        // 请求城市列表
        dict.city = res;
    });
    $http.get('/data/salary.json').success(function(res){
        // 请求薪资列表
        dict.salary = res;
    });
    $http.get('/data/scale.json').success(function(res){
        // 请求规模列表
        dict.scale = res;
    });
}]);
