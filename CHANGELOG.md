# v1.7.0

此版本配套快应用平台版本为 v1070

## 框架

- 新增：动态组件示例

## 组件

- 新增: `list`组件新增`scrollBy`方法，控制`list`从当前位置进行滑动示例
- 新增: 组件新增通用方法`toTempFilePath`，将组件内容保存为图片示例
- 新增: 组件新增通用方法`getBoundingClientRect`，获取节点的位置信息示例
- 新增: `web`组件新增`showloadingdialog`属性，web组件是否展示加载框对比示例
- 新增: `web`组件新增`supportzoom`属性，设置网页是否支持缩放示例
- 新增: `richtext`组件新增`start`、`complete`事件，监测`richtext`开始加载和完成加载示例

## 样式

- 新增: `switch`组件新增`thumb-color`、`track-color`样式，自定义小球和滑轨颜色示例
- 新增: `progress`组件`horizontal`增加`layer-color`样式，设置滑轨颜色示例
- 新增：`animation`回调事件示例
- 新增: 动画样式`animation-name`支持多个`keyframe`定义的动画示例

## 接口

- 新增: `router`接口`push`方法，`params`新增参数`___PARAM_PAGE_ANIMATION___`，可分别对`openEnter`、`closeEnter`、`openExit`、`closeExit`进行配置，来进行页面跳转动画定制
- 新增: `package`接口新增`getInfo`方法，获取应用版本号、版本名示例
- 新增: `package`接口新增`getSignatureDigests`方法，获取应用签名摘要信息示例
- 新增: `network`接口新增`getSimOperators`方法，获取Sim卡的运营商信息示例
- 新增： `app`接口新增`createQuickAppQRCode`方法,快应用生成分享二维码示例

# v1.6.0

此版本配套快应用平台版本为 v1060

## 框架

- 新增：`manifest.json`中`display`新增`textSizeAdjust` 属性示例
- 新增：`manifest.json`中`config`新增 `network` 属性示例
- 新增：`manifest.json`中`dispaly`新增 `fitCutout` 属性, 适配异形屏示例
- 新增：页面对象 `$page` 新增 `query` 属性，获取页面参数示例
- 新增: `manifest.json`中 `router` 新增 `errorPage` 字段，可以自定义错误页面；如果不配置的话，在页面跳转异常时，会跳转到系统默认的错误页
- 新增: `app.ux` 新增 `onPageNotFound`生命回调，在页面跳转异常时会触发回调，回调参数为一个对象，里有错误地址uri

## 组件

- 新增: 新增组件 `marquee`,可设置 文本的跑马灯功能示例示例
- 新增: 组件新增属性 `aria-label`,无障碍模式示例
- 新增: `canvas` 组件新增 `shadowBlur` 、`shadowColor` 、 `shadowOffsetX` 、 `shadowOffsetY` 属性示例
- 新增: `list` 组件，`scrollTo` 方法新增 `smooth` 属性,设置页面平滑滚动示例
- 新增: `textarea` 组件，新增 `onlinechange` 事件,监听输入框行数变化示例
- 优化：`map`子组件`custommarker`示例
- 优化：`image` 组件alt优化，可以传入字符串 `blank` ，在不传入值的时候系统会设置默认灰色占位图

## 样式

- 新增: `input` 组件自定义光标颜色示例
- 新增： `relative`，`absolute`, `fixed` 定位示例Demo
- 新增: position属性新增`relative`和`absolute`,默认值现在为`relative`

## 接口

- 新增: `device` 接口的 `getId` ,参数 `type` 新增 `oaid` 类型,返回参数新增 `oaid` 及 `device`新增`oaid` 值,获取匿名设备标识符示例
- 新增: `device` 接口的 `getDeviceId`,返回参数 `deviceId` 新增 `oaid` 值,获取匿名设备标识符示例
- 新增: `device` 接口的 `getInfo` 方法,新增 异形区域参数 `cutout` 示例
- 新增: `file` 接口新增 `mkdir` 方法,创建目录示例
- 新增: `file` 接口新增 `rmdir` 方法,删除目录示例
- 新增: `prompt` 接口的 `showDialog` 方法,新增是否在点击遮罩时关闭对话框的参数 `autocancel`示例
- 新增: `webview` 接口打开的网页中,新增 `deeplink` 打开快应用示例
- 新增: `bluetooth` 接口新增状态码 `10010`示例
- 新增: `brightness` 接口新增 `setKeepScreenOn` 设置常亮状态示例
- 新增: 新增 `zip` 解压压缩文件示例
- 新增: `sensor` 接口的 `subscribeAccelerometer` 新增监听加速度数据回调函数的执行频率 参数 `interval` 示例
- 新增: `media` 接口的 `takePhoto` 、`takeVideo` 、 `pickImage` 、 `pickVideo` 、 `pickFile`方法,返回参数新增 `name`，`size` 示例
- 新增: `media` 接口的 `pickImages` 、`pickVideos` 方法,返回参数新增 选取的文件列表`files`示例
- 新增: `cipher` 接口的 `aes` 方法,支持 `AES` 加解密能力示例
- 新增: `configuration` 接口配置多语言环境

# v1.5.0

此版本配套快应用平台版本为 v1050

## 框架

