<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<view class="content">
			<view class="title">
				{{title}}
			</view>
			<!-- 会员资料 -->
			<view class="vip card u-flex-c u-row-between" style="align-items: unset;">
				<view class="u-flex u-row-between u-col-top u-p-t-20">
					<view class="u-flex u-p-l-20" @click="pageChange($glpath.huiyuanxinxi)">
						<u-avatar class="u-p-r-30"></u-avatar>
						<view class="u-flex-c">
							<text style="margin-bottom: 5px;">{{userInfo.name}}</text>
							<text>{{userInfo.level}}</text>
						</view>
					</view>
					<view class="u-m-r-20 u-flex qrcode" @click="pageChange($glpath.huiyuanka)">
						<u-icon name="qrcode" custom-prefix="custom-icon" size="32"></u-icon>
						<text style="vertical-align: top;">会员码</text>
					</view>
				</view>
				<view class="u-flex u-row-around currency">
					<view class="u-flex-c" @click="pageChange($glpath.jifen)">
						<text>{{wallet.point}}</text>
						<text>积分</text>
					</view>
					<view class="u-flex-c" @click="pageChange($glpath.kabao)">
						<text>500</text>
						<text>优惠券</text>
					</view>
					<view class="u-flex-c" @click="pageChange($glpath.vip)">
						<text>{{wallet.money}}</text>
						<text>储值</text>
					</view>
				</view>
			</view>
			<!-- 功能模块按钮 -->
			<view class="modules u-m-t-20 u-p-t-20 u-p-b-20">
				<view class="u-flex-c" v-for="btn in moduleBtns" :key="btn.name" @click="pageChange(btn.to)">
					<u-icon :name="btn.icon" custom-prefix="custom-icon" size="60"></u-icon>
					<text>{{btn.name}}</text>
				</view>
			</view>
			<view style="width: 720rpx; margin: 0 auto">
				
	<u-image width="100%" style="margin: 0 auto;" height="600rpx" :src="'https://img0.baidu.com/it/u=4148571680,187696234&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=725'"></u-image>
			</view>
	
		</view>
			<!--  -->
	</scroll-view>
	<u-tabbar :list="tabbar"></u-tabbar>

</template>

<script>
	import {
		userState
	} from '@/hooks/user.js'
	import {
		loginState,
		loginActions
	} from '@/hooks/login.js'

	import {
		ref,
		reactive,
		onMounted,
		computed,
		getCurrentInstance
	} from 'vue'
	export default {
		setup(props, {
			emit
		}) {
			const gobal = getCurrentInstance().appContext.config.globalProperties
			// var myuserState = userState()
			// const storeState = useState('login', ['tabbar', 'userInfo', 'wallet'])
			// const storeActions = useActions('login', ['pageChange'])
			// const userInfo = storeState['userInfo']
			// const wallet = storeState['wallet'].value
			const title = ref('个人中心')
			// const user = ref(userInfo)
			// const userWallet = ref(userInfo)
			console.log("gobal:", gobal)
			const moduleBtns = [{
					icon: 'card',
					name: '个人资料',
					to: gobal.$glpath.huiyuanxinxi
				},
				{
					icon: 'fahuo',
					name: '附近门店',
					to: gobal.$glpath.fujinmendian
				},
				{
					icon: 'quanyi',
					name: '会员权益',
					to: gobal.$glpath.huiyuanka
				},
				{
					icon: 'youhuiquan',
					name: '优惠券',
					to: gobal.$glpath.kabao
				},
				// {
				// 	icon: 'pingjia',
				// 	name: '积分兑换',
				// 	to: gobal.$glpath.jifenshangcheng
				// },
				{
					icon: 'liebiao',
					name: '消费列表',
					to: gobal.$glpath.xiaofeiliebiao
				},
				{
					icon: 'jifen',
					name: '会员积分',
					to: gobal.$glpath.jifen
				}
			]
			reactive(moduleBtns)



			onMounted(() => {

			})

			return {
				...userState(),
				...loginState(),
				...loginActions(),
				title,
				moduleBtns
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// padding: 5px;
		padding-bottom: 50px;
	}

	.title {
		font-size: 40rpx;
		text-align: center;
		padding: 10px 0;
	}

	.card {
		border-radius: 10px;
	}

	.vip {
		height: 180px;
		background: url(../../static/vip.jpeg) no-repeat;
		background-size: cover;
		position: relative;
		color: #fff;
		margin: 0 5px;
	}

	.qrcode {
		padding: 1px 3px;
		background: rgb(204 204 204 / 0.5);
		border-radius: 10px;
	}

	.currency {
		padding: 20px 10px;
		font-size: 32rpx;
	}

	.order {
		background: #fff;
		line-height: 26px;
	}

	.modules {
		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-row-gap: 20px;
		background-color: #fff;
	}
</style>
