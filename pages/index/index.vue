<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<view class="content">


			<view style="width: 750rpx; margin: 0 auto">
				<u-image width="100%" style="margin: 0 auto;" height="1000px"
					:src="'https://img0.baidu.com/it/u=1728241739,1170818433&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=695'">
				</u-image>
			</view>
		</view>
	</scroll-view>

	<u-tabbar :list="tabbar"></u-tabbar>
</template>

<script setup>
	import {
		loginState
	} from '@/hooks/login.js'
	const {
		tabbar
	} = loginState()
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
