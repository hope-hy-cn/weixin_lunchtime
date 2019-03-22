// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentCity:'定位中...',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    imgUrls: [
      '../../images/swiper1.jpg',
      '../../images/swiper2.jpg',
    ],
    title: 'detail',
    detailRules: '如有疑问，烦请来电咨询',
    waitInfo: [{
      kind: '类型',
      number: '是否需要预定'
    }, {
      kind: '干锅',
      number: '不需要'
    }, {
      kind: '中餐',
      number: '需要'
    }, {
      kind: '汤锅',
      number: '部分需要'
    }],
    restaurant: {
      img: '../../images/hongyuan.jpg',
      name: '鸿源',
      distance: '218',
      grade: 'five-star',
      address: 'SOHO沸城B座2号楼1201号',
      tel: '17628236543',
      time: '10:00-22:00'
    }
  },

  /**
   * 用户选择位置
   */
  chooseLocation: function chooseLocation() {
    var _this = this;
    wx.chooseLocation({
      success: function success(res) {
        const lat1 = res.latitude
        const lng1 = res.longitude
        const Distance = _this.GetDistance(lat1, lng1, 30.623632, 104.076424)
        _this.setData({
          restaurant: { ..._this.data.restaurant, distance: Distance }
        })
        if (res.name.length <= 0) {
          return _this.setData({
            currentCity: res.address
          });
        }
        _this.setData({
          currentCity: res.name
        });
      }
    });
  },

  /**
     * 拨打电话
     */
  callPhone: function callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.restaurant.tel
    });
  },

  //计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
  GetDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
    var b = lng1 * Math.PI / 180.0 - lng1 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;// EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    s=s.toFixed(2);
    return s;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: (res) => {
        const lat1 = res.latitude
        const lng1 = res.longitude
        const Distance = this.GetDistance(lat1, lng1, 30.623632, 104.076424)
        this.setData ({
          restaurant: { ...this.data.restaurant, distance: Distance}
        })
        const {
          latitude,
          longitude
        } = res
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=F5FBZ-IPVCI-TYPGU-5BFGT-WZND6-KIFAG&get_poi=1`,
          success: (res) => {
            // console.log(res)
            this.setData({
              currentCity: res.data.result.address
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})