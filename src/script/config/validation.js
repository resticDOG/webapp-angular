/*
 * @Description: 校验规则设置
 * @Author: linkzz
 * @Github: https://github.com/resticDOG
 * @Date: 2019-04-14 23:13:33
 */
'use strict';
angular.module('app').config(['$validationProvider', function($validationProvider){
    // 表达式
    var expression = {
        //一条规则对应一个属性，该属性可以是正则，可以是函数
        phone       : /^1(\d){10}/,
        password    : function(value){
            return value > 5;
        }
    };
    // 提示信息
    var defaultMsg = {
        phone : {
            success : '',
            error   : '必须是11位手机号'
        },
        password : {
            success : '',
            error   : '密码必须大于5位'
        } 
    };
    // 注册校验规则
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);