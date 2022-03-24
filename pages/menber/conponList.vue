<template>
	<u-tabs :list="conponTypeList" :is-scroll="false" :current="currentTab" @change="conponTypeChange"></u-tabs>
	<myloading height="80%" v-show="showLoading"></myloading>
	<u-card :show-head="false" :foot-border-top="false" :body-style="{'paddingBottom': '0'}"
		v-for="item, index in tickets" :key="index">
		<view slot="body">
			<view class="u-flex  u-row-between">
				<view class="u-flex">
					<view class="u-p-l-10 u-p-r-30">
						<u-icon name="youhuiquan" custom-prefix="custom-icon" size="60"></u-icon>
					</view>
					<view class="u-flex-c u-col-top">
						<text>{{item.name}}</text>
						<text class="u-tips-color">过期时间：{{item.expiration}}</text>
					</view>
				</view>
				<view class="">
					<text>￥</text><text class="u-font-xl">{{item.amount}}</text>
				</view>
			</view>

			<view class="m_tickets">
				<u-line color="#dad2d2" border-style="dashed" margin="10px 0" :hair-line="false" />
			</view>
		</view>
		<view class="u-p-l-40 u-p-b-20 u-p-r-30 u-flex u-row-between" slot="foot">
			<text>{{item.description}}</text>
			<u-button type="primary" @click="showCode(123333)" size="mini">立即使用</u-button>
		</view>
	</u-card>

	<!-- 二维码 -->
	<u-modal v-model="showModal" title="请出示二维码">
		<view class="slot-content">
			<!-- <view class="u-flex"> -->

			<canvas type="2d" style="width: 360rpx; height: 360rpx; margin: 0 auto;" id="myQrcode"></canvas>
			<!-- </view> -->
		</view>
	</u-modal>
</template>

<script setup>
	import { createQrcode } from '../../hooks/qrcode/qrcode.js'
	import { getConponList } from '../../api/user.js'
	import { ref, onMounted, reactive } from 'vue'

	import { userState } from '@/hooks/user.js'
	import myloading from '@/components/common/loading.vue'
	// 调用vuex
	const { userInfo } = userState()
	let { openId } = userInfo.value

	// 优惠券tabs
	let conponTypeList = ref(null)
	let currentTab = ref(0)
	conponTypeList = [
		{ name: '全部' },
		{ name: '未使用' },
		{ name: '已使用' },
		{ name: '已失效' }
	]
	let conponTypeChange = (index) => {
		currentTab.value = index
		conponList()
	}

	// 获取优惠券
	let tickets = ref([])
	let showLoading = ref(false)
	const conponList = () => {
		showLoading.value = true
		let status = currentTab.value == 0 ? '' : currentTab.value
		getConponList(openId, '', status).then(res => {
			showLoading.value = false
			const { data } = res
			tickets.value = data
		})
	}

	// 优惠券弹窗
	var showModal = ref(false)
	const showCode = (code) => {
		showModal.value = true
		createQrcode(code)
	}

	onMounted(() => {
		conponList()
		console.log("获取优惠券")
	})
</script>

<style lang="scss" scoped>

</style>
