# full-stack
Koa配置开发热加载、ES6语法支持、webpack配置

使用es6语法不能直接用node src/index.js运行脚本了，使用如下命令
```
npx babel-node src/index.js
```

使用es6语法不能直接用npx nodemon src/index.js运行脚本了，如果全局安装了babel-node，可以使用如下命令
```
npx nodemon --exec babel-node src/index.js
```
如果是局部安装了babel-node，则使用：
```
npx nodemon --exec npx babel-node src/index.js
```