# 电商平台项目(PC端)
## 下载源码
```
https://github.com/fangfeiyue/Mall.git
```
## 运行项目
```
npm install
npm run dev
```
## 项目描述
这是一个相对简易的电商品台，虽然相对简易，但也是麻雀虽小五脏俱全，电商平台需要的主要功能基本都实现了，本项目主要实现了电商平台常用的几大模块：用户模块、商品模块、购物车模块、订单模块、支付模块。

### 技术选型
- 软件开发过程：敏捷开发
- 前后端分离方式：完全分离，纯静态方式
- 模块化方案：CommonJS + Webpack
- 框架选择：jQuery + css
- 版本控制：git

### 几大模块简介：
- 用户模块
    - 数据安全性处理
    - 表单同步/异步验证
    - 小型SPA开发
- 商品模块
    - jQuery插件模块化改造
    - 独立组件抽离
    - 多功能列表开发
- 购物车模块
    - 商品状态随时验证方案
    - 模块内部方法调用方式
    - 非Form提交时的数据验证
- 订单模块
    - Modal式组件封装思想
    - 城市级联操作
    - 复杂表单回填
- 支付模块
    - 支付宝支付功能对接
    - 支付状态检测
    - 支付成功回执处理

## 主要功能
一、网站首页功能特点

推荐搜索关键字的快捷链接
活动展示的轮播图
使用了Unslider，使用起来特别简单，兼容性也好，具体使用步骤见官网　
　　 3. 分楼层的商品分类信息 

二、商品列表页功能点

 商品列表的展示
所需接口：
产品搜索及动态排序所需字段：categoryId/keyword、pageNum、pageSize、orderBy:排序参数　　
排序的逻辑
分页的处理
三、商品详情页功能

商品信息展示
缩略图预览
添加购物车
所需接口：
商品详情接口
添加购物车的接口所需字段：productId, count
查询购物车产品数量所需字段：无　

## 遇到的问题
1.因为是用的别人服务器上的数据，所以出现了跨域问题，但没法跟人商量，让人来解决跨域的问题，所以找了个临时的方法解决跨域
[暂时解决跨域的办法](http://www.qdfuns.com/notes/31986/63184ce6a03d35b736e7f78eca43a3ae.html)  

2.做商品列表分页时，如果点击分页过快，文字就会被选中，解决的办法，利用css3中的user-select新属性来解决。
```
-moz-user-select : none;
-webkit-user-select : none;
-ms-user-select : none;
user-select : none;
```
3.商品列表排序按钮左右相邻的元素都给了border，导致紧挨着的border比别的地方宽　
```
margin-right: -1px;
```
## 个人简介
作者：房飞跃

博客地址：[前端网](http://www.qdfuns.com/house/31986/note)  [博客园](https://www.cnblogs.com/fangfeiyue)  [GitHub](https://github.com/fangfeiyue)

职业：web前端开发工程师

爱好：探索新事物，学习新知识

座右铭：一个终身学习者

## 联系方式
坐标：北京

QQ：294925572

微信：

![XinShiJieDeHuHuan](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/100D55934BB446839482D3EA0CDC3E8D/17820)