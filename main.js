import App from './App'
import store from './store'
import {
	createSSRApp
} from 'vue'
// 引入 uView UI
import uView from './uni_modules/vk-uview-ui';
import path from './utils/path.js'
import ajax from './utils/ajax.js'



export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	// 使用 uView UI
	app.use(uView)
	uni.$ajax = ajax
	
	// 全局页面路径
	app.config.globalProperties.$glpath = path
	// 挂在一个全局promise在原型上
	app.config.globalProperties.$onLaunched = new Promise(resolve => {
		app.config.globalProperties.$isResolve = resolve
	})
	return {
		app
	}
}
