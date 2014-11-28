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
