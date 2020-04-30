// webpack的入口起点文件

/*
1.运行指令：

开发环境：webpack ./src/index.js -o ./build/built.js --mode=development;
webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/build.js文件中
整体打包环境是开发环境。

生产环境：
webpack ./src/index.js -o ./build/build.js --mode=production
webpack会以. / src / index.js为入口文件开始打包， 打包后输出到. / build / build.js文件中
整体打包环境是生产环境。

2,结论：
1：webpack能处理js和json的文件
2：生产环境与开发环境的区别：生产环境是项目要上线的情况下才产生的。
目前就比开发环境好的一点是生产环境的代码是压缩而成的。
3：生产环境与开发环境将ES6模块化编译成浏览器能识别的模块化。
*/
// import $ from 'jquery';
// $('#title').click(()=>{
//     $(this).css('backgroud','red');
// })
import data from './data.json';
console.log(data);

function add(x,y){
    return x+y
}
console.log(add(2,3));