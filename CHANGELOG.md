# v1.4.1
新增快应用常见功能及场景示例

## 框架
* 新增样式与布局相关的示例 4 个
  1. 样式示例
  2. less 示例
  3. flex 布局示例
  4. 动态修改样式
* 新增指令相关的示例 4 个
  1. 指令 for
  2. 指令 if 和指令 show
  3. 组件 block
  4. 组件 slot
* 新增事件监听与触发相关的示例 2 个
  1. 自定义事件
  2. 原生组件事件
* 新增优化技巧相关的示例 2 个
  1. 代理JSON.parse
  2. 回调函数
* 新增父子组件通信和兄弟组件通信示例
## 场景
* 新增细粒度划分 list-item 示例
* 新增页签内容懒加载示例

# v1.4.0
此版本配套快应用平台版本为v1040

## 框架

- 新增蓝牙功能示例
- 新增支持RPK分包加载示例
- 新增系统闹钟设置示例
- 新增系统铃声示例

## 组件

- 新增 `camera` 组件示例
- 为 `map` 组件增加室内图示例
- 为 `tab-content` 组件增加 `scrollable` 属性示例
- 为 `refresh` 组件增加 `type` 属性示例
- 为 `audio` 组件增加 `streamType` 属性示例
- 为 `media` 组件增加选取图片示例
- 为 `list` 组件增加 `scrollend` 、`scrolltouchup` 事件示例
- 为 `canvas` 组件增加 `setLineDash` 方法和 `lineDashOffset` 属性示例
- 为 `map` 组件增加手势开关示例

## 接口

- 为 `device` 接口，增加获取设备序列号方法示例
- 为 `media` 接口，增加 `previewImage` 方法示例
- 为 `prompt` 接口，增加 `showLoading` 方法和 `hideLoading` 方法示例
- 为 `image` 接口，增加 `getExifAttributes` 方法示例
- 为 `media` 接口的 `pickImages` 方法，增加支持选择多张图片示例
- 为 `router` 接口 `push` 方法，跳转到短信发送页面时，可以插入短信内容示例

## 样式

- 增加 通用样式支持 `z-index`示例
- 增加 `flexbox` 容器下的元素支持 `margin:auto`示例
- 增加 `text` 组件，支持 `text-indent` 段落缩进示例
- 增加 `video、image` 组件支持 `object-fit` 样式示例
- 增加 `flex-direction` 属性，支持 `row-reverse` 和 `column-reverse`示例
- 增加 `color` 属性，支持 `hsl`示例

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

* 新增$app.exit与$page.finish方法，退出应用/页面
## 组件

* input增加maxLength属性
* swiper增加loop开关
* Promise化接口请求操作
* 文本编辑类组件增加selection能力
* list组件scroll事件参数增加scrollState
* video组件新增controls属性，控制是否显示播放控件
* 首页及input组件页新增active伪类样式
* div组件新增justify-content, align-items, align-self样式的demo
* audio新增控制音频播放通知显隐的demo
* 新增multi-picker组件，支持多列选择器
## 接口
* 新增本地文件读写接口demo
* 新增选择本地文件接口demo
* 新增保存图片、视频到相册demo
* 新增微信帐号接口、QQ帐号接口、微博帐号接口demo
* 新增第三方分享指定渠道demo
* 新增fetch对contenttype的处理demo
* 新增联系人接口demo
* 新增发送短信接口demo
* 地理位置增加获取系统当前支持的定位类型的能力
* 扩展record接口，支持设置录音时长，采样率，录音通道数，编码码率以及音频格式
* 下载文件时(request.download)可指定description、filename
* router接口可直接打开指定快应用
## 样式动画
* 新增background-image支持.9图demo
* 新增背景图片支持background-position的demo
* 新增translate支持百分比demo
