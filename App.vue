<script>
	import {
		mapActions
	} from 'vuex';
	import {useActions} from '@/utils/vuexmap/useActions'
	import { onShow,onLaunch } from '@dcloudio/uni-app'  
	export default {
		onLaunch: function() {
			// 小程序登录
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		setup(){
			const storeActions = useActions('login', ['toLogin'])
			
			onLaunch(() => {
				console.log("onlaunch")
				wx.login().then(res => {
					// tabbar测试数据
					storeActions.toLogin()
				})
			})
			
			return {
				...storeActions
			}
		},
		// methods:{			
		// 		...mapActions('login', ['toLogin']),
		// }
	}
</script>

<style>
	/*每个页面公共css */
</style>
<style lang="scss">
	// 放在前面，不然会覆盖其他样式
	.u-flex-c{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
    @import "./uni_modules/vk-uview-ui/index.scss";
	@import "./static/iconfont.css";
	@import "./static/common.css";
	page{
		background: $u-bg-color;
		height: 100vh; 
		width: 100%;
		overflow: hidden;
	}
</style>
