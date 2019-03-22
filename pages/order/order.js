// pages/order/order.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    restaurant: {
      img: '../../images/hongyuan.jpg',
      name: '鸿源',
      status: '满减优惠',
      menuList: [{
        title: '热销',
        id: 'list1',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list1_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          // id: 'list1_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list1_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list1_4'
        }]
      }, {
        title: '汤锅',
        id: 'list2',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list2_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list2_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list2_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list2_4'
        }]
      }, {
        title: '干锅',
        id: 'list3',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list3_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list3_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list3_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list3_4'
        }]
      }, {
        title: '中餐',
        id: 'list4',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list4_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list4_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list4_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list4_4'
        }]
      }, {
        title: '加菜',
        id: 'list5',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list5_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list5_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list5_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list5_4'
        }]
      }, {
        title: '酒水',
        id: 'list6',
        list: [{
          img: '../../images/timg.jpeg',
          name: '示例菜品1',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list6_1'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品2',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list6_2'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品3',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list6_3'
        }, {
          img: '../../images/timg.jpeg',
          name: '示例菜品4',
          count: '1805',
          good: '173',
          price: '23.5',
          id: 'list6_4'
        }]
      }],
    },
    // 当前的tab
    currentmenu: 0,
    // 当前的left栏
    currentleftmenu: 0,
    // 侧边栏联动当前值
    currentmenuid: 'list1',
    menu1content: [{
      icon: 'iconfont icon-canshi',
      title: '催促上菜'
    }, {
      icon: 'iconfont icon-lingdang-copy',
      title: '呼叫服务员'
    }, {
      icon: 'iconfont icon-mifen2',
      title: '加米饭'
    }, {
      icon: 'iconfont icon-jiubei',
      title: '加酒水'
    }],
    cartmsg: {
      cart:[],
      allCount: null,
      allPrice: null
    },
    showShopCarContent: false,
  },

  /**
   * 改变menu选择
   */
  choose: function choose(e) {
    // console.log(e)
    this.setData({
      currentmenu: e.currentTarget.dataset.tab
    });
  },

  /**
   * 选择桌子取号
   */
  getdesk: function getdesk(e) {
    var index = e.currentTarget.dataset.desk;
    var title = null;
    if (index === '0') {
      title = '小桌选座成功！';
    } else if (index === '1') {
      title = '中桌选座成功！';
    } else {
      title = '大桌选座成功！';
    }
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 户呼叫服务
   * @param e
   */
  menu1choose: function menu1choose(e) {
    console.log(e.currentTarget.dataset.tabmenu);
    wx.showToast({
      title: '呼叫服务成功！',
      icon: 'success',
      duration: 2000
    });
  },
  
  /**
 * 改变left menu选择
 */
  leftChoose: function leftChoose(e) {
    this.setData({
      currentleftmenu: e.currentTarget.dataset.menu,
      currentmenuid: e.currentTarget.dataset.menulistid
    });
  },

  /**
   * 添加商品
   */
  addorder: function addorder(e) {
    let cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    const id = e.target.dataset.id
    const name = e.target.dataset.name
    const price = e.target.dataset.price
    const img = e.target.dataset.img

    if (!id) {
      return wx.showModal({
        title: '抱歉',
        content: '您选的菜品暂时无法提供',
        showCancel: false,
        confirmText: '我知道了'
      });
    }

    const isIncart = cartmsg.cart.some(item => item.id === id)
    if (isIncart) {
      cartmsg.cart = cartmsg.cart.map(item => {
        if (item.id === id) {
          item.count += 1;
        }
        return item;
      })
    } else {
      cartmsg.cart.push({
        id,
        img,
        name,
        price,
        count: 1
      })
      cartmsg.allCount = 1
      cartmsg.allPrice = price
    };
    cartmsg.allCount = Number(app.setCartBadge())+1
    cartmsg.allPrice = Number(app.allPrice())+Number(price)

    this.setData({
      cartmsg: {
        cart: cartmsg.cart,
        allCount: cartmsg.allCount,
        allPrice: cartmsg.allPrice
      }
    })
    wx.setStorageSync('hy-cart', JSON.stringify(cartmsg));
  },

  /**
   * 点击显示购物车
   */
  showContent: function showContent() {
    if (this.data.cartmsg.allCount < 1) {
      return wx.showToast({
        title: '您还没有点餐',
        icon: 'success',
        mask: true
      });
    }
    this.setData({
      showShopCarContent: !this.data.showShopCarContent,
    });
  },

  /**
   * 清空购物车
   */
  delAllCart() {
    wx.setStorageSync('hy-cart', JSON.stringify({
      cart: [],
      allCount: null,
      allPrice: null
    }));
    let cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    this.setData({
      cartmsg: {
        cart: cartmsg.cart,
        allCount: app.setCartBadge(),
        allPrice: app.allPrice()
      }
    })
    this.setData({
      showShopCarContent: !this.data.showShopCarContent,
    });
  },

  /**
   * 增加商品
   */
  addcartorder(e) {
    let cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    const id = e.target.dataset.cartproid
    const price = e.target.dataset.price
    cartmsg.cart = cartmsg.cart.map(item => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    })
    cartmsg.allCount = Number(app.setCartBadge()) + 1
    cartmsg.allPrice = Number(app.allPrice()) + Number(price)
    wx.setStorageSync('hy-cart', JSON.stringify(cartmsg));
    this.setData({
      cartmsg: {
        cart: cartmsg.cart,
        allCount: app.setCartBadge(),
        allPrice: app.allPrice()
      }
    })
    console.log(this.data.cartmsg)
  },

  /**
   * 减少商品
   */
  delcartorder(e) {
    let cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    const id = e.target.dataset.cartproid
    const price = e.target.dataset.price
    cartmsg.cart = cartmsg.cart.map(item => {
      if (item.id === id) {
        item.count -= 1;
      }
      return item;
    })
    cartmsg.cart = cartmsg.cart.filter(item => item.count > 0)

    // cart.map(item => {
    //   if (item.count === 0) {
    //     cart = cart.filter(item => item.id !== id)
    //   }
    // })
    cartmsg.allCount = Number(app.setCartBadge()) + 1
    cartmsg.allPrice = Number(app.allPrice()) + Number(price)
    wx.setStorageSync('hy-cart', JSON.stringify(cartmsg));
    this.setData({
      cartmsg: {
        cart: cartmsg.cart,
        allCount: app.setCartBadge(),
        allPrice: app.allPrice()
      }
    })
  },

  /**
   * 确认订单
   */
  goCheckOrder: function goCheckOrder() {
    if (this.data.cartmsg.allCount <= 0) {
      return wx.showToast({
        title: '您还没有点餐',
        icon: 'success',
        mask: true
      });
    }
    // todo 提交订单信息，然后去到确认页面
    wx.navigateTo({
      url: '../payorder/payorder'
    });
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
    let cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    this.setData({
      cartmsg: {
        cart: cartmsg.cart,
        allCount: app.setCartBadge(),
        allPrice: app.allPrice()
      }
    })
    // console.log(this.data.cartmsg)
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