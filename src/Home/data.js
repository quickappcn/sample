export const tabsData = {
  component: {
    name: '组件',
    desc: '以下将展示快应用组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '容器组件',
        caseList: [
          {
            name: 'div',
            path: 'Component/Container/Div'
          },
          {
            name: 'list',
            path: 'Component/Container/List'
          },
          {
            name: 'popup',
            path: 'Component/Container/Popup'
          },
          {
            name: 'refresh',
            path: 'Component/Container/Refresh'
          },
          {
            name: 'richtext',
            path: 'Component/Container/Richtext'
          },
          {
            name: 'stack',
            path: 'Component/Container/Stack'
          },
          {
            name: 'swiper',
            path: 'Component/Container/Swiper'
          },
          {
            name: 'tabs',
            path: 'Component/Container/Tabs'
          }
        ]
      },
      {
        name: '基础组件',
        caseList: [
          {
            name: 'a',
            path: 'Component/Basic/A'
          },
          {
            name: 'image',
            path: 'Component/Basic/Image'
          },
          {
            name: 'progress',
            path: 'Component/Basic/Progress'
          },
          {
            name: 'rating',
            path: 'Component/Basic/Rating'
          },
          {
            name: 'span',
            path: 'Component/Basic/Span'
          },
          {
            name: 'text',
            path: 'Component/Basic/Text'
          }
        ]
      },
      {
        name: '表单组件',
        caseList: [
          {
            name: 'input',
            path: 'Component/Form/Input'
          },
          {
            name: 'label',
            path: 'Component/Form/Label'
          },
          {
            name: 'picker',
            path: 'Component/Form/Picker'
          },
          {
            name: 'slider',
            path: 'Component/Form/Slider'
          },
          {
            name: 'switch',
            path: 'Component/Form/Switch'
          },
          {
            name: 'textarea',
            path: 'Component/Form/Textarea'
          }
        ]
      },
      {
        name: '媒体组件',
        caseList: [
          {
            name: 'video',
            path: 'Component/Media/Video'
          },
          {
            name: 'audio',
            path: 'Component/Media/Audio'
          },
          {
            name: 'web',
            path: 'Component/Media/Web'
          }
        ]
      },
      {
        name: '样式动画',
        caseList: [
          {
            name: 'animation',
            path: 'Component/Style/Animation'
          },
          {
            name: 'transform',
            path: 'Component/Style/Transform'
          }
        ]
      },
      {
        name: '框架',
        caseList: [
          {
            name: '页面生命周期',
            path: 'Framework/Lifecycle'
          },
          {
            name: '唤起应用(deepLink)',
            path: 'Framework/DeepLink'
          }
        ]
      },
      {
        name: '功能示例',
        caseList: [
          {
            name: '表单',
            path: 'Functionality/form'
          },
          {
            name: '手机验证码',
            path: 'Functionality/verification'
          },
          {
            name: '顶部菜单',
            path: 'Functionality/menutop'
          },
          {
            name: '图片展示',
            path: 'Functionality/photo'
          },
          {
            name: '生成二维码',
            path: 'Functionality/qrcode'
          },
          {
            name: '自定义titlebar',
            path: 'Functionality/titlebar'
          },
          {
            name: 'list联动',
            path: 'Functionality/listcombination/demo1'
          },
          {
            name: '监听手势方向',
            path: 'Functionality/simulateSwipe'
          },
          {
            name: '吸顶效果',
            path: 'Functionality/ceiling'
          },
          {
            name: '电商模板',
            path: 'Functionality/template/elec_business'
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
            path:'Interface/System/Router'
          },
          {
            name:'应用上下文',
            path:'Interface/System/App'
          },
          {
            name:'应用管理',
            path:'Interface/System/Package'
          }
        ]
      },
      {
        name: '界面交互',
        caseList: [
          {
            name:'分享',
            path:'Interface/System/Share'
          },
          {
            name:'弹窗',
            path:'Interface/System/Prompt'
          },
          {
            name:'打开网页',
            path:'Interface/System/Webview'
          },
          {
            name:'通知消息',
            path:'Interface/System/Notification'
          },
          {
            name:'震动',
            path:'Interface/System/Vibrator'
          }
        ]
      },
      {
        name: '网络访问',
        caseList: [
          {
            name:'上传下载',
            path:'Interface/System/Request'
          },
          {
            name:'数据请求',
            path:'Interface/System/Fetch'
          }
        ]
      },
      {
        name: '文件数据',
        caseList: [
          {
            name:'数据存储',
            path:'Interface/System/Storage'
          },
          {
            name:'文件存储',
            path:'Interface/System/File'
          }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          {
            name:'二维码',
            path:'Interface/System/QRCode'
          },
          {
            name:'传感器',
            path:'Interface/System/Sensor'
          },
          {
            name:'剪贴板',
            path:'Interface/System/Clipboard'
          },
          {
            name:'地理位置',
            path:'Interface/System/Geolocation'
          },
          {
            name:'桌面图标',
            path:'Interface/System/Shortcut'
          },
          {
            name:'日历事件',
            path:'Interface/System/Calendar'
          },
          {
            name:'网络状态',
            path:'Interface/System/Network'
          },
          {
            name:'设备信息',
            path:'Interface/System/Device'
          },
          {
            name:'屏幕亮度',
            path:'Interface/System/Brightness'
          },
          {
            name:'电量信息',
            path:'Interface/System/Battery'
          },
          {
            name:'录音',
            path:'Interface/System/Record'
          },
          {
            name:'系统音量',
            path:'Interface/System/Volume'
          }
        ]
      },
      {
        name: '图形图像',
        caseList: [
          {
            name:'图片编辑',
            path:'Interface/System/Image'
          },
          {
            name:'多媒体',
            path:'Interface/System/Media'
          }
        ]
      },
      {
        name: '厂商服务',
        caseList: [
          {
            name:'推送',
            path:'Interface/VendorService/Push'
          },
          {
            name:'账号',
            path:'Interface/VendorService/Account'
          },
          {
            name:'支付',
            path:'Interface/VendorService/Pay'
          }
        ]
      },
      {
        name: '第三方服务',
        caseList: [
          {
            name:'微信支付',
            path:'Interface/ThirdParty/Wxpay'
          },
          {
            name:'支付宝支付',
            path:'Interface/ThirdParty/Alipay'
          },
          {
            name:'第三方分享',
            path:'Interface/ThirdParty/Serviceshare'
          }
        ]
      }
    ]
  }
}