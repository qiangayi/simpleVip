<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<view class="card">
			<view class="u-flex u-col-top">
				<u-avatar size="90"></u-avatar>
				<view class="u-flex-c u-col-top u-p-l-20">
					<text>{{userInfo.level}}</text>
					<text>累计积分：{{wallet.point}}</text>
					<text>累计消费：0</text>
					<text>会员码：{{vipcode}}</text>
				</view>
			</view>
			<view class="m_tickets">
				<u-line color="red" border-style="dashed" margin="10px 0" :hair-line="false" />
			</view>
			<view class="u-flex-c">
				<!-- 条形码 -->
				<canvas canvas-id="barcode" style="width: 600rpx; height: 200rpx;" />
				<text>{{barcode}}</text>
				<!-- 二维码 -->
				<canvas type="2d" style="width: 360rpx; height: 360rpx;" id="myQrcode"></canvas>
			</view>
		</view>

		<u-card :show-head="false" :show-foot="false">
			<view slot="body">
				<view class="u-flex u-row-around u-font-xl u-col-top">
					<view class="u-flex-c u-col-top u-row-left">
						<text>下一级升级条件</text>
						<text class="u-font-lg">银卡</text>
					</view>

					<u-line direction="col" length='65px' color="#ccc" margin="0 20px" />
					<view class="u-flex-c u-col-top u-row-left">
						<text>当前等级有效期</text>
						<text class="u-font-lg">永久有效</text>
					</view>
				</view>
			</view>
		</u-card>

		<u-card :show-head="false" :show-foot="false">
			<view slot="body">
				<view class="title">
					会员权益
				</view>
				<view class="info">
					<view class="u-flex-c u-row-center">
						<u-icon name="server-man" size="90"></u-icon>
						<text>专属客服</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="zhifubao" size="90"></u-icon>
						<text>支付宝</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="weixin-fill" size="90"></u-icon>
						<text>微信</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="coupon" size="90"></u-icon>
						<text>卡券兑换</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="gift" size="90"></u-icon>
						<text>生日礼品</text>
					</view>
				</view>				
					<u-line color="#e4e7ed" length="100%" margin="10px auto" :hair-line="false" />
				<view class="title">
					下一级权益
				</view>
				<view class="info">
					<view class="u-flex-c u-row-center">
						<u-icon name="server-man" size="90"></u-icon>
						<text>专属客服</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="zhifubao" size="90"></u-icon>
						<text>支付宝</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="weixin-fill" size="90"></u-icon>
						<text>微信</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="coupon" size="90"></u-icon>
						<text>卡券兑换</text>
					</view>
					<view class="u-flex-c u-row-center">
						<u-icon name="gift" size="90"></u-icon>
						<text>生日礼品</text>
					</view>
				</view>
			</view>
		</u-card>

	</scroll-view>
</template>

<script setup>
	import { userState } from '@/hooks/user.js'
	import { createQrcode } from '../../hooks/qrcode/qrcode.js'
	import { createBarcode } from '../../hooks/qrcode/barcode.js'

	import { ref, reactive, onMounted, computed } from 'vue'

	const { userInfo, wallet } = { ...userState() }
	let { vipcode } = userInfo.value
	let barcode = vipcode

	onMounted(() => {
		// 创建二维码
		createQrcode(vipcode)
		//创建条形码
		createBarcode('barcode', barcode, 600, 300);
	})
</script>

<style lang="scss" scoped>
	.card {
		border-radius: 5px;
		overflow: hidden;
		margin: 5px 10px;
		background-color: #fff;
		padding: 10px;
		font-size: 32rpx;
	}
	
	.title{
		font-size: 40rpx;
		line-height: 80rpx;
	}

	.info {
		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-row-gap: 20px;
		padding: 40rpx 0;
		background-color: #fff;
	}
</style>
