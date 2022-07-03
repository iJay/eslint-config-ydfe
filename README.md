# eslint-config-ydfe
> 这个包提供了一份可以拓展并共享的eslint配置。
## 使用方法
### eslint-config-ydfe

默认导出规则中包含了我们所有eslint规则，包括ES6。
首先，安装如下package

```shell
npm install --save-dev eslint-config-ydfe eslint
```

其次，在项目的.eslintrc文件中添加如下内容：
```json
{
  "extends": "ydfe"
}
```
### eslint-config-ydfe/vue
该项拓展中包含了我们所有eslint规则，包括对ES6和vue的风格检验规则。

首先，安装如下package和plugin
```shell
npm install --save-dev eslint-config-ydfe eslint eslint-plugin-vue vue-eslint-parser
```
其次，在项目的.eslintrc文件中添加如下内容：
```json
{
  "extends": "ydfe/vue"
}
```