<template>
	<view style="width: 100%;">
		<view class="header" v-bind:class="{'status':true}">
			<view class="userinfo">
				<view class="face">
					<image :src="userinfo.face"></image>
				</view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="integral">用户名: {{userinfo.username}}</view>
				</view>
			</view>
			<view class="setting">
				<image class="to" src="../../static/userinfo/to.png"></image>
			</view>
		</view>
		<view class="list" v-for="(list,list_i) in severList" wx:key="list">
			<view class="li" v-for="(li,li_i) in list" 
			@tap="toPage(list_i,li_i)" 
			v-bind:class="{'noborder':li_i==list.length-1}" 
			hover-class="hover" wx:key="li.name" >
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/userinfo/to.png"></image>
			</view>
		</view>
		<view class="tcdlview" @tap="outLogin">
			<text>退出登录</text>
		</view>
	</view>
</template>
<script>
	import {
		GetUIDRequest
	} from '@/common/js/util.js';
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				userinfo:{},
				severList:[
					[
						{name:'地址管理'}
					],
					[
						{name:'我的收藏'},
						{name:'优惠券'},
						{name:'红包'},
						{name:'任务'},
					],
					[
						{name:'安全中心'},
						{name:'通用'},
						{name:'功能反馈'},
						{name:'关于快购'}
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
				const self = this;
				GetUIDRequest('/info', null, (data, succeed)=>{
					if(succeed){
						if(data.state==1){
							//用户信息
							self.userinfo={
								face:data.data.icon,
								username:data.data.nick_name,
								integral:data.data.uid
							}
						} else {
							uni.showToast({
								title: data.data,
								icon: "none"
							});
						}
					}
				});
			},
			//用户点击列表项
			toPage(list_i,li_i){
				if(this.severList[list_i][li_i].name == "地址管理"){
					uni.navigateTo({
						url:"../address/manage"
					})
				}else{
					uni.showToast({title: "正在研发中……", icon: "none"});
				}
			},
			outLogin(){
				uni.setStorage({
					key:"login_info",
					data: null
				})
				uni.reLaunch({
					url:"../ucenter/login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		&.status {
			padding-top:var(--status-bar-height);
		}
		background-color:#FFFFFF;
		width:96%;
		height:150upx;
		padding:0 2%;
		display:flex;
		align-items:center;
		border-style: solid;
		border-width: 0px 0px 1px; 
		border-color: #EFEFEF;
		.userinfo {
			width:98%;
			display:flex;
			.face {
				flex-shrink:0;
				width:80upx;
				height:80upx;
				border-radius:100%;
				border-style: solid;
				border-width: 1px; 
				border-color: #EFEFEF;
				image {
					width:100%;
					height:100%;
					border-radius:100%;
				}
			}
			.info {
				display:flex;
				flex-flow:wrap;
				padding-left:15upx;
				.username {
					width:100%;
					color:#000;
					font-size:35upx;
				}
				.integral {
					display:flex;
					align-items:center;
					color:#999;
					font-size:25upx;
				}
			}
		}
		.setting {
			flex-shrink:0;
			width:35upx;
			height:35upx;
			image {
				width:100%;
				height:100%;
			}
		}
	}
	.hover {
		background-color:#FFFFFF
	}
	.list {
		width:100%;
		font-size: 30upx;
		border-bottom:solid 13px #f1f1f1;
		.li {
			width:96%;
			height: 80upx;
			padding:0 2%;
			border-bottom:solid 1px #e7e7e7;
			display:flex;
			align-items:center;
			background-color:#FFF;
			&.noborder {
				border-bottom:0
			}
			.icon {
				flex-shrink:0;
				width:30upx;
				height:30upx;
				image{
					width:30upx;
					height:30upx;
				}
			}
			.text {
				padding-left:0px;
				width:100%;
				color:#000;
			}
			.to {
				flex-shrink:0;
				width:30upx;
				height:30upx;
			}
		}
	}
	.tcdlview {
		width: 100%;
		height: 80upx;
		font-size: 30upx;
		display:flex;
		align-items:center;
		justify-content:center;
		text-align: center;
		background-color: #FFFFFF;
	}
</style>