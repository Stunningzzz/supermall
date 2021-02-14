// module.exports = {
//   plugins:{
//     "postcss-px-to-viewport": {
//       unitToConvert: 'px',
//       // viewportWidth:375, // 视口的宽度 对应的是设计稿的宽度(对应开发者工具中所用到的屏幕宽度)
//       // viewportHeight:667, // 视口的高度 对应的是设计稿的高度(对应开发者工具中所用到的屏幕高度)
//       viewportWidth:320,
//       viewportHeight:568,
//       unitPrecision:5, // 指定'px'转换为vw时保留的小数位数(因为很多时候无法除尽)
//       viewportUnit:'vw', // 指定需要转换成的视口单位 当前是vw
//       fontViewportUnit: 'vw',
//       propList: ['*'],
//       minPixelValue:1, // 小于或等于'1px'时不转换为视窗单位
//       mediaQuery:false, // 允许在媒体查询中转换'px'吗? 
//       replace:true,
//       // exclude:/TabBar/ 让写在TabBar.vue 和 TabBarItem.vue中的px不转化
//       // exclude:/tabbar/ 让写在tabbar文件夹里面的
//       exclude:/tabbar/
//     }
//     /* propList(Array) 能转化为vw的CSS属性列表
//      *  1:传入特定的CSS属性；
//         2:可以传入通配符"*"去匹配所有属性，例如：['*']；
//         3:在属性的前或后添加"*",可以匹配特定的属性. (例如['*position*'] 会匹配 background-position-y)
//         4:在特定属性前加 "!"，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换letter-spacing
//         5: "!" 和 "*"可以组合使用， 例如: ['*','!font*']，将不转换font-size以及font-weight等属性 
//      */

//     /**
//      *  selectorBlackList (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。也就是根据选择器去
//      *  忽略 如 [/^.body$/] 那么<div class="body"> 里面的所有样式都会被忽略!!
    
//      *  如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配
//           例如 selectorBlackList 为 ['body'] 的话， 那么 .body-class 就会被忽略
//         如果传入的值为正则表达式的话，那么就会依据CSS选择器是否匹配该正则
//           例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会
//      * */ 

//     /**
//      * exclude (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
//      * 如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
//      * 如果传入的值是一个数组，那么数组里的值必须为正则
//      */
    
//     /**
//      * include (Array or Regexp) 如果设置了include，那将只有匹配到的文件才会被转换，
//      * 例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
//      */
//   }
// }