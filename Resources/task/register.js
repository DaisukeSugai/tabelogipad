Titanium.include('../common/constant.js');
Titanium.include('style.js');
Titanium.include('event.js');

var data = [];
var names = [];
var lastnames = [];
var xids = [];

var win;

Titanium.App.Properties.setList(KEY_CODE_PRIORITY, 1);
Titanium.App.Properties.setList(KEY_CODE_MEMO, null);
Titanium.App.Properties.setList(KEY_CODE_SELECT_XID, null);

var client = Titanium.Network.createHTTPClient({timeout : 100000});

var url = USER_LIST_URL + Titanium.App.Properties.getString(KEY_CODE_URL);

client.open(GET_REC, url);
client.onload = function() {
	try {
		var resData = eval("("+this.responseText+")");
		//Titanium.API.info(resData);
		if (resData[0].error == 'Yes') {
			var dialog = Titanium.UI.createAlertDialog({});
			dialog.title =  Titanium.Locale.getString("event_yes_title");
			dialog.message = resData[0].contents;
			dialog.show();
			var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
			Titanium.UI.currentTab.open(win, {animated:true});		
			return;
		} else {
			var record = resData[0].count;
			for (var i = 0; i < resData[0].records.length; i++) {
				names[i] = resData[0].records[i].name;
				lastnames[i] = resData[0].records[i].lastname;
				xids[i] = resData[0].records[i].xid;
			}
			
			win = Titanium.UI.currentWindow;
			var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
			lblTitle.text = Titanium.Locale.getString("task_register_title");
			win.add(lblTitle);

			var btnRegiester = Titanium.UI.createButton(styles["btnRegiester"]);
			btnRegiester.title = Titanium.Locale.getString("task_register_btnRegiester");
			win.add(btnRegiester);
			btnRegiester.addEventListener(EVT_CLICK,insertTrans);
			
			var btnBack = Titanium.UI.createButton(styles["btnBack"]);
			btnBack.title = Titanium.Locale.getString("task_register_btnBack");
			win.add(btnBack);
			btnBack.addEventListener(EVT_CLICK, function() {
				var win = Titanium.UI.createWindow({url:CHK_LIST_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});		
			});
			
			var lblUserName = Titanium.UI.createLabel(styles["lblUserName"]);
			lblUserName.text = '';
			win.add(lblUserName);

			var dialog = Titanium.UI.createOptionDialog();
			dialog.setTitle(Titanium.Locale.getString("task_register_dialog_title"));

			Titanium.API.info(lastnames);
			dialog.setOptions(lastnames);
			//dialog.setCancel(0);
			dialog.addEventListener(EVT_CLICK,function(e) {
				Titanium.API.info(e.index +  lastnames[e.index] + e.value);
				lblUserName.text = Titanium.Locale.getString("task_register_lbl_username") + lastnames[e.index];
				Titanium.App.Properties.setList(KEY_CODE_SELECT_XID, xids[e.index]);
			});
			
			var btnUserName = Ti.UI.createButton(styles["btnUserName"]);
			btnUserName.title = Titanium.Locale.getString("task_register_username");
			btnUserName.addEventListener(EVT_CLICK,function() {
				dialog.show();
			});
			win.add(btnUserName);
			
			var txtReport = Titanium.UI.createTextArea(styles["txtReport"]);
			win.add(txtReport);
			txtReport.addEventListener(EVT_BLUR,function(e){
				Titanium.App.Properties.setList(KEY_CODE_MEMO, e.value);
			});
			
			var lblPriority = Titanium.UI.createLabel(styles["lblPriority"]);
			lblPriority.text = '';
			win.add(lblPriority);
			
			var arrPriority = [];
			arrPriority[0] = Titanium.Locale.getString("priority_high");
			arrPriority[1] = Titanium.Locale.getString("priority_middle");
			arrPriority[2] = Titanium.Locale.getString("priority_low");

			var dialog2 = Titanium.UI.createOptionDialog();
			dialog2.setTitle(Titanium.Locale.getString("task_registerpriority_dialog_title"));

			dialog2.setOptions(arrPriority);
			//dialog2.setCancel(0);
			dialog2.addEventListener(EVT_CLICK,function(e) {
			    if (e.index == 0) {
			    	lblPriority.text = Titanium.Locale.getString("task_register_lbl_priority") + Titanium.Locale.getString("priority_high");
			    } else if(e.index == 1) {
			    	lblPriority.text = Titanium.Locale.getString("task_register_lbl_priority") + Titanium.Locale.getString("priority_middle");
			    } else if(e.index == 2) {
			    	lblPriority.text = Titanium.Locale.getString("task_register_lbl_priority") + Titanium.Locale.getString("priority_low");
			    } else {
			    	lblPriority.text = '';
			    }
				Titanium.App.Properties.setList(KEY_CODE_PRIORITY, e.index + 1);
			});
			
			var btnPriority = Titanium.UI.createButton(styles["btnPriority"]);
			btnPriority.title = Titanium.Locale.getString("task_register_priority");
			btnPriority.addEventListener(EVT_CLICK,function() {
				dialog2.show();
			});
			win.add(btnPriority);
			
		}
	} catch (e) {
		Titanium.API.error(e);
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_catch_title");
		dialog.message = Titanium.Locale.getString("event_catch_message");
		dialog.show();
		var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
		Titanium.UI.currentTab.open(win, {animated:true});		
		return;
	}
};
client.onerror = function() {
	if (client.status == 401) {
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_connect_title");
		dialog.message = Titanium.Locale.getString("event_connect_message");
		dialog.show();
		var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
		Titanium.UI.currentTab.open(win, {animated:true});		
		return;
	}
	var dialog = Titanium.UI.createAlertDialog({});
	dialog.title =  Titanium.Locale.getString("event_network_title");
	dialog.message = Titanium.Locale.getString("event_network_message");
	dialog.show();
	var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
	Titanium.UI.currentTab.open(win, {animated:true});		
	return;
};
client.send();
