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
				<view style="width: 33%; margin-top: 5upx;">
					<text>月销量</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 3px">1015</text>
				</view>
				<view style="width: 0.5%; height: 30upx; background-color: #dedede; margin-top: 10upx;"/>
				<view style="width: 33%; margin-top: 5upx;">
					<text>累计销量</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 3px">6015</text>
				</view>
				<view style="width: 0.5%; height: 30upx; background-color: #dedede; margin-top: 10upx;"/>
				<view style="width: 33%; margin-top: 5upx;">
					<text>累计评价</text>
					<text style="color: #C40000;font-weight: 700; margin-left: 3px">640</text>
				</view>
			</view>
			<!-- <view style="height: 4upx; width: 100%; background-color: #EFEFEF;"/> -->
		</view>
		<uni-list>
			<uni-list-item title="可选价格"></uni-list-item>
		</uni-list>
		<!-- <view class="list" >
			<view class="li">
				<view class="text">可选价格</view>
				<image class="to" src="../../../static/userinfo/to.png"></image>
			</view>
		</view> -->
		<view style="height: 300upx; width: 100%; background-color: #FFFFFF;">
			<!-- <view class="center-list">
				<view class="center-list-item">
					<text class="list-text">收藏图片</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view> -->
			<!-- <uni-list>
				<uni-list-item title="标题文字" show-arrow="false"></uni-list-item>
				<uni-list-item title="标题文字"></uni-list-item>
				<uni-list-item title="标题文字" show-badge="true" badge-text="12"></uni-list-item>
				<uni-list-item title="禁用状态" disabled="true" show-badge="true" badge-text="12"></uni-list-item>
			</uni-list> -->
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";

	const FAIL_CONTENT = '<p>获取信息失败</p>';
	export default {
		components: {
			uniTag,
			uniList,
			uniListItem
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
				content: ''
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
</style>
