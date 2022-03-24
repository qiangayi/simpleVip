<template>
	<view class="card avatar u-flex-c u-row-center" :style="{'--bg': 'url(../../static/vip.jpeg)'}">
		<u-avatar size="180"></u-avatar>
	</view>

	<u-cell-group>
		<u-cell-item title="姓名" :value="user.name" :arrow="false"></u-cell-item>
		<u-cell-item title="手机号" :value="user.phone" :arrow="false"></u-cell-item>
	</u-cell-group>

	<view class="u-text-left u-tips-color u-p-l-30" style="line-height: 26px;">
		<text>基础信息</text>
	</view>
	<u-cell-group>
		<u-cell-item title="性别" :value="gender" :arrow="false"></u-cell-item>
		<u-cell-item title="生日" :value="user.birthday" :arrow="false"></u-cell-item>
		<!-- <u-cell-item title="服务导购" :value="user."></u-cell-item> -->
		<u-cell-item title="服务店铺" :value="user.storeId" :arrow="false"></u-cell-item>
		<u-cell-item title="注册时间" :value="user.createTime" :arrow="false"></u-cell-item>
	</u-cell-group>
</template>

<script>
	import {
		useState
	} from '@/utils/vuexmap/useState'
	import {
		ref,
		reactive,
		computed,
		onMounted
	} from 'vue'
	export default {
		setup(props) {
			const storeState = useState('login', ['userInfo'])
			const userInfo = storeState['userInfo'].value
			const user = ref(userInfo)
			const gender = computed(() => {
				return user.value.gender.toLowerCase()  == "w" ? '女' : '男'
			})

			return {
				user,
				gender
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		border-radius: 10px;
		overflow: hidden;
	}

	.avatar {
		// filter: blur(37px);
		height: 120px;
		position: relative;
		margin: 0 5px;
	}


	.avatar::before {
		//将背景和高斯模糊全部设置在了伪元素内，并让伪元素的z-index为-1，避免遮盖其他元素
		content: ' ';
		width: 100%;
		height: 100%;
		position: absolute;
		background: var(--bg) no-repeat;
		background-size: 100% 100%;
		filter: blur(0.4px);
	}
</style>
