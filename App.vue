<script>

	
    export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
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