- 新增 通用事件`resize`示例
- 新增 组件绑定`data`属性示例
- 新增 自定义组件支持`onInit`,`onReady`,`onDestory`生命周期示例
- 新增 `computed`属性 示例
- 新增 自定义过滤器 示例
- 新增 `$page`对象的 `windowHeight`,`windowWidth` 属性示例

## 组件

- 优化 `span`组件嵌套`span`组件示例
- 新增 `input` 组件支持`tel` 类型示例
- 新增 `stack`组件 `fullscreenchange` 事件示例
- 新增：slot 组件，默认内容设置 示例
- 新增：slot 组件，具名插槽 示例

## 接口

- 为 `geolocation` 接口的`subscribe`方法新增`preserved`参数，设置是否持久化订阅示例
- 为 `geolocation` 接口的新增`getSupportedCoordTypes`方法，获取支持的坐标系类型示例
- 为 `image` 接口的`editImage`方法 新增`aspectRationX`,`aspectRationY`参数，裁剪图片示例
- 为 `sms` 接口 新增 `readSafely` 方法，获取手机短信内容示例
- 为 `storage` 接口 新增 `key` 方法，返回键名 示例
- 为 `contact` 接口 增加 `list` 方法，获取通讯录所有联系人列表 示例

## 样式

- 为 `span` 组件，`font-weight` 样式新增 `lighter`、 `bolder` 、数值设置示例
- 为 `text` 组件，`font-weight` 样式新增 `lighter`、 `bolder` 、数值设置示例

# v1.4.1

新增快应用常见功能及场景示例

## 框架

- 新增样式与布局相关的示例 4 个
  1. 样式示例
  2. less 示例
  3. flex 布局示例
  4. 动态修改样式
- 新增指令相关的示例 4 个
  1. 指令 for
  2. 指令 if 和指令 show
  3. 组件 block
  4. 组件 slot
- 新增事件监听与触发相关的示例 2 个
  1. 自定义事件
  2. 原生组件事件
- 新增优化技巧相关的示例 2 个
  1. 代理 JSON.parse
  2. 回调函数
- 新增父子组件通信和兄弟组件通信示例

## 场景

- 新增细粒度划分 list-item 示例
- 新增页签内容懒加载示例

# v1.4.0

此版本配套快应用平台版本为 v1040

## 框架

- 新增蓝牙功能示例
- 新增支持 RPK 分包加载示例
- 新增系统闹钟设置示例
- 新增系统铃声示例

## 组件

- 新增 `camera` 组件示例
- 为 `tab-content` 组件增加 `scrollable` 属性示例
- 为 `refresh` 组件增加 `type` 属性示例
- 为 `audio` 组件增加 `streamType` 属性示例
- 为 `media` 组件增加选取图片示例
- 为 `list` 组件增加 `scrollend` 、`scrolltouchup` 事件示例
- 为 `canvas` 组件增加 `setLineDash` 方法和 `lineDashOffset` 属性示例
- 为 `map` 组件增加指南针、俯视(3D)、缩放、拖动、旋转等功能

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

此版本配套快应用平台版本为 v1030

## 框架

- 在 app.ux 中新增全局错误监听示例

## 组件

- 为 input 组件和 textarea 组件新增 selectionchange 事件示例
- 为 image 组件增加 complete, error 事件示例
- 为 video 组件增加 muted 属性示例
- 为 tab-content 组件增加 scrollable 属性示例
- 为 audio 组件增加 stop 方法示例

## 接口

- 新增在创建图标的对话框中自定义提示信息示例
- 新增短时振动示例
- 为 WebSocket 新增支持 ArrayBuffer 示例

## 样式

- 新增 font-family, font-face 示例
- 新增 justify-content: space-around 示例
- background-image 支持网络图片地址

# v1.0.2

此版本配套快应用平台版本为 v1020

## 组件

- 新增 map 组件
- 新增 canvas 组件
- web 组件支持文件下载能力
- web 组件支持通信能力

## 接口

- 新增 wifi 接口
- shortcut 接口允许开启和禁止快应用平台创建快捷方式的弹窗提示

# v1.0.1

此版本配套快应用平台版本为 v1010

## 框架

- 新增$app.exit与$page.finish 方法，退出应用/页面

## 组件

- input 增加 maxLength 属性
- swiper 增加 loop 开关
- Promise 化接口请求操作
- 文本编辑类组件增加 selection 能力
- list 组件 scroll 事件参数增加 scrollState
- video 组件新增 controls 属性，控制是否显示播放控件
- 首页及 input 组件页新增 active 伪类样式
- div 组件新增 justify-content, align-items, align-self 样式的 demo
- audio 新增控制音频播放通知显隐的 demo
- 新增 multi-picker 组件，支持多列选择器

## 接口

- 新增本地文件读写接口 demo
- 新增选择本地文件接口 demo
- 新增保存图片、视频到相册 demo
- 新增微信帐号接口、QQ 帐号接口、微博帐号接口 demo
- 新增第三方分享指定渠道 demo
- 新增 fetch 对 contenttype 的处理 demo
- 新增联系人接口 demo
- 新增发送短信接口 demo
- 地理位置增加获取系统当前支持的定位类型的能力
- 扩展 record 接口，支持设置录音时长，采样率，录音通道数，编码码率以及音频格式
- 下载文件时(request.download)可指定 description、filename
- router 接口可直接打开指定快应用

## 样式动画

- 新增 background-image 支持.9 图 demo
- 新增背景图片支持 background-position 的 demo
- 新增 translate 支持百分比 demo
