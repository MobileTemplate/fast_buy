<template>
	<view style="background-color: #FFFFFF; width: 100%;">
		<swiper style="width: 100%;" :indicator-dots="true" :autoplay="true" :interval="interval" 
		:duration="duration" :circular="true">
			<swiper-item v-for="(item, i) in lb_data" :key="i">
				<image style="width: 100%; height:100%;" class="lb-img" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view style="width: 100%; text-align: center;">
			<text style="line-height: 1upx; font-size: 14px; font-weight: 700; color: #000;">
				良品铺子 手剥松子218g 坚果炒货 巴西松子
			</text>
			<view>
				<text style="font-size: 10px; color: #888;">
					促销价
				</text>
				<text style="font-size: 14px; font-weight: 700; color: #c00;">
					¥56.98
				</text>
				
				<text style="font-size: 10px; color: #888; margin-left: 20upx;">
					原价
				</text>
				<text style="font-size: 11px; color: #000;">
					¥
				</text>
				<text style="font-size: 11px;color: #000; text-decoration: line-through;">
					98.00
				</text>
			</view>
			<view style="flex: 1;display: flex;font-size: 10px; height: 50upx; margin-top: 10upx;">
				<view style="width: 33%; margin-top: 10upx;">
					<text>月销量</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 6upx">1015</text>
				</view>
				<view style="width: 0.5%; height: 30upx; background-color: #dedede; margin-top: 10upx;"/>
				<view style="width: 33%; margin-top: 10upx;">
					<text>累计销量</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 6upx">6015</text>
				</view>
				<view style="width: 0.5%; height: 30upx; background-color: #dedede; margin-top: 10upx;"/>
				<view style="width: 33%; margin-top: 10upx;">
					<text>累计评价</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 6upx">640</text>
				</view>
			</view>
		</view>
		
		<uni-list>
			<uni-list-item title="可选价格"></uni-list-item>
		</uni-list>

		<view class="uni-tab-bar">
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab, index) in tabBars" :key="tab.ref" 
				:class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
			</scroll-view>
		</view>
		<uni-card is-full="false" title="产品参数">
			<view style="font-size: 20upx;">产品类型: 烘炒类</view>
			<view style="font-size: 20upx;">原料产地: 巴基斯坦</view>
			<view style="font-size: 20upx;">产地: 湖北省武汉市</view>
			<view style="font-size: 20upx;">配料表: 进口松子、食用盐</view>
			<view style="font-size: 20upx;">产品规格: 210g</view>
			<view style="font-size: 20upx;">保质期: 180天</view>
			<view style="font-size: 20upx;">产品标准号: GB/T 22165</view>
			<view style="font-size: 20upx;">生产许可证编号：QS4201 1801 0226</view>
			<view style="font-size: 20upx;">储存方法： 请放置于常温、阴凉、通风、干燥处保存 </view>
			<view style="font-size: 20upx; margin-top: 10upx;">食用方法： 开袋去壳即食</view>
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
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import uniCard from "@/components/uni-card/uni-card.vue";
	
	const FAIL_CONTENT = '<p>获取信息失败</p>';
	export default {
		components: {
			uniTag,
			uniList,
			uniListItem,
			uniCard
		},
		data() {
			return {
				lb_data: [
					{
						img: "../../../static/home/shuffling_1.jpg"
					},
					{
						img: "../../../static/home/shuffling_2.jpg"
					},
					{
						img: "../../../static/home/shuffling_3.jpg"
					}
				],
				interval: 5000,
				duration: 1000,
				banner: {},
				content: '',
				tabBars: [{
					name: '宝贝详情',
					id: 1,
					ref: 'new'
				}, {
					name: '全部评价',
					id: 2,
					ref: 'company'
				}, {
					name: '猜你喜欢',
					id: 3,
					ref: 'content'
				}]
			}
		},
		methods: {
			tapTab(index){
				console.log(index);
			}
		}
	}
</script>

<style lang="scss">
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #FFFFFF;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
	
	text {
		margin: 0;
		padding: 0;
		border: 0;
		padding-bottom: 0.4em;
		/* line-height: 1; */
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		font-family: arial,"Lantinghei SC","Microsoft Yahei";
	}
	
	.list{
		width:100%;
		border-bottom:solid 13px #f1f1f1;
		.li {
			width:92%;
			height:50px;
			padding:0 4%;
			border-bottom:solid 1px #e7e7e7;
			display:flex;
			align-items:center;
			background-color:#FFF;
			&.noborder{
				border-bottom:0
			}
			.icon{
				flex-shrink:0;
				width:25px;
				height:25px;
				image {
					width:25px;
					height:25px;
				}
			}
			.text{
				padding-left:10px;
				width:100%;
				color:#666;
			}
			.to{
				flex-shrink:0;
				width:20px;
				height:20px;
			}
		}
	}
	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
	}
	
	.uni-tab-bar .list {
		width: 750upx;
		height: 100%;
	}
	
	.uni-swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 100upx;
		height: 100upx;
		border-bottom: 1px solid #c8c7cc;
	}
	
	.swiper-tab-list {
		font-size: 32upx;
		font-weight: 700;
		width: 33%;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	
	.swiper-tab-list-active {
		color: #E4393C;
		font-size: 16px;
	}
</style>
