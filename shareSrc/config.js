const ip="http://wx.ez4s.com/easyshare-client/";
const Api={
	/*微信配置信息**/
	wxConfig:"http://wx.ez4s.com/easyshare-client/weixin/jsApi.json",
	/*获取全部商品*/
	products:ip+"product/manager.json",
	/**获取商品详情*/
	detail:ip+"product/manager/",
	/**确认订单**/
	confirm:ip+"order.json",
	/**微信支付**/
	wxPay:"http://wx.ez4s.com/easyshare-client/pay/tenpay/pay.json",
	/**支付宝支付**/
	zfbPay:"http://wx.ez4s.com/easyshare-client/pay/alipay/pay.json",
	/**添加收货地址*/
	address:ip+"orderAddress.json",
	/**修改收货地址*/
	addressEdit:ip+"orderAddress/",
 	/*设置收货地址为默认*/
  	defaultSet:ip+"orderAddress/setDefault.json",
	/**取消订单*/
	cancelOrder:ip+"order/cancelOrder.json",
	/*查看物流**/
	express:ip+"express.json",
	/*申请售后**/
	save:ip+"aftersale/save.json",
	/**售后详情*/
	customer:ip+"aftersale/customer/",
	/**获取订单*/
	order:ip+"order.json",
	/**获取订单详情**/
	orderDetail:ip+"order/",
  	/**售后时 查询所需信息*/
  	detailSimple:ip+"order/detail/",
	/*申请售后信息*/
	afterMarket:ip+"api/afterMarket",
	/**获取售后详情*/
	afterDetail:ip+"api/afterDetail",
  	/**取消售后*/
  	cancelAfter:ip+"aftersale/cancle.json",
	/**上传图片*/
	upload:ip+"image/uploadAfterSale.json",
	/**删除上传图片*/
	uploadDel:ip+"image/delete.json",
  	/**获取分享code*/
  	shareCode:ip+"link.json",
	/**获取分润订单**/
	profit:ip+"order/profit.json",
  	/**获取累计收益*/
  	income:ip+"/member/balance/",
 	/**提现*/
  	redPack:ip+"/pay/sendRedpack.json",
  	/*体现记录*/
  	drawCash:ip+"/withdrawCash.json",
	/**获取个人信息*/
	info:ip+"/member/",
	/**获取地址列表*/
	adds:ip+"orderAddress.json",
	/*获取省市区**/
	area:ip+"product/area.json",
}


export {Api,ip}