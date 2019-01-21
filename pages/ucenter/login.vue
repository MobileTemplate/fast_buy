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
				<view class=" has-radius has-mgtb-10">
					<input type="password" v-model="login.password" placeholder="请输入登录密码" class="is-input1"  @input="BindInput" data-val="password"/>
				</view>

				<view class=" loginbtn has-radius has-mgtb-20">
					<button :loading="login.loading" @tap="defaultHandlerLogin">{{ login.loading ? "登录中...":"登 录"}}</button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80 content">
			<navigator url="#" class="has-radius is-right is-grey has-mgr-20" hover-class="">
				<text>忘记密码？</text>
				<text class="is-blue">点击找回</text>
			</navigator>
		</view>
		<view style="text-align: center;">
			<text class="is-blue" @tap="goRegister">
				还没有账号 免费注册
			</text>
		</view>
	</view>
</template>

<script>
	import {
		PostRequest,
		GetRequest
	} from '@/common/js/util.js';
	// import CryptoJS from '@/components/'
	var CryptoJS = require("crypto-js");
	export default {
		data() {
			return {
				login: {
					loading: false,
					phone:"13245445433",
					password:"000000"
				},

			};
		},
		methods:{
			defaultHandlerLogin:function(e){
				this.login.loading = true;
				var pwd = this.login.password;
				var phone = this.login.phone;
				console.log("得到账号:", this.login)
				GetRequest("/agent/timenow", null, (tdata, succeed)=>{
					if(succeed){
						var md5pwd = CryptoJS.MD5(pwd+tdata.data).toString(CryptoJS.enc.Hex);
						var params = {
							username: phone,
							userpass: md5pwd,
							sujistr:tdata.data
						}
						PostRequest("/agent/md5login", params, (data, succeed)=>{
							if(succeed){								
								setTimeout((e=>{
									this.login.loading = false;
									uni.setStorage({
										key:"login_info",
										data: {
											uid: data.uid,
											token: data.token
										},
										success: () => {
											uni.reLaunch({
												url:"../tag/tag"
											})
										}
									})
								}),500);
							}else{
								setTimeout((e=>{
									this.login.loading = false;
								}),500);
							}
						})
					}
				})
				
				// console.log(JSON.stringify(this.login)); 
			},
			BindInput:function(e){
				var dataval = e.currentTarget.dataset.val;
				this.login[dataval] = e.detail.value; 
			},
			goRegister:function(){
				uni.reLaunch({
					url:"register"
				})
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
</style>
