/*
 * @Author: linkzz
 * @Description: 列表
 * @Date: 2019-03-25 18:52:15
 */
'use strict';
angular.module('app').directive('appPositionList', [function(){
    return {
        restrict    : 'A',
        replace     : true,
        templateUrl : 'view/template/positionList.html',
        // 暴露data接口
        scope       : {
            data : '='
        }
    }
}]);
