var PLATFORM_IOS = "IOS";
var PLATFORM_ANDROID = "ANDROID";
var PLATFORM_WINDOWS = "WINDOWS";
var PLATFORM_BLACKBERRY = "BLACKBERRY";
var PLATFORM_KINDLE = "KINDLE";
var PLATFORM_DESKTOP = "DESKTOP";

var DEVICE = new Array(PLATFORM_IOS, PLATFORM_ANDROID, PLATFORM_WINDOWS, PLATFORM_BLACKBERRY, PLATFORM_KINDLE, PLATFORM_DESKTOP);

function getDevice() {
	var ua = navigator.userAgent.toLowerCase();
	var isiPhone = ua.indexOf("iphone");
	var isiPad = ua.indexOf("ipad");
	var isiPod = ua.indexOf("ipod");
	var isAndroid = /android/i.test(ua);
	var isBlackberry = ua.indexOf("BlackBerry");
	var isOpera = /Opera/i.test(ua);
	var isIE = ua.indexOf("IEMobile");
	var isKindle = /Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua);
	
	if (isiPhone > -1) {
		return PLATFORM_IOS;
	} else if (isiPad > -1) {
		return PLATFORM_IOS;
	} else if (isiPod > -1) {
		return PLATFORM_IOS;
	} else if (isAndroid && !isKindle) {
		return PLATFORM_ANDROID;
	} else if (isBlackberry > -1) {
		return PLATFORM_BLACKBERRY;
	} else if (isIE > -1) {
		return PLATFORM_WINDOWS;
	} else if (isKindle) {
		return PLATFORM_KINDLE;
	} else {
		return PLATFORM_DESKTOP;
	}
}

function init() {
	var device = getDevice();
	var marketUrl = null;
	if ( PLATFORM_IOS == device) {
		marketUrl = "itms-apps://itunes.apple.com/app/id908511191";
	}
	else if ( PLATFORM_ANDROID == device) {
		marketUrl = "market://details?id=com.twojmsoft.catstarot";
	}
	else if ( PLATFORM_KINDLE == device ) {
		marketUrl = "amzn://apps/android?p=com.twojmsoft.amazon.answerme";
	}
	
	if ( null != marketUrl ) {
		window.location.href = marketUrl;
	}
}
