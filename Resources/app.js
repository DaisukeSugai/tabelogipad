Titanium.include('/common/constant.js');
Titanium.UI.setBackgroundColor('#FFF');

Titanium.Gesture.addEventListener('orientationchange',function(e) {
	var o = e.orientation;
	var o2 = Titanium.Gesture.orientation;
	Titanium.UI.orientation = Titanium.UI.PORTRAIT;
});

Titanium.Locale.setLanguage("ja");
//Titanium.Locale.setLanguage("en");

var tabGroup = Titanium.UI.createTabGroup();

var win3 = Titanium.UI.createWindow({url:LOGIN_FILE});
var tab3 = Titanium.UI.createTab({window:win3});

var win4 = Titanium.UI.createWindow({url:START_FILE});
var tab4 = Titanium.UI.createTab({window:win4});

tabGroup.addTab(tab3);
tabGroup.addTab(tab4);
tabGroup.tabBarVisible = false;
Titanium.App.tabGroup = tabGroup;

win3.hideNavBar();
win3.hideTabBar();
win4.hideNavBar();
win4.hideTabBar();

tabGroup.open();
tabGroup.activeTab = tabGroup.tabs[1];