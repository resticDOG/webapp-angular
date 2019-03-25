/*
 * @Author: linkzz
 * @Description: 自定义指令head
 * @Date: 2019-03-25 15:23:48
 */
'use strict';
angular.module('app').directive('appHead', [function(){
    // 指令的定义方式，需要返回一个配置对象
    return {
        restrict : 'A',  // 属性注入指令
        replace : true, // 替换父元素，模板中只能有一个根元素
        templateUrl : 'view/template/head.html'  // 模板路径
    };
}]);
