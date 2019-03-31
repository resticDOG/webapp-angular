/*
 * @Description: 搜索时的条件过滤
 * @Author: linkzz
 * @Github: https://github.com/resticDOG
 * @Date: 2019-03-31 12:21:56
 */
angular.module('app').filter('searchFilter', [function(){
    // filter中需要返回一个函数
    return function(list, obj){
        var result = [];
        // 函数中第一个参数list是过滤的列表
        angular.forEach(list, function(item){
            var isEqual = true;
            for (var attr in obj){
                // 遍历对象的属性
                if (obj[attr] !== item[attr]){
                    isEqual = false;
                }
            }
            if (isEqual){
                // 找出对象列表中需要查找的对象，存放到数组中返回
                result.push(item);
            }
        });
        return result;
    }
}]);