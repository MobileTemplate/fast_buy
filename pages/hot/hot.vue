<template>
	<view class="index">
		<view style="margin-bottom: 100upx;">
			<view style="flex:1; width: 100%;" v-for="(item, i) in data" :key="i">
				<view class="item-content">
					<view class="item-cherckbox">
						<checkbox value="USA" @tap="onCheckbox(item.id, item.original_price)"></checkbox>
					</view>
					<view class="item-img" style="border-style: solid;border-width: 1px; border-color: #EFEFEF;">
						<image style="width: 160upx; height: 160upx;" :src="item.img"></image>
					</view>
					<view class="item-text" style="font-size: 25upx;">
						<view>
							<text>{{item.name}}</text>
						</view>
						<view style="margin-top: 35upx">
							<text style="color: #8F8F94;">颜色：{{item.color}} &nbsp;&nbsp;&nbsp;包装：{{item.pack}}</text>
						</view>
						<view style="margin-top: 35upx">
							<text style="font-weight: 900;">
								￥{{item.original_price}}
							</text>
							<text style="color: #8F8F94; margin-left: 10upx; text-decoration: line-through;">
								￥{{item.discount_price}}
							</text>
							<text style="margin-left: 250upx;">
								{{item.number}}
							</text>
						</view>
					</view>
				</view>
				<view :style="i == (data.length-1) ? {'display':'none'} : {flex:1, height: '1px', width: '100%', backgroundColor: '#EFEFEF'}"/>
			</view>
		</view>
		<view class="pay">
			<view class="pay-opt">
				<view style="width: 80%; text-align: right; margin-right: 20upx; font-size: 30upx;">
					<text style="font-size: 28upx; color: #666666;">实付款：</text>
					<text style="font-weight: 900;">￥{{sum_price}}</text>
				</view>
				<view style="width: 20%;">
					<button class="bt_button" type="primary" 
					style="background-color: #F03726; width: 100%;"
					@tap="onShopping">
						结算
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sum_price: 0.00,
				data: [
					{
						id:1,
						img: "../../static/shopping/kouhong_12cnml.jpg",
						name: "美康粉黛醉美唇膏 持久保湿滋润防水不掉色",
						color: "12#南玛瑙",
						pack: "裸装",
						number: 3,
						original_price: 80.98,
						discount_price: 120.98
					},
					{
						id:2,
						img: "../../static/shopping/kouhong_12cnml.jpg",
						name: "美康粉黛醉美唇膏 持久保湿滋润防水不掉色",
						color: "12#南玛瑙",
						pack: "裸装",
						number: 3,
						original_price: 80.98,
						discount_price: 120.98
					},
					{
						id:3,
						img: "../../static/shopping/kouhong_12cnml.jpg",
						name: "美康粉黛醉美唇膏 持久保湿滋润防水不掉色",
						color: "12#南玛瑙",
						pack: "裸装",
						number: 3,
						original_price: 80.98,
						discount_price: 120.98
					},
					{
						id:4,
						img: "../../static/shopping/kouhong_12cnml.jpg",
						name: "美康粉黛醉美唇膏 持久保湿滋润防水不掉色",
						color: "12#南玛瑙",
						pack: "裸装",
						number: 3,
						original_price: 80.98,
						discount_price: 120.98
					},
					{
						id:5,
						img: "../../static/shopping/kouhong_12cnml.jpg",
						name: "美康粉黛醉美唇膏 持久保湿滋润防水不掉色",
						color: "12#南玛瑙",
						pack: "裸装",
						number: 3,
						original_price: 80.98,
						discount_price: 120.98
					}
				]
			}
		},
		onLoad() {
		},
		onPullDownRefresh() {
		},
		onReachBottom() {
		},
		methods: {
			onCheckbox(id, original_price){
				var sum_price = this.sum_price;
				sum_price += original_price;
				this.sum_price = Math.floor(sum_price * 100) / 100;
			}
		}
	}
</script>

<style>
	.item-content {
		flex:1;
		display: flex;
		margin-top: 40upx;
		margin-bottom:20upx;
		/* flex-direction: column; */
		/* justify-content: center; */
	}
	.item-text {
		margin-left: 10upx;
	}
	.item-cherckbox {
		margin-left: 15upx;
	}
	.item-img {
		margin-left: 3upx;
	}
	.pay {
		position: fixed;
		bottom: 0px;
		right: 0px;
		font-size: 25upx;
		z-index: 10000;
		width: 100%;
		/*  */
		height:80upx;
		background: #fff;
		border-style: solid;
		border-width: 1px 0px 0px; 
		border-color: #EFEFEF;
	}
	
	.pay-opt {
		display: flex;
		text-align: center;
		align-items:center;
		justify-content:center;
	}
	
	.bt_button {
		border-radius:0px;
		position: inherit;
	}
	.bt_button:after {
		width: 0;
		height: 0;
	}
</style>
