/*
 * @Author: linkzz
 * @Description: 职位信息指令
 * @Date: 2019-03-26 11:06:42
 */
'use strict';
angular.module('app').directive('appPositionInfo', [function(){
    return{
        restrict : 'A',
        replace : true,
        templateUrl : 'view/template/positionInfo.html',
        scope : {
            isActive : '='
        },
        link : function($scope){
            $scope.imagePath = $scope.isActive ? 'images/star-active.png' : 'images/star.png';
        }
    }
}]);
