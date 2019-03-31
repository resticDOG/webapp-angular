/*
 * @Author: linkzz
 * @Description: 搜索页控制器
 * @Date: 2019-03-27 19:15:17
 */
'use strict';
angular.module('app')
    .controller('searchCtrl', ['$scope', '$http', 'dict', function ($scope, $http, dict) {
        $scope.name = '';
        $scope.sheet = {};
        // 初始化过滤对象
        $scope.filterObj = {};
        $scope.search = function(){
            $http.get('/data/positionList.json?name=' + $scope.name).success(function(res){
                // 请求成功
                $scope.positionList = res;
            });
        };
        $scope.search();
        // 缓存选中的tabId
        var tabId = '';
        $scope.tabList = [{
            id      : 'city',
            name    : '城市'
        }, {
            id      : 'salary',
            name    : '薪资'
        }, {
            id      : 'scale',
            name    : '公司规模'
        }];
        /**
         * @description: 选项卡点击回调
         * @param {obj} 点击的选项卡id 
         */
        $scope.tabSelected = function(id, name){
            tabId = id;
            $scope.sheet.sheetList = dict[id];
            $scope.sheet.visible = true;
        };
        /**
         * @description: sheet点击时回调
         * @param {string} id  
         */
        $scope.sClick = function(id, name){
            // id为空时显示默认值
            if (id){
                // 若id存在则选中的不是不限
                angular.forEach($scope.tabList, function(item){
                    if (tabId === item.id){
                        item.name = name;
                    }
                });
            // 给filterObj动态添加属性
            $scope.filterObj[tabId + 'Id'] = id;
            } else {
                // 选中不限的时候需要将tab还原,删除过滤对象的属性
                delete $scope.filterObj[tabId + 'Id'];
                angular.forEach($scope.tabList, function(item){
                    if (tabId === item.id){
                        switch (item.id) {
                            case 'city':
                                item.name = '城市';
                                break;
                            case 'salary':
                                item.name = '薪资';
                                break;
                            case 'scale':
                                item.name = '公司规模';
                                break;
                            default:
                                break;
                        }
                    }
                });
            }       
        };
        
        
    }]);