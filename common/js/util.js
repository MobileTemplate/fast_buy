var token = "";
var uri = "http://localhost:8006";

function friendlyDate(timestamp) {
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前'
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}

function Request(url, data, method, callback) {
	console.log(url, method)
	uni.request({
		url: url,
		header: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: data,
		method: method,
		success: (result) => {
			if(result.statusCode == 200){
				callback(result.data)
			}else{
				uni.showToast({
					title: '网络连接有误',
					icon: "none"
				});
			}
		},
		fail: (result) => {
			uni.showToast({
				title: '网络连接有误',
				icon: "none"
			});
		}
	})
}

function GetRequest(url, data, callback){
	Request(urlTokne(url), data, "GET", callback);
}

function PostRequest(url, data, callback){
	if (data != null) {
        data = JSON.stringify(data);
    }
	Request(urlTokne(url), data, "POST", callback);
}

function GetUIDRequest(url, data, callback){
	uni.getStorage({
		key:"login_info",
		success: function (res) {
			console.log(res.data)
			if(res.data != null && res.data.uid != null){
				url = "/users/"+res.data.uid+url
				Request(urlTokne(url), data, "GET", callback);
			}
		},
		
	});
	
}


function urlTokne(url){
	url = uri + url;
	console.log(token)
	if(token != null && token != ""){
		url = url +"?token=" + token;
	}
	return url;
}

function SetToken(tk){
	token = tk;
}

export {
	friendlyDate,
	GetRequest,
	SetToken,
	PostRequest,
	GetUIDRequest
}
