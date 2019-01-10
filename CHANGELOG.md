# v1.3.0
此版本配套快应用平台版本为v1030
## 框架
* 在 app.ux 中新增全局错误监听示例

## 组件
* 为 input 组件和 textarea 组件新增 selectionchange 事件示例
* 为 image 组件增加 complete, error 事件示例
* 为 video 组件增加 muted 属性示例
* 为 tab-content 组件增加 scrollable 属性示例
* 为 audio 组件增加 stop 方法示例

## 接口
* 新增在创建图标的对话框中自定义提示信息示例
* 新增短时振动示例
* 为 WebSocket 新增支持 ArrayBuffer 示例

## 样式
* 新增 font-family, font-face 示例
* 新增 justify-content: space-around 示例
* background-image 支持网络图片地址

# v1.0.2
此版本配套快应用平台版本为v1020
## 组件
* 新增map组件
* 新增canvas组件
* web组件支持文件下载能力
* web组件支持通信能力

## 接口
* 新增wifi接口
* shortcut接口允许开启和禁止快应用平台创建快捷方式的弹窗提示

# v1.0.1
此版本配套快应用平台版本为v1010
## 框架
1、新增$app.exit与$page.finish方法，退出应用/页面
## 组件
1、input增加maxLength属性
2、swiper增加loop开关
3、Promise化接口请求操作
4、文本编辑类组件增加selection能力
5、list组件scroll事件参数增加scrollState
6、video组件新增controls属性，控制是否显示播放控件
7、首页及input组件页新增active伪类样式
8、div组件新增justify-content, align-items, align-self样式的demo
9、audio新增控制音频播放通知显隐的demo
10、新增multi-picker组件，支持多列选择器
## 接口
1、新增本地文件读写接口demo
2、新增选择本地文件接口demo
3、新增保存图片、视频到相册demo
4、新增微信帐号接口、QQ帐号接口、微博帐号接口demo
5、新增第三方分享指定渠道demo
6、新增fetch对contenttype的处理demo
7、新增联系人接口demo
8、新增发送短信接口demo
9、地理位置增加获取系统当前支持的定位类型的能力
10、扩展record接口，支持设置录音时长，采样率，录音通道数，编码码率以及音频格式
11、下载文件时(request.download)可指定description、filename
12、router接口可直接打开指定快应用
## 样式动画
1、新增background-image支持.9图demo
2、新增背景图片支持background-position的demo
3、新增translate支持百分比demo
