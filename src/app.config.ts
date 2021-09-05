export default {
  pages: [
    'pages/launch/Launch',
    'pages/home/Home',
    'pages/write/Write'
  ],
  tabBar: {
    list: [{
      iconPath: 'static/icon/list-normal.png',
      selectedIconPath: 'static/icon/list-selected.png',
      pagePath: 'pages/home/Home',
      text: '日记本'
    }, {
      iconPath: 'static/icon/write-normal.png',
      selectedIconPath: 'static/icon/write-selected.png',
      pagePath: 'pages/write/Write',
      text: '记录'
    }, {
      iconPath: 'static/icon/mine-normal.png',
      selectedIconPath: 'static/icon/mine-selected.png',
      pagePath: 'pages/home/Home',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#11999e',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
