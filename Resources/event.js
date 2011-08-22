var startApp = function() {
	Titanium.App.tabGroup.activeTab = Titanium.App.tabGroup.tabs[2];		
}

var clearText = function() {
	txtLogin.value = '';
}

var executeTrans = function() {
	if (txtLogin.value == '') {
		var dialog = Titanium.UI.createAlertDialog();
		dialog.title =  Titanium.Locale.getString("event_title");
		dialog.message = Titanium.Locale.getString("event_message");
		dialog.show();
		return;
	}
	send(txtLogin.value);
}

var send = function(params) {
	var client = Titanium.Network.createHTTPClient({timeout : 100000});
	var paramater = '&parameter=name:' + params + ',';
	var url = LOGIN_URL + paramater;
	
	client.open(GET_REC, url);
	client.onload = function() {
		try {
			var resData = eval("("+this.responseText+")");
			if (resData[0].error == 'Yes') {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("event_yes_title");
				dialog.message = resData[0].contents;
				dialog.show();
				return;
			} else {
				var record = resData[0].count;
				for (var i = 0; i < resData[0].records.length; i++) {
					var xid = resData[0].records[i].xid;
					var name = resData[0].records[i].name;
					var company = resData[0].records[i].company_1;
					//var company = resData[0].records[i].company;
					var employee = resData[0].records[i].employee;
					var user = resData[0].records[i].user;
					var companyflag = resData[0].records[i].companyflag;
					var paramater = '&parameter=companyflag:' + companyflag + ',';
					var paramater1 = 'owner:' + user + ',';
					var paramater2 = 'username:' + name + ',';
					
					var paramater3 = '';
					if (companyflag == 1) {
						paramater3 = 'company:' + company + ',';
					} else {
						paramater3 = 'employee:' + employee + ',';
					}
					var url = paramater + paramater1 + paramater2 + paramater3;
					
					Titanium.App.Properties.setString(KEY_CODE_USERXID, xid);
					Titanium.App.Properties.setString(KEY_CODE_USERNAME, name);
					Titanium.App.Properties.setString(KEY_CODE_URL, url);
					break;
				}
				
				var win = Titanium.UI.createWindow({url:LIST_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});		
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
};