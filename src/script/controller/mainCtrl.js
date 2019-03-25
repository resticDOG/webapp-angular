/*
 * @Author: linkzz
 * @Description: 主控制器
 * @Date: 2019-03-25 14:29:51
 */
'use strict';
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
    $scope.list = [{
        id : 1,
        name : '销售',
        imgSrc : 'images/company-3.png',
        compabyName : '千度',
        city : '上海',
        industry : '互联网',
        time : '2019-03-25 21:06'
    },{
        id: 2,
        name: 'WEB前端',
        imgSrc: 'images/company-1.png',
        compabyName: '慕课网',
        city: '北京',
        industry: '互联网',
        time: '2019-03-16 18:25'
    }];
}]);
