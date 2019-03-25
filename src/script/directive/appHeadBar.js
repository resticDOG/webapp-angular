/*
 * @Author: linkzz
 * @Description: headBar组件指令定义
 * @Date: 2019-03-25 22:50:15
 */
'use strict';
angular.module('app').directive('appHeadBar', [function () {
    return {
        restrict: 'A',                          // 属性注入指令
        replace: true,                          // 替换父元素，模板中只能有一个根元素
        templateUrl: 'view/template/headBar.html',  // 模板路径
        scope : {
            text : '@'  // 表示暴露的接口值传递一个字符串常量
        },
        // 如果指令内部含有逻辑，需要定义的时候传递link属性
        link : function(scope){
            scope.back = function(){
                // h5的api，用于返回上一层
                window.history.back();
            }
        }
    };
}]);