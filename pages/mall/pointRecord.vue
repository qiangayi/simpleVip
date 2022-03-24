<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<view class="u-text-left u-tips-color u-p-l-30" style="line-height: 26px;">
			<text>积分兑换历史</text>
		</view>

		<u-card :show-head="false" :foot-border-top="false" :body-style="{'paddingBottom': '0'}" v-for="item in records"
			:key="item.id">
			<view slot="body">
				<view class="u-flex u-row-between">
					<view class="u-flex" style="align-items: unset;">
						<u-image width="150rpx" height="150rpx" :src="item.img"></u-image>
						<view class="u-flex-c u-row-around u-col-top">
							<text>{{item.goodsName}}</text>
							<text class="u-type-error">{{item.price}}</text>
							<text>{{item.creatTime}}</text>
						</view>
					</view>
					<view class="u-flex">
						x{{item.count}}
					</view>
				</view>
			</view>
			<view class="u-p-l-40 u-p-b-20 u-p-r-20 u-flex u-row-right" slot="foot">
				<text class="u-main-color">合计：{{item.total}}</text>
			</view>
		</u-card>
	</scroll-view>
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
			const records = [{
					id: 1,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				},
				{
					id: 2,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				},
				{
					id: 3,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				},
				{
					id: 4,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				},
				{
					id: 6,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				},
				{
					id: 7,
					goodsName: '商品名称',
					count: 1,
					total: '100积分',
					img: 'https://img2.baidu.com/it/u=3057802342,3981637129&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
					price: '500积分',
					creatTime: '2022-02-03 13:03:03'
				}
			]
			reactive(records)

			return {
				records
			}
		}
	}
</script>

<style>

</style>
