<template>
		<view class="ae_view" :style="index!=1 && {'display':'none'}">
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
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	import uniCard from "@/components/uni-card/uni-card.vue";
	
	export default {
		"name": "all-evaluation",
		"props": {
			index: 0
		},
		components: {
			uniTag,
			uniCard
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.ae_view {
		margin-bottom: 110upx;
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
	
	.swiper-tab-list1 {
		font-size: 30upx;
		width: 25%;
		display: inline-block;
		text-align: center;
		color: #555;
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
</style>
