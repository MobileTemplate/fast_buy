<template>
	<view style="width: 100%;">
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face">
					<image :src="userinfo.face"></image>
				</view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="integral">积分:{{userinfo.integral}}</view>
				</view>
			</view>
			<view class="setting">
				<image class="to" src="../../static/userinfo/to.png"></image>
			</view>
		</view>
		<view class="list" v-for="(list,list_i) in severList" wx:key="list">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover"  hover-stay-time="50"  wx:key="li.name" >
				<view class="icon">
					<image :src="'../../static/userinfo/sever/'+li.icon"></image>
				</view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/userinfo/to.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				userinfo:{},
				severList:[
					[
						{name:'地址管理',icon:'point.png'}
					],
					[
						{name:'我的收藏',icon:'point.png'},
						{name:'优惠券',icon:'quan.png'},
						{name:'红包',icon:'momey.png'},
						{name:'任务',icon:'renw.png'},
					],
					[
						{name:'积分明细',icon:'mingxi.png'},
						{name:'抽奖',icon:'choujiang.png'},
						{name:'收货地址',icon:'addr.png'},
						{name:'银行卡',icon:'bank.png'},
						{name:'安全中心',icon:'security.png'},
						{name:'在线客服',icon:'kefu.png'}
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
				// uni.showToast({title: this.severList[list_i][li_i].name});
				if(this.severList[list_i][li_i].name == "地址管理"){
					uni.navigateTo({
						url:"../address/manage"
					})
				}
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
		width:92%;
		height:30vw;
		padding:0 4%;
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
				width:15vw;
				height:15vw;
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
				padding-left:15px;
				.username {
					width:100%;
					color:#000;
					font-size:20px;
				}
				.integral {
					display:flex;
					align-items:center;
					padding:0 10px;
					height:20px;
					color:#000;
					border-radius:10px;
					font-size:12px;
				}
			}
		}
		.setting {
			flex-shrink:0;
			width:6vw;
			height:6vw;
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
		border-bottom:solid 13px #f1f1f1;
		.li {
			width:92%;
			height:50px;
			padding:0 4%;
			border-bottom:solid 1px #e7e7e7;
			display:flex;
			align-items:center;
			background-color:#FFF;
			&.noborder {
				border-bottom:0
			}
			.icon {
				flex-shrink:0;
				width:25px;
				height:25px;
				image{
					width:25px;
					height:25px;
				}
			}
			.text {
				padding-left:10px;
				width:100%;
				color:#666;
			}
			.to {
				flex-shrink:0;
				width:20px;
				height:20px;
			}
		}
	}
</style>