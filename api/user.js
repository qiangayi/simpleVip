// 获取用户信息
export let getUser = function (openid){
	let json =
		`{"method":"xcx_getuserinfo","params":{"openid": "${openid}" }}`
	return uni.$ajax.post('', {json})
}

// 获取优惠券列表
export let getConponList = function (openid, type = '', status = ''){
	 // { "type": "类型，可为空，1、折扣券，2、现金券", "status": "状态，可为空, 0、未使用，1、已使用，2、已失效", "openid": "11" } }
	let json = `{ "method": "xcx_getcouponlist", "params": { "openid": "${openid}", "type": "${type}", "status": "${status}" } }`
	return uni.$ajax.post('', {json})
}

// 获取消费变动记录
export let getOrderList = function (openid, year, month, nowpage, toline){
	 // 年,如果年为空，月不为空，则年默认为当年，年月都为空，则显示所有
	 // status 1、交易完成，2、退货
	let json = `{ "method": "xcx_getorderlist", "params": { "openid": "${openid}", "year": "${year}", "month": "${month}", "status": "", "nowpage": "${nowpage}", "totline": "${toline}" } }`
	return uni.$ajax.post('', {json})
}

// 获取消费变动记录
export let getWalletList = function (openid, type, year, month, nowpage, toline){
	// type 1、积分，2、储值
	 // 年,如果年为空，月不为空，则年默认为当年，年月都为空，则显示所有
	 // status 1、交易完成，2、退货
	let json = `{ "method": "xcx_getwalletlist", "params": { "openid": "${openid}", "type": "${type}", "year": "${year}", "month": "${month}", "status": "", "nowpage": "${nowpage}", "totline": "${toline}" } }`
	console.log(json)
	return uni.$ajax.post('', {json})
}