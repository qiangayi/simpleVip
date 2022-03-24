<template>
	<view class="u-flex-c u-row-center u-col-center" :style="{'height': height}">
		<u-loading size="60" :show="true" mode="circle" :color="color"></u-loading>
		<text style="line-height: 60rpx;">{{text}}</text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const props = defineProps({
		height: {
			type: String,
			default: '40%'
		},
		color: {
			type: String,
			default: () => '#2b85e4'
		},
		text: {
			type: String,
			default: () => '拼命加载中'
		}
	})
	const height = ref(props.height)
	const color = ref(props.color)
	const text = ref(props.text)
</script>
