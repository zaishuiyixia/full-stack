# full-stack
Koa配置开发热加载、ES6语法支持、webpack配置

使用es6语法不能直接用node src/index.js运行脚本了，使用如下命令
```
npx babel-node src/index.js
```
备注 npx babel-node src/index.js 相当于 npx .\node_modules\.bin\babel-node src/index.js 

使用es6语法不能直接用npx nodemon src/index.js运行脚本了，如果全局安装了babel-node，可以使用如下命令
```
npx nodemon --exec babel-node src/index.js
```
如果是局部安装了babel-node，则使用：
```
npx nodemon --exec npx babel-node src/index.js
```

1.clean-webpack-plugin: 清理dist目录下的文件
2.webpack-node-externals 主要是对node_modules下的文件做一个排除处理
3.@babel/core @babel/node 调试需要
4.@babel/preset-env 对特性做支持
5.babel-loader 在webpack中使用到的loader
6.cross-env 设置环境变量       
7.nodemon 开发过程中使用，文件发生变化时，重启服务