<template>
	<scroll-view scroll-y="true" style="height: 100%">
		<view>
			<u-image :src="data.img" height="600rpx">
			</u-image>
		</view>

		<u-card :show-head="false" :show-foot="false">
			<view slot="body">
				<view class="u-flex-c u-col-top">
					<text class="u-font-xl">{{data.title}}</text>
					<text class="u-font-lg u-type-error">{{data.price}}积分</text>
				</view>
			</view>
		</u-card>

		<u-card :show-head="false" :show-foot="false">
			<view slot="body">
				<view class=" u-border-bottom u-p-b-20">
					<view class="detail_title u-font-xl">卡券类型</view>
					<text class="u-font-lg">兑换券</text>
				</view>
				<view class=" u-border-bottom u-p-b-20">
					<view class="detail_title u-font-xl">卡券有效期</view>
					<text class="u-font-lg">领取后90天内有效</text>
				</view>
				<view class=" u-border-bottom u-p-b-20">
					<view class="detail_title u-font-xl">使用门槛</view>
					<text class="u-font-lg">仅线上门店使用</text>
				</view>
				<view class=" u-border-bottom u-p-b-20">
					<view class="detail_title u-font-xl">适用商品</view>
					<text class="u-font-lg">指定商品适用</text>
				</view>
				<view class=" u-border-bottom u-p-b-20">
					<view class="detail_title u-font-xl">使用说明</view>
					<text class="u-font-lg">此券为积分兑换，不兑现，不找零</text>
				</view>
			</view>
		</u-card>
	</scroll-view>
	<view class="toolbar u-flex u-row-between">
		<view class="u-flex-c u-col-top">
			<text class="u-font-xl u-type-error">{{data.price}}积分</text>
			<text class="u-font-xl">当前可用积分：500</text>
		</view>
		<u-button type="primary" shape="square">立即购买</u-button>
	</view>
</template>

<script>
	import {
		ref,
		onMounted,
		reactive
	} from 'vue'
	export default {
		setup(props, {
			emit
		}) {
			const data = {
				title: '积分兑换商品',
				price: '500',
				img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
				id: 1
			}
			reactive(data)
			return {
				data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail_title {
		padding-left: 20rpx;
		position: relative;
		line-height: 60rpx;
	}

	.detail_title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		height: 30rpx;
		width: 5rpx;
		border-radius: 5rpx;

		background-color: $u-type-error;
	}

	.toolbar {
		background: #fff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		padding: 20rpx;
	}
</style>
