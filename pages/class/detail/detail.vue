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
		<view :style="tabIndex!=0 && {'display':'none'}">
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
		
		<view :style="tabIndex!=1 && {'display':'none'}">
			<uni-card style="color: #E4393C; font-weight: 700;" is-full="false" title="买家印象">
				<view style="font-size: 26upx;">
					<uni-tag class="uni-tag" text="味道不错(2177)" type="warning"></uni-tag>
					<uni-tag class="uni-tag" text="颗粒饱满(1860)" type="warning"></uni-tag>
					<uni-tag class="uni-tag" text="口感好(1290)" type="warning"></uni-tag>
					<uni-tag class="uni-tag" text="商品不错(1689)" type="warning"></uni-tag>
					<uni-tag class="uni-tag" text="香脆可口(234)" type="warning"></uni-tag>
				</view>
			</uni-card>
			<view class="uni-tab-bar">
				<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="0">
					<view class="swiper-tab-list1">全部评价(32)</view>
					<view class="swiper-tab-list1">好评(20)</view>
					<view class="swiper-tab-list1">中评(10)</view>
					<view class="swiper-tab-list1">差评(2)</view>
				</scroll-view>
			</view>
			<view>
			    <view class="uni-padding-wrap">
			        <!-- 评论区 start -->
			        <view class="uni-comment">
			            <view class="uni-comment-list">
			                <view class="uni-comment-face">
			                    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			                </view>
			                <view class="uni-comment-body">
			                    <view class="uni-comment-top">
			                        <text>网友</text>
			                    </view>
			                    <view class="uni-comment-date">
			                        <text>08/10 08:12</text>
			                    </view>
			                    <view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
			                </view>
			            </view>
			            <view class="uni-comment-list">
			                <view class="uni-comment-face">
			                    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			                </view>
			                <view class="uni-comment-body">
			                    <view class="uni-comment-top">
			                        <text>马克一天</text>
			                    </view>
			                    <view class="uni-comment-content">很强大，厉害了我的uni-app!</view>
			                </view>
			            </view>
			            <view class="uni-comment-list">
			                <view class="uni-comment-face">
			                    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			                </view>
			                <view class="uni-comment-body">
			                    <view class="uni-comment-top">
			                        <text>今生缘</text>
			                    </view>
			                    <view class="uni-comment-content">好牛逼的感觉，是不是小程序、App、移动端都互通了？</view>
			                    <view class="uni-comment-date">
			                        <text>08/10 07:55</text>
			                    </view>
			                </view>
			            </view>
			            <view class="uni-comment-list">
			                <view class="uni-comment-face">
			                    <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			                </view>
			                <view class="uni-comment-body">
			                    <view class="uni-comment-top">
			                        <text>小猫咪</text>
			                    </view>
			                    <view class="uni-comment-content">支持国产，支持DCloud!</view>
			                    <view class="uni-comment-date">
			                        <view>2天前</view>
			                        <view class="uni-comment-replay-btn">5回复</view>
			                    </view>
			                </view>
			            </view>
			        </view>
			    </view>
			</view>
		</view>
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
		font-size: 36upx;
		font-weight: 700;
		width: 33%;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	
	.swiper-tab-list1 {
		font-size: 30upx;
		width: 25%;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	
	.active {
		color: #E4393C;
		font-size: 36upx;
	}
	
	.uni-padding-wrap {
	    padding: 30upx;
	}
	
	view {
	    font-size: 28upx;
	}
	
	.uni-comment {
	    padding: 5rpx 0;
	    display: flex;
	    flex-grow: 1;
	    flex-direction: column;
	}
	
	.uni-comment-list {
	    flex-wrap: nowrap;
	    padding: 10rpx 0;
	    margin: 10rpx 0;
	    width: 100%;
	    display: flex;
	}
	
	.uni-comment-face {
	    width: 70upx;
	    height: 70upx;
	    border-radius: 100%;
	    margin-right: 20upx;
	    flex-shrink: 0;
	    overflow: hidden;
	}
	
	.uni-comment-face image {
	    width: 100%;
	    border-radius: 100%;
	}
	
	.uni-comment-body {
	    width: 100%;
	}
	
	.uni-comment-top {
	    line-height: 1.5em;
	    justify-content: space-between;
	}
	
	.uni-comment-top text {
	    color: #0A98D5;
	    font-size: 24upx;
	}
	
	.uni-comment-date {
	    line-height: 38upx;
	    flex-direction: row;
	    justify-content: space-between;
	    display: flex !important;
	    flex-grow: 1;
	}
	
	.uni-comment-date view {
	    color: #666666;
	    font-size: 24upx;
	    line-height: 38upx;
	}
	
	.uni-comment-content {
	    line-height: 1.6em;
	    font-size: 28upx;
	    padding: 8rpx 0;
	}
	
	.uni-comment-replay-btn {
		background: #FFF;
	    font-size: 24upx;
	    line-height: 28upx;
	    padding: 5rpx 20upx;
	    border-radius: 30upx;
	    color: #333 !important;
	    margin: 0 10upx;
	}
	
	.pay {
		position: fixed;
		bottom: 0px;
		right: 0px;
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
