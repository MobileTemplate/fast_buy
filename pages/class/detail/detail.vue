<template>
	<view style="background-color: #FFFFFF; width: 100%;">
		<swiper style="width: 100%; height: 490upx;" :indicator-dots="true" :autoplay="true" :interval="interval" 
		:duration="duration" :circular="true">
			<swiper-item v-for="(item, i) in lb_data" :key="i">
				<image style="width: 100%;" class="lb-img" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view style="width: 100%; text-align: center; margin-top: 10upx;">
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
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="0">
				<view v-for="(tab, index) in tabBars" :key="tab.ref" 
				:class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
			</scroll-view>
		</view>
		<item-details :index="tabIndex"/>
		<allEvaluation :index="tabIndex"/>
		
		<view class="pay">
			<view class="pay-opt">
				<view style="width: 12%;" @tap="onHome">
					<text>首页</text>
				</view>
				<view style="width: 12%" @tap="onCollect">
					<text>收藏</text>
				</view>
				<view style="width: 38%;">
					<button class="bt_button" type="primary" 
					style="background-color: #FFEDED; color: #F03726; width: 100%;"
					@tap="onBuy">
						立即购买
					</button>
				</view>
				<view style="width: 38%;">
					<button class="bt_button" type="primary" 
					style="background-color: #F03726; width: 95%; margin-right: 5%;"
					@tap="onShopping">
						加入购物车
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import uniCard from "@/components/uni-card/uni-card.vue";
	import itemDetails from "./item-details.vue";
	import allEvaluation from "./all-evaluation.vue";
	
	export default {
		components: {
			uniTag,
			uniList,
			uniListItem,
			uniCard,
			itemDetails,
			allEvaluation
		},
		
		data() {
			return {
				lb_data: [
					{
						img: "../../../static/shop/01.jpg"
					},
					{
						img: "../../../static/shop/02.jpg"
					},
					{
						img: "../../../static/shop/03.jpg"
					}
				],
				interval: 5000,
				duration: 1000,
				tabIndex: 0,
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
				this.tabIndex = index;
				console.log(index);
			},
			onHome(){
				console.log("首页");
			},
			onCollect(){
				console.log("收藏");
			},
			onBuy(){
				console.log("立即购买");
			},
			onShopping(){
				console.log("加入购物车");
			}
		}
	}
</script>

<style lang="scss">
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
		font-size: 36upx;
		font-weight: 700;
		width: 33%;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	
	.active {
		color: #E4393C;
		font-size: 36upx;
	}
	
	.pay {
		position: fixed;
		bottom: 0px;
		right: 0px;
		font-size: 25upx;
		z-index: 10000;
		width: 100%;
		height:100upx;
		background: #fff;
		box-shadow:0px -1px 20px #888;
	}
	
	.pay-opt {
		margin-top: 10upx;
		display: flex;
		text-align: center;
		align-items:center;
		justify-content:center;
	}
	
	.bt_button {
		border-radius:0px;
		position: inherit;
	}
	
	.uni-tag {
		margin: 5px;
		border: 0px;
		font-weight: 100;
		background: #f47602;
		line-height: 21px;
		padding: 0 7px;
		height: 21px;
	}
</style>
