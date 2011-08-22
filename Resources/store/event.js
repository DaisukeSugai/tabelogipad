Titanium.include('../common/constant.js');

var backList = function() {
	var win = Titanium.UI.createWindow({url:LIST_FILE});
	Titanium.UI.currentTab.open(win, {animated:true});
}

var insertTrans = function() {
	var selectData = [];
	selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTDATA);
	
	//var paramater = '&parameter=owner:' + Titanium.App.Properties.getString(KEY_CODE_USERXID) + ',';
	//var paramater = '&parameter=owner:' + Titanium.App.Properties.getString(KEY_CODE_USERXID) + ',';
	//var paramater1 = 'created-by:' + Titanium.App.Properties.getString(KEY_CODE_USERXID) + ',';
	var paramater2 = 'category:' + selectData[12] + ',';
	var paramater3 = 'servicescore:' + selectData[7] + ',';
	var paramater4 = 'rcd:' + selectData[4] + ',';
	var paramater5 = 'name:' + selectData[0] + ',';
	var paramater6 = 'address:' + selectData[3] + ',';
	var paramater7 = 'tastescore:' + selectData[2] + ',';
	var paramater8 = 'businesshours:' + selectData[15] + ',';
	var paramater9 = 'totalscore:' + selectData[1] + ',';
	var paramater10 = 'latitude:' + selectData[17] + ',';
	var paramater11 = 'longitude:' + selectData[18] + ',';
	var paramater12 = 'moodscore:' + selectData[8] + ',';
	var paramater13 = 'telephone:' + selectData[14] + ',';
	var paramater14 = 'tabelogurl:' + selectData[5] + ',';

	var url = REGISTER_URL + Titanium.App.Properties.getString(KEY_CODE_URL) + paramater2 + paramater3 + paramater4 + paramater5 + paramater6 + paramater7 + 
	paramater8 + paramater9 + paramater10 + paramater11 + paramater12 + paramater13 + paramater14;
	Titanium.API.info(url);
	var client = Titanium.Network.createHTTPClient({timeout : 100000});
	
	client.open(GET_REC, url);
	client.onload = function() {
		try {
			var resData = eval("("+this.responseText+")");
			Titanium.API.info(resData);
			if (resData[0].error == 'Yes') {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("event_yes_title");
				dialog.message = resData[0].contents;
				dialog.show();
				return;
			} else {
				if (resData[0].count == 0) {
					var dialog = Titanium.UI.createAlertDialog({});
					dialog.title =  Titanium.Locale.getString("event_yes_title");
					dialog.message = Titanium.Locale.getString("event_catch_message");
					dialog.show();
					return;
				}
				var win = Titanium.UI.createWindow({url:LIST_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});
				return;
			}
		} catch (e) {
			Titanium.API.error(e);
			var dialog = Titanium.UI.createAlertDialog({});
			dialog.title =  Titanium.Locale.getString("event_catch_title");
			dialog.message = Titanium.Locale.getString("event_catch_message");
			dialog.show();
			return;
		}
	};
	client.onerror = function() {
		if (client.status == 401) {
			var dialog = Titanium.UI.createAlertDialog({});
			dialog.title =  Titanium.Locale.getString("event_connect_title");
			dialog.message = Titanium.Locale.getString("event_connect_message");
			dialog.show();
			return;
		}
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_network_title");
		dialog.message = Titanium.Locale.getString("event_network_message");
		dialog.show();
		return;
	};
	client.send();
}