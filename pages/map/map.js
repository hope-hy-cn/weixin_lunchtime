// pages/map/map.js
Page({
  markertap(e) {
    console.log(e)
    const {
      latitude,
      longitude
    } = this.data.markers.filter(item => item.id === e.markerId)[0]
    wx.openLocation({
      latitude,
      longitude,
      scale: '15',
      name: '鸿源',
      address: 'SOHO沸城B座2号楼1201号'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '/icons/Location1.png',
      id: 10,
      latitude: 30.623632,
      longitude: 104.076424,
      width: 50,
      height: 50
    }]
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