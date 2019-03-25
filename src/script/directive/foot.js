/*
 * @Author: linkzz
 * @Description: 页脚模板
 * @Date: 2019-03-25 17:31:52
 */
'use strict';
angular.module('app').directive('appFoot', [function(){
    return {
        restrict : 'A',
        replace : true,
        templateUrl : 'view/template/foot.html'
    }
}]);
