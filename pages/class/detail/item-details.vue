<template>
		<view class="id_view" :style="index!=0 && {'display':'none'}">
			<uni-card is-full="false" title="产品参数">
				<view style="font-size: 26upx;">
					<view>产品类型: 烘炒类</view>
					<view>原料产地: 巴基斯坦</view>
					<view>产地: 湖北省武汉市</view>
					<view>配料表: 进口松子、食用盐</view>
					<view>产品规格: 210g</view>
					<view>保质期: 180天</view>
					<view>产品标准号: GB/T 22165</view>
					<view>生产许可证编号：QS4201 1801 0226</view>
					<view>储存方法： 请放置于常温、阴凉、通风、干燥处保存 </view>
					<view>食用方法： 开袋去壳即食</view>
				</view>
			</uni-card>
			<uni-card is-full="false" title="产品详细">
				<image style="width: 100%;" src="../../../static/shop/tw1.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw2.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw3.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw4.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw5.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw6.jpg"></image>
				<image style="width: 100%;" src="../../../static/shop/tw7.jpg"></image>
			</uni-card>
		</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue";
	
	export default {
		"name": "item-details",
		"props": {
			index: 0
		},
		components: {
			uniCard
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			// console.log(this.$props)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.id_view {
		margin-bottom: 110upx;
	}
</style>
