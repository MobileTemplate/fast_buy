<template>
	<view class="s-page-wrapper is-100vh" style="width: 100%;">
		<view class="is-20vh has-mgt-30">
			<view class="is-flex is-column is-justify-center  is-align-center is-height-100">
				<image src="../../static/1181030.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="content">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input type="number" maxlength="11" v-model="login.phone" placeholder="请输入手机号" class="is-input1 " @input="BindInput" data-val="phone" />
				</view>
				<view class="has-radius has-mgtb-10">
					<input type="password" v-model="login.password" placeholder="请输入登录密码" class="is-input1"  @input="BindInput" data-val="password"/>
				</view>

				<view class="loginbtn has-radius" style="margin-top:40rpx !important; margin-bottom:10rpx !important;">
					<button :loading="login.loading" @tap="defaultHandlerLogin">{{ login.loading ? "登录中...":"登 录"}}</button>
				</view>
			</view>
		</view>
		<view style="width: 80%; margin: 0 auto; font-size: 25upx; flex: 1;display: flex;">
			<view style="width: 50%;">
				<text class="is-blue" style="text-align: right;" @tap="goCodeLogin">验证码登陆</text>
			</view>
			<view style="width: 50%; text-align: right;">
				<text class="is-blue" @tap="goRegister">免费注册</text>
			</view>
		</view>
		<view class="pay">
			<view class="pay-opt">
				<text style="color: #808080;" @tap="onForgetPwd">
					忘记密码
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		PostRequest,
		GetRequest,
		SetToken
	} from '@/common/js/util.js';
	
	var CryptoJS = require("crypto-js");
	export default {
		data() {
			return {
				login: {
					loading: false,
					phone:"13223452345",
					password:"123456"
				},

			};
		},
		onLoad() {
			const self = this;
			this.login.loading = false;
			uni.getStorage({
				key:"login_info",
				success: function (res) {
					if(res.data != null && res.data.phone != null && res.data.token != null){
						self.UserLogin(res.data.phone, "", res.data.token)
					}
				},
				
			});
		},
		methods:{
			defaultHandlerLogin:function(e){
				var pwd = this.login.password;
				var phone = this.login.phone;
				this.UserLogin(phone, pwd, "")
			},
			
			UserLogin:function(phone, pwd, code){
				this.login.loading = true;
				var params = {
					phone: phone,
					password: pwd,
					code: code
				}
				PostRequest("/users/login", params, (data, success)=>{
					if(!success){
						uni.setStorage({
							key:"login_info",
							data: null
						})
						return
					}
					setTimeout((e=>{
						this.login.loading = false;
						if(data.state == 1){
							uni.setStorage({
								key:"login_info",
								data: {
									uid: data.data.uid,
									phone: data.data.phone,
									token: data.data.token+"1"
								},
								success: () => {
									SetToken(data.data.token);
									uni.switchTab({
										url:'../tag/tag'
									});
								}
							})
						}else{
							uni.setStorage({
								key:"login_info",
								data: null
							})
							uni.showToast({
								title: data.data,
								icon: "none"
							});
						}
					}),500);
				})
			},
			
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			},
			goRegister:function(){
				uni.navigateTo({
					url:"register"
				})
			},
			goCodeLogin:function(){
				console.log("验证码登陆")
			},
			onForgetPwd:function(){
				console.log("忘记密码")
			}
		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.content {
		width: 85%;
		margin: 0 auto;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}
	
	.pay {
		position: fixed;
		bottom: 0px;
		right: 0px;
		font-size: 25upx;
		z-index: 10000;
		width: 100%;
		height:80upx;
	}
	
	.pay-opt {
		margin-top: 10upx;
		display: flex;
		text-align: center;
		align-items:center;
		justify-content:center;
	}
</style>
