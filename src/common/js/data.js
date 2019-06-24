
/**
 * 框架指令，基础数据
 */
const dataDirective = [
  {
    'name': '北京',
    'showSpots': true,
    'spots': [
      { 'name': '天安门' },
      { 'name': '八达岭' }
    ]
  },
  {
    'name': '上海',
    'showSpots': false,
    'spots': [
      { 'name': '东方明珠' }
    ]
  }
]

/**
 * list教程，细粒度划分list-item页面的数据
 */
const dataComponentListFinegrainsize = [
  {
    title: '新品上线',
    bannerImg: '/common/img/demo-large.png',
    productMini: [
      {
        img: '/common/img/demo.png',
        name: '商品1',
        brief: '商品描述信息商品描述信息1',
        price: '￥价格1'
      },
      {
        img: '/common/img/demo.png',
        name: '商品2',
        brief: '商品描述信息商品描述信息2',
        price: '￥价格2'
      }
    ],
    textHint: '更多新品'
  },
  {
    title: '商品列表',
    bannerImg: '/common/img/demo-large.png',
    productMini: [
      {
        img: '/common/img/demo.png',
        name: '商品3',
        brief: '商品描述信息商品描述信息3',
        price: '￥价格3'
      },
      {
        img: '/common/img/demo.png',
        name: '商品4',
        brief: '商品描述信息商品描述信息4',
        price: '￥价格4'
      }
    ],
    textHint: '更多商品'
  }
]

export {
  dataDirective,
  dataComponentListFinegrainsize
}