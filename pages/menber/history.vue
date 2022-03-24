<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<u-card :show-head="false" title-size="34" v-for="item in list" :key="item.id">
			<view slot="body">
				<text class="u-font-lg">{{item.des}}</text>
				<view class="u-flex-c u-main-color u-font-xl">
					<text>付款金额</text>
					<text style="font-size: 70rpx;">{{item.price}}</text>
				</view>
				<view class="">
					订单编号：{{item.id}}
				</view>
				<view class="">
					交易时间：{{item.createTime}}
				</view>
			</view>
		</u-card>
	</scroll-view>
</template>

<script setup>
	import { userState } from '@/hooks/user.js'
	import { getWalletList } from '../../api/user.js'
	import { ref, onMounted, reactive } from 'vue'


	const { userInfo } = { ...userState() }
	let { openId } = userInfo.value


	let year = '',
		month = '',
		page = 1,
		toline = 20

	let list = ref([])
	var getOrder = () => {
		const type = 2
		getWalletList(openId, type, year, month, page, toline).then(res => {
			list.value = res.data
			// reactive(list)
		})
	}

	onMounted(() => {
		getOrder()
	})
</script>

<style>

</style>
