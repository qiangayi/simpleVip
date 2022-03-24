// ajax.js

import ajax from '@/uni_modules/u-ajax/js_sdk' // 引入 uni-ajax 模块



// 创建请求实例
const instance = ajax.create({
	// 初始配置
	baseURL: 'http://118.190.203.87:100/dbhweb/java/box_hyj.jsp',
	header: {
		'content-type': 'application/x-www-form-urlencoded'
	},
	// header: {
	//    prior: 7,
	//    get: { prior: 4 },
	//    common: { prior: 1 }
	//  }
})

// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		console.log("发送消息:",JSON.parse(JSON.stringify(config.data)))
		// 在发送请求前做些什么
		if(config.data.json){
			config.data.json = encodeURIComponent(config.data.json)
		}
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		// 错误编码 code
		// -1 用户未注册
		console.log("接收消息:",response.data)
		// 对响应数据做些什么
		if(response.statusCode == 200){
			return response.data
		}
		return response
	},
	error => {
		// 对响应错误做些什么
		return Promise.reject(error)
	}
)

// 导出 create 创建后的实例
export default instance
