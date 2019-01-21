<script>

	import {
		SetToken
	} from '@/common/js/util.js';
	
    export default {
        onLaunch: function() {
			console.log('App Launch')
			this.whetherLogin();
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		methods:{
			// 是否登陆
			whetherLogin:() => {
				uni.getStorage({
					key:"login_info",
					success: function (res) {
						console.log(res);
						if(res != null && res.data != null && res.data.token != null) {
							SetToken(res.data.token);
							uni.reLaunch({
								url:'pages/tag/tag'
							});
						}else{
							uni.reLaunch({
								url:'pages/ucenter/login'
							});
						}
					},
					fail: function() {
						uni.reLaunch({
							url:'pages/ucenter/login'
						});
					}
				})
				
			}
		}
    }
</script>

<style>
	
    @import './common/css/common.css';
	@import "./common/css/simplepro.css";

    page {
        display: flex;
        min-height: 100%;
		width: 100%;
        background-color: #EFEFEF;
    }

    template {
        display: flex;
        flex: 1;
    }
</style>
