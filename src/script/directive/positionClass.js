/*
 * @Author: linkzz
 * @Description: 公司职位详情页面的分类指令
 * @Date: 2019-03-26 21:42:38
 */
'use strict';
angular.module('app').directive('appPositionClass', [function(){
    return {
        restrict : 'A',
        replace : true,
        templateUrl : 'view/template/positionClass.html'
    }
}]);