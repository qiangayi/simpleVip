<template>
	<scroll-view scroll-y="true" style="height: 100%;">
	<view class="content">
		<list>
			<!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
			<cell v-for="(item, index) in storeList" :key="item.id">
				<view class="cell_container">
					<image style="width: 100px; height: 60px; flex-shrink: 0;" :src="item.thumb"></image>
					<view class="cell_content">
						<view class="cell_title_content">
							<text class="cell_title">{{item.name}}</text>
							<text class="cell_right">{{item.right}}</text>
						</view>
						<view class="cell_note u-line-1">
							<text>{{item.phone}}</text>
							<u-icon @click="callPhone(item.phone)" name="phone-fill"></u-icon>
						</view>
						<view class="cell_note u-line-1">
							<text>{{item.address}}</text>
						</view>
						<view class="cell_note u-line-1">
							<text>{{item.busHours}}</text>
						</view>
					</view>
				</view>
			</cell>
		</list>
	</view>
	</scroll-view>
	<u-tabbar :list="tabbar"></u-tabbar>

</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		useState
	} from '@/utils/vuexmap/useState'
	import {
		ref,
		reactive,
		onMounted,
		computed,
		getCurrentInstance
	} from 'vue'
	import {
		getStoreList
	} from '../../api/store.js'
	import {
		onShow,
		onReady
	} from '@dcloudio/uni-app'
	export default {
		setup(props, {
			emit
		}) {
			const storeState = useState('login', ['userInfo', 'tabbar'])
			const {
				openId
			} = storeState['userInfo'].value

			// 获取门店列表
			let storeList = ref(null)
			const getStore = () => {
				getStoreList(openId).then(res => {
					const {
						data
					} = res
					storeList.value = data
				}).catch(err => {
					console.log(err)
				})

			}

			// 拨打电话
			const callPhone = (phoneNumber) => {
				uni.showModal({
					title: '提示',
					content: `是否拨打电话${phoneNumber}?`
				}).then(res => {
					if (res.confirm) {
						uni.makePhoneCall({
							phoneNumber //仅为示例
						});
					}
				})
			}
			onShow(() => {
				getStore()
			})
			return {
				...storeState,
				storeList,
				callPhone
			}
		},
		// data() {
		// 	return {
		// 		title: '附近的门店',
		// 		dataList: [{
		// 			thumb: 'https://www.soeru.com/static/upload/image/20210601/1622514876170757.jpg',
		// 			title: '温州鹿城开太百货店',
		// 			note: ['鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼', '营业时间：9:00~21:30'],
		// 			right: '3.6km'
		// 		}, {
		// 			thumb: 'https://www.soeru.com/static/upload/image/20210601/1622514876170757.jpg',
		// 			title: '温州鹿城开太百货店',
		// 			note: ['鹿城区开太百货三楼', '营业时间：9:00~21:30'],
		// 			right: '3.6km'
		// 		}, ]
		// 	}
		// },
		// computed: {
		// 	...mapState('login', ['tabbar']),
		// },
		// onLoad() {

		// },
		// methods: {

		// }
	}
</script>

<style lang="scss">
	.content {
		padding: 5px;
		padding-bottom: 50px;
	}

	.cell_container {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		margin-bottom: 10px;
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
		padding: 10px;
	}

	.cell_content {
		flex-grow: 1;
		padding-left: 10px;
		font-size: 26rpx;
		color: $u-tips-color;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: calc(100% - 120px);
	}

	.cell_content .cell_title_content {
		display: flex;
		justify-content: space-between;
	}

	.cell_content .cell_title_content .cell_title {
		color: $u-main-color;
		font-si: 32rpx;
	}
</style>
