class Ajax {
  get(url) {
    // wx.showLoading({
    //   title: '加载中…',
    //   mask: true
    // })
    wx.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'GET',
        success: function (res) {
          resolve(res)
         },
        fail: function (res) {
          reject(res)
         },
        complete: function (res) {
          // wx.hideLoading()
          wx.hideNavigationBarLoading()
        },
      })
    })
  }
}
export default new Ajax()