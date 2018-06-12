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
            name: '唤起应用(deepLink)',
            path: 'framework/deeplink'
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
          }
        ]
      },
      {
        name: '功能示例',
        caseList: [
          {
            name: '表单',
            path: 'functionality/form'
          },
          {
            name: '手机验证码',
            path: 'functionality/verification'
          },
          {
            name: '顶部菜单',
            path: 'functionality/menutop'
          },
          {
            name: '图片展示',
            path: 'functionality/photo'
          },
          {
            name: '生成二维码',
            path: 'functionality/qrcode'
          },
          {
            name: '自定义titlebar',
            path: 'functionality/titlebar'
          },
          {
            name: 'list联动',
            path: 'functionality/listcombination'
          },
          {
            name: '监听手势方向',
            path: 'functionality/simulate-swipe'
          },
          {
            name: '吸顶效果',
            path: 'functionality/ceiling'
          },
          {
            name: '电商模板',
            path: 'functionality/template/elec-business'
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
            name:'页面路由',
            path:'interface/system/router'
          },
          {
            name:'应用上下文',
            path:'interface/system/app'
          },
          {
            name:'应用管理',
            path:'interface/system/package'
          }
        ]
      },
      {
        name: '界面交互',
        caseList: [
          {
            name:'分享',
            path:'interface/system/share'
          },
          {
            name:'弹窗',
            path:'interface/system/prompt'
          },
          {
            name:'打开网页',
            path:'interface/system/webview'
          },
          {
            name:'通知消息',
            path:'interface/system/notification'
          },
          {
            name:'震动',
            path:'interface/system/vibrator'
          }
        ]
      },
      {
        name: '网络访问',
        caseList: [
          {
            name:'上传下载',
            path:'interface/system/request'
          },
          {
            name:'数据请求',
            path:'interface/system/fetch'
          }
        ]
      },
      {
        name: '文件数据',
        caseList: [
          {
            name:'数据存储',
            path:'interface/system/storage'
          },
          {
            name:'文件存储',
            path:'interface/system/file'
          }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          {
            name:'二维码',
            path:'interface/system/qrcode'
          },
          {
            name:'传感器',
            path:'interface/system/sensor'
          },
          {
            name:'剪贴板',
            path:'interface/system/clipboard'
          },
          {
            name:'地理位置',
            path:'interface/system/geolocation'
          },
          {
            name:'桌面图标',
            path:'interface/system/shortcut'
          },
          {
            name:'日历事件',
            path:'interface/system/calendar'
          },
          {
            name:'网络状态',
            path:'interface/system/network'
          },
          {
            name:'设备信息',
            path:'interface/system/device'
          },
          {
            name:'屏幕亮度',
            path:'interface/system/brightness'
          },
          {
            name:'电量信息',
            path:'interface/system/battery'
          },
          {
            name:'录音',
            path:'interface/system/record'
          },
          {
            name:'系统音量',
            path:'interface/system/volume'
          }
        ]
      },
      {
        name: '图形图像',
        caseList: [
          {
            name:'图片编辑',
            path:'interface/system/image'
          },
          {
            name:'多媒体',
            path:'interface/system/media'
          }
        ]
      },
      {
        name: '第三方服务',
        caseList: [
          {
            name:'微信支付',
            path:'interface/thirdparty/wxpay'
          },
          {
            name:'支付宝支付',
            path:'interface/thirdparty/alipay'
          },
          {
            name:'第三方分享',
            path:'interface/thirdparty/serviceshare'
          }
        ]
      }
    ]
  }
}