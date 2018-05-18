const tabsData = {
  component: {
    name: '组件',
    desc: '以下将展示快应用组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '容器组件',
        caseList: [
          {
            name: 'div',
            path: 'Component_Div'
          },
          {
            name: 'list',
            path: 'Component_List'
          },
          {
            name: 'popup',
            path: 'Component_Popup'
          },
          {
            name: 'refresh',
            path: 'Component_Refresh'
          },
          {
            name: 'richtext',
            path: 'Component_Richtext'
          },
          {
            name: 'stack',
            path: 'Component_Stack'
          },
          {
            name: 'swiper',
            path: 'Component_Swiper'
          },
          {
            name: 'tabs',
            path: 'Component_Tabs'
          }
        ]
      },
      {
        name: '基础组件',
        caseList: [
          {
            name: 'a',
            path: 'Component_A'
          },
          {
            name: 'image',
            path: 'Component_Image'
          },
          {
            name: 'progress',
            path: 'Component_Progress'
          },
          {
            name: 'rating',
            path: 'Component_Rating'
          },
          {
            name: 'span',
            path: 'Component_Span'
          },
          {
            name: 'text',
            path: 'Component_Text'
          }
        ]
      },
      {
        name: '表单组件',
        caseList: [
          {
            name: 'input',
            path: 'Component_Input'
          },
          {
            name: 'label',
            path: 'Component_Label'
          },
          {
            name: 'picker',
            path: 'Component_Picker'
          },
          {
            name: 'slider',
            path: 'Component_Slider'
          },
          {
            name: 'switch',
            path: 'Component_Switch'
          },
          {
            name: 'textarea',
            path: 'Component_Textarea'
          }
        ]
      },
      {
        name: '媒体组件',
        caseList: [
          {
            name: 'video',
            path: 'Component_Video'
          },
          {
            name: 'audio',
            path: 'Component_Audio'
          }
        ]
      },
      {
        name: '其他',
        caseList: [
          {
            name: 'web',
            path: 'Component_Web'
          },
          {
            name: 'animation',
            path: 'Style_Animation'
          },
          {
            name: 'transform',
            path: 'Style_Transform'
          }
        ]
      },
      {
        name: '框架',
        caseList: [
          {
            name: '页面生命周期',
            path: 'Framework_Lifecycle'
          },
          {
            name: '唤起应用(deepLink)',
            path: 'Framework_DeepLink'
          }
        ]
      },
      {
        name: 'JSX',
        caseList: [
          {
            name: 'binding',
            path: 'JSX_binding'
          },
          {
            name: 'if',
            path: 'JSX_If'
          },
          {
            name: 'for',
            path: 'JSX_For'
          },
          {
            name: 'complex',
            path: 'JSX_Complex'
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
            path:'Interface_Router'
          },
          {
            name:'应用上下文',
            path:'Interface_App'
          },
          {
            name:'应用管理',
            path:'Interface_Package'
          }
        ]
      },
      {
        name: '界面交互',
        caseList: [
          {
            name:'分享',
            path:'Interface_Share'
          },
          {
            name:'弹窗',
            path:'Interface_Prompt'
          },
          {
            name:'打开网页',
            path:'Interface_Webview'
          },
          {
            name:'通知消息',
            path:'Interface_Notification'
          },
          {
            name:'震动',
            path:'Interface_Vibrator'
          }
        ]
      },
      {
        name: '网络访问',
        caseList: [
          {
            name:'上传下载',
            path:'Interface_Request'
          },
          {
            name:'数据请求',
            path:'Interface_Fetch'
          }
        ]
      },
      {
        name: '文件数据',
        caseList: [
          {
            name:'数据存储',
            path:'Interface_Storage'
          },
          {
            name:'文件存储',
            path:'Interface_File'
          }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          {
            name:'二维码',
            path:'Interface_QRCode'
          },
          {
            name:'传感器',
            path:'Interface_Sensor'
          },
          {
            name:'剪贴板',
            path:'Interface_Clipboard'
          },
          {
            name:'地理位置',
            path:'Interface_Geolocation'
          },
          {
            name:'桌面图标',
            path:'Interface_Shortcut'
          },
          {
            name:'日历事件',
            path:'Interface_Calendar'
          },
          {
            name:'网络状态',
            path:'Interface_Network'
          },
          {
            name:'设备信息',
            path:'Interface_Device'
          },
          {
            name:'屏幕亮度',
            path:'Interface_Brightness'
          },
          {
            name:'电量信息',
            path:'Interface_Battery'
          },
          {
            name:'录音',
            path:'Interface_Record'
          },
          {
            name:'系统音量',
            path:'Interface_Volume'
          }
        ]
      },
      {
        name: '图形图像',
        caseList: [
          {
            name:'图片编辑',
            path:'Interface_Image'
          },
          {
            name:'多媒体',
            path:'Interface_Media'
          }
        ]
      },
      {
        name: '厂商服务',
        caseList: [
          {
            name:'推送',
            path:'Interface_Push'
          },
          {
            name:'账号',
            path:'Service_Account'
          },
          {
            name:'支付',
            path:'Interface_Pay'
          },
          {
            name:'统计',
            path:'Service_Stats'
          }
        ]
      },
      {
        name: '第三方服务',
        caseList: [
          {
            name:'微信支付',
            path:'Interface_Wxpay'
          },
          {
            name:'支付宝支付',
            path:'Interface_Alipay'
          },
          {
            name:'第三方分享',
            path:'Interface_Serviceshare'
          }
        ]
      }
    ]
  }
}

export {
  tabsData
}
