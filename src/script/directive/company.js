/*
 * @Author: linkzz
 * @Description: 公司信息指令定义
 * @Date: 2019-03-26 20:20:27
 */
'use strict';
angular.module('app').directive('appCompany', [function () {
    // 指令的定义方式，需要返回一个配置对象
    return {
        restrict: 'A',  // 属性注入指令
        replace: true, // 替换父元素，模板中只能有一个根元素
        templateUrl: 'view/template/company.html'  // 模板路径
    };
}]);