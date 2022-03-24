<template>
	<view>
		<u-card :show-head="false" :show-foot="false" :foot-border-top="false" :body-style="{'background': '#000'}">
			<view slot="body">
				<view class="">

					<view class="u-flex u-row-between">
						<text>储值余额（元）</text>
						<text>卡号：1231231231</text>
					</view>
					<view class="balance">
						<text>500.00</text>
					</view>
					<view class="logo">
						<text>VIP</text>
						<view class="cover ">

						</view>
					</view>
				</view>
			</view>
		</u-card>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.balance {
		color: #fff;
		font-size: 80rpx;
		line-height: 120rpx;
		padding: 50rpx 0;
	}

	.logo {
		color: #fff;
		font-size: 40rpx;
		line-height: 50rpx;
		position: relative;
	}

	.cover {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(to bottom, black 0%, transparent 50%, black);
		opacity: 0.5;
	}
</style>
