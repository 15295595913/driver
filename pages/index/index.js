//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    carTypeArray: ["车型","荣威","桑塔纳"],
    title: '',
    videoArray: [
      {
        "id": "id1",
        "title": "车技大全1",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      },
      {
        "id": "id2",
        "title": "车技大全2",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/2.jpg"
      },
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      },
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      },
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      },
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      }
      ,
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      }
      ,
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      }
      ,
      {
        "id": "id2",
        "title": "车技大全3",
        "caption": "最牛展示 不看后悔！",
        "url": "http://www.w3school.com.cn//i/movie.mp4",
        "publishName": "舒马赫",
        "publishId": "舒马赫",
        "time": "2018-5-09 14:04:44",
        "clickNum": "339",
        "price": "888",
        "imgUrl": "/pages/common/img/1.jpg"
      }

    ],


    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindCarTypePickerChange: function(e) {//
    this.setData({
      index: e.detail.value
    });
  },
  //事件处理函数
  bindViewTap: function(options) {
    console.log(options);
    wx.navigateTo({
      url: '../detail/detail?detailId='+options.currentTarget.id
    })
  },
  onLoad: function (options) {

    //



    //
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        title: options.title
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
