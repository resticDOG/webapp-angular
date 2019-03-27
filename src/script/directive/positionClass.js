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
        templateUrl : 'view/template/positionClass.html',
        scope : {
            com : "="
        },
        link : function($scope){
            $scope.showPositionList = function(idx){
                // 点击之后需要将当前选中id改变
                $scope.selectedId = idx;
                $scope.positionList = $scope.com.positionClass[idx].positionList;
            };
            /**
             *  进入页面时调用一次函数
             *  这里需要注意，由于请求数据是异步的，在调用此函数的时候com可能无值，
             *  故需要使用$watch服务监视其状态值的变化
             **/
            $scope.$watch('com', function(newVal){
                if (newVal) $scope.showPositionList(0);
            });
        }
    }
}]);