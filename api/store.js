
export let getStoreList = function (openid, page = 1, toline = 20, city = ""){
	let json =
		`{"method":"xcx_getstorelist","params":{"openid": "${openid}", "nowpage": "${page}", "totline": "${toline}", "citycode": "${city}" }}`
	return uni.$ajax.post('', {json})
}

// export default {
// 	getStoreList
// }