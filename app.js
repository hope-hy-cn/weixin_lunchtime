App({
  onLaunch: function () {
    this.setCartBadge()
    this.allPrice()
  },
  setCartBadge() {
    const cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    const total = cartmsg.cart.reduce((result, current) => {
      result += current.count;
      return result;
    }, 0)
    const totalText = total > 99 ? '99+' : total.toString();
    
    return totalText;
  },
  allPrice() {
    const cartmsg = wx.getStorageSync('hy-cart') ? JSON.parse(wx.getStorageSync('hy-cart')) : {
      cart: [],
      allCount: null,
      allPrice: null
    };
    const price = cartmsg.cart.reduce((result, current) => {
      result += current.price * current.count;
      return result;
    }, 0)
    return price;
  }
})