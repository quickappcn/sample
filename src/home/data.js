export const tabsData = {
  framework: {
    name: '框架',
    desc: '以下将展示快应用框架能力，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '基础',
        caseList: [
          {
            name: '页面生命周期',
            path: 'framework/lifecycle'
          },
          {
            name: '组件生命周期',
            path: 'framework/componentlifecycle'
          },
          {
            name: '唤起应用(deepLink)',
            path: 'framework/deeplink'
          },
          {
            name: '退出应用/页面',
            path: 'framework/exit'
          },
          {
            name: '屏幕方向',
            path: 'framework/screenorientation'
          },
          {
            name: '页面宽高',
            path: 'framework/pageWH'
          },
          {
            name: '跳转页面',
            path: 'framework/navigate'
          }
        ]
      },
      {
        name: '高级',
        caseList: [
          {
            name: '多语言',
            path: 'framework/i18n'
          },
          {
            name: '主题模式（请在Android 10+下测试）',
            path: 'framework/theme-mode'
          },
          {
            name: '页面启动模式',
            path: 'framework/pagestart'
          }
        ]
      },
      {
        name: 'filter',
        caseList: [
          {
            name: '使用filter',
            path: 'framework/filter'
          }
        ]
      },
      {
        name: 'computed',
        caseList: [
          {
            name: '使用computed',
            path: 'framework/computed'
          }
        ]
      },
      {
        name: '样式与布局',
        caseList: [
          {
            name: '样式示例',
            path: 'framework/style-layout/style'
          },
          {
            name: 'less 示例',
            path: 'framework/style-layout/less'
          },
          {
            name: 'flex 布局示例',
            path: 'framework/style-layout/layout'
          },
          {
            name: 'position属性(relative/absolute/fixed)示例',
            path: 'framework/style-layout/position'
          },
          {
            name: '动态修改样式',
            path: 'framework/style-layout/update-style'
          },
          {
            name: '媒体查询 media-query',
            path: 'framework/style-layout/media-query'
          }
        ]
      },
      {
        name: '指令',
        caseList: [
          {
            name: '指令 for',
            path: 'framework/directive/for'
          },
          {
            name: '指令 if 和指令 show',
            path: 'framework/directive/if-show'
          },
          {
            name: '指令 data',
            path: 'framework/directive/data'
          },
          {
            name: '组件 block',
            path: 'framework/directive/block'
          },
          {
            name: '组件 slot',
            path: 'framework/directive/slot'
          }
        ]
      },
      {
        name: '事件监听与触发',
        caseList: [
          {
            name: '自定义事件',
            path: 'framework/events/custom-events'
          },
          {
            name: '原生组件事件',
            path: 'framework/events/native-events'
          },
          {
            name: '事件冒泡',
            path: 'framework/events/event-bubble'
          }
        ]
      },
      {
        name: '组件通信',
        caseList: [
          {
            name: '父子组件通信',
            path: 'framework/communication/parent-children'
          },
          {
            name: '兄弟组件通信',
            path: 'framework/communication/siblings'
          }
        ]
      },
      {
        name: '优化技巧',
        caseList: [
          {
            name: 'JSON.parse',
            path: 'framework/optimization/JSONparse'
          },
          {
            name: '回调函数',
            path: 'framework/optimization/bindPage'
          },
          {
            name: '动态组件',
            path: 'framework/optimization/dynaComponents'
          }
        ]
      },
      {
        name: '使用Async',
        caseList: [
          {
            name: '使用Async',
            path: 'framework/async'
          }
        ]
      }
    ]
  },
  component: {
    name: '组件',
    desc: '以下将展示快应用组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '容器组件',
        caseList: [
          {
            name: 'div',
            path: 'component/container/div'
          },
          {
            name: 'list',
            path: 'component/container/list'
          },
          {
            name: 'popup',
            path: 'component/container/popup'
          },
          {
            name: 'refresh',
            path: 'component/container/refresh'
          },
          {
            name: 'richtext',
            path: 'component/container/richtext'
          },
          {
            name: 'stack',
            path: 'component/container/stack'
          },
          {
            name: 'swiper',
            path: 'component/container/swiper'
          },
          {
            name: 'tabs',
            path: 'component/container/tabs'
          }
        ]
      },
      {
        name: '基础组件',
        caseList: [
          {
            name: 'a',
            path: 'component/basic/a'
          },
          {
            name: 'image',
            path: 'component/basic/image'
          },
          {
            name: 'image占位图属性alt示例',
            path: 'component/basic/image-alt'
          },
          {
            name: 'progress',
            path: 'component/basic/progress'
          },
          {
            name: 'rating',
            path: 'component/basic/rating'
          },
          {
            name: 'span',
            path: 'component/basic/span'
          },
          {
            name: 'text',
            path: 'component/basic/text'
          },
          {
            name: 'marquee',
            path: 'component/basic/marquee'
          }
        ]
      },
      {
        name: '表单组件',
        caseList: [
          {
            name: 'input',
            path: 'component/form/input'
          },
          {
            name: 'label',
            path: 'component/form/label'
          },
          {
            name: 'picker',
            path: 'component/form/picker'
          },
          {
            name: 'multi picker',
            path: 'component/form/multi-picker'
          },
          {
            name: 'slider',
            path: 'component/form/slider'
          },
          {
            name: 'switch',
            path: 'component/form/switch'
          },
          {
            name: 'textarea',
            path: 'component/form/textarea'
          }
        ]
      },
      {
        name: '媒体组件',
        caseList: [
          {
            name: 'canvas',
            path: 'component/media/canvas'
          },
          {
            name: 'video',
            path: 'component/media/video'
          },
          {
            name: 'audio',
            path: 'component/media/audio'
          },
          {
            name: 'web',
            path: 'component/media/web'
          },
          {
            name: 'camera',
            path: 'component/media/camera'
          }
        ]
      },
      {
        name: '第三方组件',
        caseList: [
          {
            name: 'map',
            path: 'component/thirdParty/map'
          }
        ]
      },
      {
        name: '样式动画',
        caseList: [
          {
            name: 'animation',
            path: 'component/style/animation'
          },
          {
            name: 'transform',
            path: 'component/style/transform'
          },
          {
            name: 'translate 百分比的动画',
            path: 'component/style/translatepercent'
          },
          {
            name: 'background-position 单独测试',
            path: 'component/style/backgroundposition'
          },
          {
            name: 'background-image 支持.9.png',
            path: 'component/style/background9image'
          },
          {
            name: 'font字体设置',
            path: 'component/style/font-family'
          },
          {
            name: 'animateApi',
            path: 'component/style/animateApi'
          }
        ]
      }
    ]
  },
  interface: {
    name: '接口',
    desc: '以下将展示快应用接口能力，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '基本功能',
        caseList: [
          {
            name: '页面路由',
            path: 'interface/system/router'
          },
          {
            name: '应用上下文',
            path: 'interface/system/app'
          },
          {
            name: '应用管理',
            path: 'interface/system/package'
          },
          {
            name: '禁止修改接口',
            path: 'interface/system/forbid'
          },
          {
            name: '加解密',
            path: 'interface/system/cipher'
          },
          {
            name: '适配异形屏',
            path: 'interface/system/fitCutout'
          }
        ]
      },
      {
        name: '界面交互',
        caseList: [
          {
            name: '分享',
            path: 'interface/system/share'
          },
          {
            name: '弹窗',
            path: 'interface/system/prompt'
          },
          {
            name: '打开网页',
            path: 'interface/system/webview'
          },
          {
            name: '通知消息',
            path: 'interface/system/notification'
          },
          {
            name: '震动',
            path: 'interface/system/vibrator'
          }
        ]
      },
      {
        name: '网络访问',
        caseList: [
          {
            name: '上传下载',
            path: 'interface/system/request'
          },
          {
            name: '数据请求',
            path: 'interface/system/fetch'
          },
          {
            name: 'websocket',
            path: 'interface/system/websocket'
          },
          {
            name: '原生应用通信',
            path: 'interface/system/messageChannel'
          }
        ]
      },
      {
        name: '文件数据',
        caseList: [
          {
            name: '数据存储',
            path: 'interface/system/storage'
          },
          {
            name: '应用数据共享',
            path: 'interface/system/exchange'
          },
          {
            name: '文件存储',
            path: 'interface/system/file'
          },
          {
            name: '文件读写',
            path: 'interface/system/filerw'
          },
          {
            name: '目录读写',
            path: 'interface/system/mkdir'
          }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          {
            name: '二维码',
            path: 'interface/system/qrcode'
          },
          {
            name: '传感器',
            path: 'interface/system/sensor'
          },
          {
            name: '健康数据',
            path: 'interface/system/health'
          },
          {
            name: '剪贴板',
            path: 'interface/system/clipboard'
          },
          {
            name: '地理位置',
            path: 'interface/system/geolocation'
          },
          {
            name: '桌面图标',
            path: 'interface/system/shortcut'
          },
          {
            name: '日历事件',
            path: 'interface/system/calendar'
          },
          {
            name: '网络状态',
            path: 'interface/system/network'
          },
          {
            name: '设备信息',
            path: 'interface/system/device'
          },
          {
            name: '屏幕亮度',
            path: 'interface/system/brightness'
          },
          {
            name: '电量信息',
            path: 'interface/system/battery'
          },
          {
            name: '录音',
            path: 'interface/system/record'
          },
          {
            name: '系统音量',
            path: 'interface/system/volume'
          },
          {
            name: '发送短信',
            path: 'interface/system/sms'
          },
          {
            name: '联系人',
            path: 'interface/system/contact'
          },
          {
            name: 'Wi-Fi',
            path: 'interface/system/wifi'
          },
          {
            name: '闹钟设置',
            path: 'interface/system/alarm'
          },
          {
            name: '蓝牙',
            path: 'interface/system/bluetooth'
          },
          {
            name: '读取设置',
            path: 'interface/system/setting'
          },
          {
              name: '解压文件',
              path: 'interface/system/zip'
          }
        ]
      },
      {
        name: '图形图像',
        caseList: [
          {
            name: '图片编辑',
            path: 'interface/system/image'
          },
          {
            name: '多媒体',
            path: 'interface/system/media'
          }
        ]
      },
      {
        name: '厂商服务',
        caseList: [
          {
            name: '支付',
            path: 'interface/manufacturer/pay'
          },
          {
            name: '推送',
            path: 'interface/manufacturer/push'
          },
          {
            name: '统计',
            path: 'interface/manufacturer/stats'
          },
          {
            name: '厂商帐号',
            path: 'interface/manufacturer/account'
          },
          {
            name: '广告',
            path: 'interface/manufacturer/ad'
          }
        ]
      },
      {
        name: '第三方服务',
        caseList: [
          {
            name: '微信支付',
            path: 'interface/thirdparty/wxpay'
          },
          {
            name: '支付宝支付',
            path: 'interface/thirdparty/alipay'
          },
          {
            name: '第三方分享',
            path: 'interface/thirdparty/serviceshare'
          },
          {
            name: '微信账号',
            path: 'interface/thirdparty/wxaccount'
          },
          {
            name: 'QQ账号',
            path: 'interface/thirdparty/qqaccount'
          },
          {
            name: '微博账号',
            path: 'interface/thirdparty/wbaccount'
          }
        ]
      }
    ]
  },
  scenario: {
    name: '场景',
    desc: '以下将展示快应用常见场景示例,实现某些特殊功能方案展示',
    groupList: [
      {
        name: '高阶组件',
        caseList: [
          {
            name: '细粒度划分 list-item',
            path: 'scenario/component/finegrainsize'
          },
          {
            name: '自定义titlebar',
            path: 'scenario/component/titlebar'
          },
          {
            name: '自定义statusbar',
            path: 'scenario/component/statusbar'
          },
        ]
      },
      {
        name: '高频场景',
        caseList: [
          {
            name: '电商模板',
            path: 'scenario/scene/elec-business'
          },
          {
            name: '表单示例',
            path: 'scenario/scene/form'
          },
          {
            name: '页签内容懒加载',
            path: 'scenario/scene/render-control'
          },
          {
            name: '手机验证码',
            path: 'scenario/scene/verification'
          },
          {
            name: '二维码展示',
            path: 'scenario/scene/qrcode'
          },
          {
            name: 'list联动',
            path: 'scenario/scene/listcombination'
          },
          {
            name: '顶部菜单',
            path: 'scenario/scene/menutop'
          },
          {
            name: '吸顶效果',
            path: 'scenario/scene/ceiling'
          },
          {
            name: '无障碍模式',
            path: 'scenario/scene/accessible'
          },
          {
            name: '瀑布流展示',
            path: 'scenario/scene/waterfall'
          }
        ]
      },
      {
        name: '效果展示',
        caseList: [
          {
            name: 'style数据绑定',
            path: 'scenario/effect/changestyle'
          },
          {
            name: '图片展示',
            path: 'scenario/effect/photo'
          },
          {
            name: '监听手势方向',
            path: 'scenario/effect/simulate-swipe'
          },
          {
            name: '获取元素宽高及位置',
            path: 'scenario/effect/offset'
          },
          {
            name: '组件内容导出图片',
            path: 'scenario/effect/sharepic'
          }
        ]
      },
      {
        name: 'web相关',
        caseList: [
          {
            name: '支持h5页面下载网络资源',
            path: 'scenario/web/h5download'
          },
          {
            name: 'web页面通信',
            path: 'scenario/web/postMessage'
          },
          {
            name: '自定义web页面',
            path: 'scenario/web/customWeb'
          }
        ]
      }
    ]
  }
};
