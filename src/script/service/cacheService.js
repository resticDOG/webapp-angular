/*
 * @Author: linkzz
 * @Description: 注册cache服务，该服务用于将数据存储到cookie中
 * @Date: 2019-03-27 18:14:41
 */
'use strict';
angular.module('app')
    .service('cacheService', ['$cookies', function($cookies){
        // 该服务的定义只需要在this环境中添加属性即可
        /**
         * 往cookie中添加键值对
         */
        this.put = function(key, value){
            $cookies.put(key, value);
        }

        /**
         * 获取key对应的value
         */
        this.get = function(key){
            return $cookies.get(key);
        }

        /**
         * 移除key对应的val
         */
        this.remove = function(key){
            $cookies.remove(key);
        }
}]);