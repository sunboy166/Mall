 require('./index.css');
 require('page/common/nav-simple/index.js');
 var tool = require('util/tool.js'); 
 
 $(function(){
     var type = tool.getUrlParam('type') || 'default',
     $element =  $('.' + type + '-success');
     //显示对应的提示元素 
     $element = $element.show();
 });