# sample
A project to demonstrate the use of quickapp, including demos of components and apis. https://www.quickapp.cn/
## 使用方法说明
### 配置快应用开发环境
#### 安装NodeJS
需安装6.0以上版本的NodeJS，请从[Node.j官网](https://nodejs.org/en/)下载
#### 安装hap-toolkit
通过npm仓库安装，在命令行中执行以下命令：
> npm install -g hap-toolkit  

在命令行中执行hap -V会输出版本信息表示hap-toolkit安装成功，如下命令所示：
> hap -V
#### 手机安装调试器
调试器是一个Android应用程序，下载[调试器APK](https://statres.quickapp.cn/quickapp/quickapp/201803/file/quickapp_debugger.apk)

在手机上安装并打开调试器，按钮功能如下：

* 扫码安装：配置HTTP服务器地址，下载rpk包，并唤起平台运行rpk包
* 本地安装：选择手机文件系统中的rpk包，并唤起平台运行rpk包
* 在线更新：重新发送HTTP请求，更新rpk包，并唤起平台运行rpk包
* 开始调试：唤起平台运行rpk包，并启动远程调试  

**注意**：若打开调试器无法点击按钮，请升级手机系统到最新版本或安装平台预览版

安装成功后如下图所示：  

![](https://doc.quickapp.cn/tutorial/getting-started/build-environment.png)

### 运行项目
在项目根目录下，运行如下命令安装模块到node_modules目录
> npm install

**注意**：

> 如果开发者在后续操作中遇到报错Cannot find module '.../node_modules/hap-tools/webpack.config.js'，请运行一次hap update --force（执行完毕后不需要按照提示再次运行npm install）
这是由于高版本的npm（如：NodeJS v8版本使用npm5）在npm install时，会校验node_modules目录，并删除其中的hap-tools文件夹，从而导致报错；开发者运行hap update --force，会重新复制hap-tools文件夹到node_modules中
