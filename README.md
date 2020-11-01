# full-stack

优化webpack配置，npm构建脚本

svg-captcha图形验证码
```
npm install --D svg-captcha
```

npm-check-updates检查依赖包更新，安装完之后就可以使用ncu这个命令
```
npm install -g npm-check-updates
```

koa-compose整合中间件
```
npm install koa-compose
```

koa-compress压缩中间件
```
npm install koa-compress -S
```

webpack-merge合并webpack配置
```
npm install webpack-merge -D
```

TerserWebpackPlugin打包时压缩js代码
```
npm install terser-webpack-plugin --D
```

SplitChunksPlugin避免重复的引入依赖

rimraf 使用 webpack build文件项目时每次都会生成一个dist目录，有时需要把dist目录里的所以旧文件全部删掉，除了可以使用rm -rf /dist/命令删除外，还可以使用rimraf /dist/命令
```
npm install rimraf -D
```