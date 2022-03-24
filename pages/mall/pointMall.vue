<template>
	<scroll-view style="height: 100%;" scroll-y="true">
		<view class="banner u-flex-c u-row-between u-col-top">
			<view class="u-flex-c u-col-top">
				<text class="u-font-lg">可用积分</text>
				<text style="font-size: 60rpx; ">500</text>
			</view>
			<view class="u-flex u-font-xl detail">
				<text @click="pageChange($glpath.jifen)">积分明细</text>
				<text>|</text>
				<text @click="pageChange($glpath.jifenjilu)">兑换记录</text>
			</view>
		</view>
		<view class="cells">
			<view class="card" v-for="item in goods" :key="item.id"  @click="pageChange($glpath.shangpin)">
				<u-image width="100%" height="300rpx" :src="item.img"></u-image>
				<view class="card_body u-flex-c u-row-around u-p-20 u-col-top">
					<text class="u-font-lg">{{item.title}}</text>
					<text style="color: #fa3534;">{{item.price}}</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				goods: [{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 1
					},
					{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 2
					},
					{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 3
					},
					{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 4
					},
					{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 5
					},
					{
						title: '积分兑换商品',
						price: '500',
						img: 'https://img0.baidu.com/it/u=1934510431,3254236505&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500',
						id: 6
					},
				]
			};
		},
		methods:{
			
					...mapActions('login', ['pageChange']),
		}
	}
</script>

<style lang="scss" scoped>
	.banner {
		height: 120px;
		background: url(https://img0.baidu.com/it/u=2683616324,950033949&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=234);
		background-size: 100% 100%;
		padding-left: 30px;
		line-height: 26px;
		color: #fff;
	}

	.detail text {
		margin-right: 10rpx;
	}

	.cells {
		margin: 10px;
		display: grid;
		grid-template-columns: repeat(2, 48%);
		column-gap: 10px;
		grid-row-gap: 10px;
	}

	.card {
		border-radius: 5px;
		overflow: hidden;
		background-color: #fff;
		font-size: 32rpx;
		overflow: hidden;
	}
</style>
