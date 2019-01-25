<template>
	<view style="width: 100%;">
		<view style="width: 100%;">
			<view class="list" v-for="(list, list_i) in severList" wx:key="list">
				<view class="li" v-for="(li, li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}" hover-class="hover" wx:key="li.name">
					<view class="uaddinfo">
						<view class="uinfo">
							<view class="uinfo-uname">
								{{li.username}}
							</view>
							<view class="uinfo-phone">
								{{li.phone}}
							</view>
						</view>
						<view class="text">
							{{li.address}}
						</view>
					</view>
					<uni-icon class="to" type="compose"></uni-icon>
				</view>
			</view>
		</view>
		
		
		<view class="pay">
			<view class="pay-opt">
				<view style="width: 100%;">
					<button class="bt_button" type="primary" style="width: 100%;"
					@tap="newaddress">
						<uni-icon type="plusempty"></uni-icon>
						<text>新增地址</text>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue";

	export default {
		components: {uniIcon},
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				userinfo:{},
				severList:[
					[
						{
							username: "李先生",
							phone: "132****9808",
							address: "安徽省合肥市包河区"
						},
						{
							username: "张先生",
							phone: "132****9809",
							address: "安徽省合肥市包河区"
						}
					]
				],
			};
		},
		onLoad() {
			//加载
			this.init();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'../../static/userinfo/face.jpeg',
					username:"VIP会员10240",
					integral:"10240"
				}
			},
			//用户点击列表项
			toPage(list_i,li_i){
				console.log("修改地址")
				// uni.showToast({title: this.severList[list_i][li_i].name});
			},
			newaddress() {
				console.log("新增地址")
			}
		}
	}
</script>

<style lang="scss">
	.list{
		width:100%;
		border-bottom:solid 13px #f1f1f1;
		.li{
			width:92%;
			height:50px;
			padding:0 4%;
			display:flex;
			border-bottom:solid 1px #e7e7e7;
			align-items:center;
			background-color:#FFF;
			&.noborder{
				border-bottom:0
			}
			.uaddinfo {
				width: 100%;
				.uinfo {
					width:100%;
					display:flex;
					font-size: 30upx;
					.uinfo-uname {
						text-align: center;
						width: 20%;
						font-weight: 500;
					}
					.uinfo-phone {
						text-align: center;
						width: 80%;
					}
				}
				.text{
					margin-top: 10upx;
					font-size: 30upx;
					padding-left:10px;
					width:100%;
					color:#666;
				}
			}
			.to{
				flex-shrink:0;
				width:20px;
				height:20px;
			}
		}	
	}
		
	.pay {
		position: fixed;
		bottom: 0px;
		right: 0px;
		font-size: 25upx;
		z-index: 10000;
		width: 100%;
		height:80upx;
		background: #fff;
		box-shadow:0px -1px 20px #EEE;
		.pay-opt {
			display: flex;
			text-align: center;
			align-items:center;
			justify-content:center;
			.bt_button {
				border-radius:0px;
				position: inherit;
			}
		}
	}
</style>
