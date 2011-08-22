Titanium.include('../common/constant.js');

var insertTrans = function() {	
	//var paramater = '&parameter=owner:' + Titanium.App.Properties.getString(KEY_CODE_SELECT_XID) + ',';
	var paramater1 = 'subject:' + Titanium.Locale.getString("task_register_subject") + ',';
	var paramater2 = 'prioritycode:' + Titanium.App.Properties.getString(KEY_CODE_PRIORITY) + ',';
	var paramater3 = 'description:' + Titanium.App.Properties.getString(KEY_CODE_MEMO) + ',';

	var url = TASK_REG_URL + Titanium.App.Properties.getString(KEY_CODE_URL) + paramater1 + paramater2 + paramater3;
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
				var win = Titanium.UI.createWindow({url:CHK_LIST_FILE});
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