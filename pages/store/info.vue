<template>
	<scroll-view style="height: 100%;" scroll-y="true">
		<view class="content">
			<view>

				<image style="width: 100%; max-height: 180px;" :src="store.img"></image>
			</view>
			<!-- 门店信息 -->
			<view class="card">
				<view>
					<text class="card_title">{{store.name}}</text>
				</view>
				<view class="u-flex">
					<uni-rate :touchable="false" :size="18" :value="5" />
					<text>5分</text>
				</view>
				<u-line margin="10px 0" />
				<view class="u-flex">
					<view style="width: calc(100% - 100px)">
						<view class="cell_note u-line-1" v-for='note in store.note' :key='note'>
							<text>{{note}}</text>
						</view>
					</view>
					<u-line direction="col" length='45px' margin="0 10px" />
					<view class="cell_tool u-flex">
						<view class="u-flex u-row-center u-p-l-10 u-p-r-10" style="flex-direction: column;"
							v-for="item in store.tool" :key="item.text">
							<u-icon class="cell_tool_icon u-flex u-row-center" :color="item.color" :name="item.icon">
							</u-icon>
							<text>{{item.text}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 门店客服 -->
			<view class="card u-m-t-20">
				<view>
					<text class="card_title">专属客服</text>
				</view>
				<view class="u-flex u-p-t-20">
					<view class="u-flex u-p-l-10" v-for='(ser, idx) in services' :key="ser.name">
						<u-icon class="cell_avatar_icon u-flex u-row-center u-m-r-10" color="#fff" name="kefu-ermai">
						</u-icon>
						<text class="">{{ser.name}}</text>
						<u-line direction="col" length='40px' margin="0 10px" v-if="idx !== (services.length - 1)" />
					</view>
				</view>
			</view>
			<!-- 门店服务 -->
			<view class="card u-m-t-20">
				<view>
					<text class="card_title">门店服务</text>
				</view>
				<view class="u-p-t-20"
					style="display: grid; grid-template-columns: repeat(4, 25%); grid-row-gap: 10px;">
					<view class="u-flex u-p-l-10" style="flex-direction: column;" v-for='item in supply'
						:key="item.text">
						<u-icon class="u-flex u-row-center" style="font-size: 30px;" color="#000" :name="item.icon">
						</u-icon>
						<text class="">{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>

	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				// 门店
				store: {
					name: '温州世贸店',
					img: 'https://www.soeru.com/static/upload/image/20210601/1622514876170757.jpg',
					address: '温州鹿城开太百货店',
					tool: [{
							icon: 'phone-fill',
							text: '联系',
							color: '#fff'
						},
						{
							icon: 'phone-fill',
							text: '2.53KM',
							color: '#fff'
						}
					],
					note: ['鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼鹿城区开太百货三楼', '营业时间：9:00~21:30'],
				},
				services: [{
						avatar: '',
						name: '客服1'
					},
					{
						avatar: '',
						name: '客服1'
					},
				],
				supply: [{
					icon: 'weixin-circle-fill',
					text: '微信'
				}, {
					icon: 'zhifubao-circle-fill',
					text: '支付宝'
				}, {
					icon: 'rmb',
					text: '人民币'
				}, {
					icon: 'wifi',
					text: '免费无线'
				}, {
					icon: 'car',
					text: '送货上门'
				}, ]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 5px;
	}

	.card {
		border-radius: 10px;
		background: #fff;
		padding: 10px;
	}

	.card .card_title {
		font-size: 40rpx;
	}

	.card text {
		line-height: 60rpx;
	}

	.cell_tool_icon {
		height: 25px;
		width: 25px;
		border-radius: 50%;
		background-color: rgb(249, 138, 80);
	}

	.cell_avatar_icon {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: #ff9800;
		font-size: 26px;
	}
</style>
