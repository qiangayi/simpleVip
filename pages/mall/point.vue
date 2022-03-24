<template>
	<scroll-view scroll-y="true" style="height:100%;">
		<view class="card point u-flex-c u-row-around u-m-b-20">
			<view class="u-flex-c">
				<text class="u-font-xl">当前可用积分</text>
				<text class="u-font-xl" style="color: #fa3534;">{{wallet.point}}</text>
			</view>
			<view class="" style="line-height: 60rpx;">
				冻结积分：<text>0</text>
			</view>
		</view>
		<u-cell-group class="">
			<u-cell-item :title="item.des" :label="item.createTime" :value="item.price" v-for="item in pointRange"
				:arrow="false" hover-class="none">
			</u-cell-item>
		</u-cell-group>
	</scroll-view>
</template>

<script setup>
	import { userState } from '@/hooks/user.js'
	import { getWalletList } from '../../api/user.js'
	import { ref, onMounted, reactive } from 'vue'

	const { userInfo, wallet } = { ...userState() }
	let { openId } = userInfo.value
	console.log("openid", userInfo)

	let year = '',
		month = '',
		page = 1,
		toline = 20

	let pointRange = ref([])
	var getConpon = () => {
		const type = 1
		getWalletList(openId, type, year, month, page, toline).then(res => {
			const { data } = res
			pointRange.value = data
		})
	}

	onMounted(() => {
		getConpon()
	})
</script>

<style lang="scss" scoped>
	.point {
		height: 120px;
		background-color: #fff;
	}
</style>
