<template>
	<view class="tag_index">
		<swiper style="width: 100%;" :indicator-dots="true" :autoplay="true" :interval="interval" 
		:duration="duration" :circular="true">
			<swiper-item v-for="(item, i) in lb_data" :key="i">
				<image style="width: 100%; height:100%;" class="lb-img" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="tags">
			<block v-for="(value, index) in data" :key="index">
				<view class="tag-oneview" @tap="goList(value)" :style="{flexBasis:100/4 + '%'}">
					<view class="tag">
						<image class="tag-img" :src="value.icon"></image>
						<text class="tag-text">{{value.type}}</text>
					</view>
				</view>
			</block>
		</view>
		<view style="flex:1; height: 6upx; width: 100%; background-color: #EFEFEF;"/>
		<view style="flex:1; width: 100%; background-color: #FFFFFF;">
			<view class="tag-input-view">
				<view class="tag-label-view">
					<text class="tag-label">商城头条</text>
				</view>
				<swiper style="width: 100%; height: 60upx;" :indicator-dots="false" :vertical="true"
				 :autoplay="true" :interval="interval" :duration="duration" :circular="true">
					<swiper-item v-for="(item, i) in lb_data_text" :key="i">
						<text class="tag-label" style="color: #000000; font-size: 28upx;">{{item}}</text>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view style="flex:1; height: 6upx; width: 100%; background-color: #EFEFEF;"/>
		<view class="tags" style="background-color: #EFEFEF;">
			<view class="tag-oneview" style="width: 100%; height: 300upx; background-color: #FFFFFF;">
				
			</view>
			<view style=" height: 6upx; width: 100%; background-color: #EFEFEF;"/>
			<view class="tag-oneview" style="width: 49.7%; height: 300upx; background-color: #FFFFFF;">
					
			</view>
			
			<view class="tag-oneview" style="width: 49.7%; margin-left: 0.6%; height: 300upx; background-color: #FFFFFF;">
					
			</view>
			<view style="height: 6upx; width: 100%; background-color: #EFEFEF;"/>
			<view class="tag-oneview" style="width: 49.7%; height: 300upx; background-color: #FFFFFF;">
					
			</view>
			
			<view class="tag-oneview" style="width: 49.7%; margin-left: 0.6%; height: 300upx; background-color: #FFFFFF;">
					
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import mSearch from '../../components/mehaotian-search/mehaotian-search.vue';
	
	export default {
		components: {
			uniNavBar,
			uniStatusBar,
			uniIcon,
			mSearch
		},
		data() {
			return {
				data: [
					{
						type: '搜索',
						id: 1,
						icon: '../../static/home/grid_1.jpg',
						url: '../search/search'
					},
					{
						type: '优惠',
						id: 2,
						icon: '../../static/home/grid_2.jpg',
						url: '../shop/detail/index'
					},
					{
						type: '个人',
						id: 3,
						icon: '../../static/home/grid_3.jpg',
						url: '../class/class'
					},
					{
						type: '理财',
						id: 4,
						icon: '../../static/home/grid_4.jpg',
						url: '../class/class'
					}
				],
				lb_data: [
					{
						img: "../../static/home/shuffling_1.jpg"
					},
					{
						img: "../../static/home/shuffling_2.jpg"
					},
					{
						img: "../../static/home/shuffling_3.jpg"
					}
				],
				interval: 5000,
				duration: 1000,
				lb_data_text: [
					"[特惠]洋河年末大促，低至两件五折",
					"[公告]华北、华中部分地区配送延迟",
					"[特惠]家电狂欢千亿礼券 买1送1！"
				]
			}
		},
		methods: {
			goList(value) {
				uni.navigateTo({
					url:value.url
				})
			},
			canvasIdErrorCallback: function (e) {
			    console.error(e.detail.errMsg)
			},
			scanCode(){
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				})
			},
			search(value, key){
				console.log("=============", value, key);
			}
		}
	}
</script>

<style>
	scroll-view {
		display:flex;
	}
	.tag_index {
		flex: 1;
		width:100%;
		min-height:100vh;
		flex-direction: column;
	}
	
	.tag-input-view {
		display: flex;
	} 
	.tag-label-view {
		width: 150upx;
		align-items: center;
	}
	.tag-label {
		flex: 1;
		line-height: 0upx;
		font-size: 24upx;
		color: #555;
		text-align: left;
	}
	.tag-label-view {
		width: 150upx;
		text-align:center;
	}
	.tag-oneview {
		display: flex;
		justify-content: center;
	}
</style>
