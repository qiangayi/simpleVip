var path =  {
	// 首页
	home:'pages/index/index',
	// 门店信息
	mendianxinxi: 'pages/store/info',
	// 个人中心
	gerenzhongxin: 'pages/index/mycenter',
	// 附近门店
	fujinmendian: 'pages/index/store',
	// 会员信息
	huiyuanxinxi: 'pages/menber/index',
	// 会员卡
	huiyuanka: 'pages/menber/card',
	// 积分商城
	jifenshangcheng: 'pages/mall/pointMall',
	// 积分页面
	jifen: 'pages/mall/point',
	// 商品详情
	shangpin: 'pages/mall/goodsDetail',
	// 积分兑换记录
	jifenjilu: 'pages/mall/pointRecord',
	// 优惠券列表
	kabao: 'pages/menber/conponList',
	// vip卡
	vip: 'pages/menber/vip',
	// 消费列表
	xiaofeiliebiao: 'pages/menber/history',
}
for(var key in path){
	path[key] = '/' + path[key]
}
export default path