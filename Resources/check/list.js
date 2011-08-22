Titanium.include('../common/constant.js');
Titanium.include('style.js');

var data = [];
var names = [];
var rcds = [];
var xids = [];

var win;

var client = Titanium.Network.createHTTPClient({timeout : 100000});

//var paramater = '&parameter=owner:' + Titanium.App.Properties.getString(KEY_CODE_USERXID) + ',';
var url = TABELOG_LIST_URL + Titanium.App.Properties.getString(KEY_CODE_URL);	

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
				rcds[i] = resData[0].records[i].rcd;
				xids[i] = resData[0].records[i].xid;
				data[i]=Titanium.UI.createPickerRow({
					title:resData[0].records[i].name,
					custom_item:resData[0].records[i].rcd
				});
				if (i == 0) {
					Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK, resData[0].records[i].rcd);
					Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK_XID, resData[0].records[i].xid);
					Titanium.API.info(Titanium.App.Properties.getString(KEY_CODE_PICKER_CHK_XID));
				}
			}
			
			win = Titanium.UI.currentWindow;
			var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
			lblTitle.text = Titanium.Locale.getString("chk_list_title");
			win.add(lblTitle);

			var btnLatest = Titanium.UI.createButton(styles["btnLatest"]);
			btnLatest.title = Titanium.Locale.getString("chk_list_btnLatest");
			win.add(btnLatest);
			btnLatest.addEventListener(EVT_CLICK, function() {
				var win = Titanium.UI.createWindow({url:TASK_REGISTR_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});		
			});
			
			var btnBack = Titanium.UI.createButton(styles["btnBack"]);
			btnBack.title = Titanium.Locale.getString("chk_list_btnBack");
			win.add(btnBack);
			btnBack.addEventListener(EVT_CLICK, function() {
				var win = Titanium.UI.createWindow({url:LIST_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});		
			});
			
			var btnSearch = Titanium.UI.createButton(styles["btnSearch"]);
			btnSearch.title = Titanium.Locale.getString("chk_list_btnSearch");
			win.add(btnSearch);
			btnSearch.addEventListener(EVT_CLICK, function() {
				var data = [];
				var selectData = [];
				
				var client = Titanium.Network.createHTTPClient({timeout : 100000});
				var recordcd = Titanium.App.Properties.getString(KEY_CODE_PICKER_CHK);
				var url = TUCHIKOMI_API_LIST + recordcd;	
				
				client.open(GET_REC, url);
				client.onload = function() {
					try {
						var doc = this.responseXML.documentElement;
						var items = doc.getElementsByTagName("Item");
						var x = 0;
						var doctitle = doc.evaluate("/ReviewInfo/NumOfResult/text()").item(0).nodeValue;
						for (var i = 0; i < items.length; i++) {
							var item = items.item(i);
							//Titanium.API.info(item);
							var row = Titanium.UI.createTableViewRow(styles["rows"]);
							
							var nickname = item.getElementsByTagName("NickName").item(0).text;
							nickname = nickname.split(',').join('');
							row.nickName = nickname;				
							var lblNickName = Titanium.UI.createLabel(styles["lblNickName"]);
							lblNickName.text = (i + 1) + '：' + nickname;
							row.add(lblNickName);
			
							row.totalScore = item.getElementsByTagName("TotalScore").item(0).text;
							var lblTotalScore = Titanium.UI.createLabel(styles["lblTotalScore"]);
							lblTotalScore.text = Titanium.Locale.getString("list_totalscore") + item.getElementsByTagName("TotalScore").item(0).text;
							row.add(lblTotalScore);
				
							row.tasteScore = item.getElementsByTagName("TasteScore").item(0).text;
							var lblTasteScore = Titanium.UI.createLabel(styles["lblTasteScore"]);
							lblTasteScore.text = Titanium.Locale.getString("list_tastescore") + item.getElementsByTagName("TasteScore").item(0).text;
							row.add(lblTasteScore);
							
							var title2 = item.getElementsByTagName("Title").item(0).text;
							title2 = title2.split(',').join('');
							row.title2 = title2;
							var lblTitle2 = Titanium.UI.createLabel(styles["lblTitle2"]);
							lblTitle2.text = title2;
							row.add(lblTitle2);
							
							var visitdate = item.getElementsByTagName("VisitDate").item(0).text;
							visitdate = visitdate.replace('\'','');	
							row.visitDate = visitdate;
							var reviewdate = item.getElementsByTagName("ReviewDate").item(0).text;
							reviewdate = reviewdate.replace('\'','');
							row.reviewDate = reviewdate;
							row.useType = item.getElementsByTagName("UseType").item(0).text;
							row.serviceScore = item.getElementsByTagName("ServiceScore").item(0).text;
							row.moodScore = item.getElementsByTagName("MoodScore").item(0).text;
							var pricedinner = item.getElementsByTagName("PriceDinner").item(0).text;
							pricedinner = pricedinner.split(',').join('');
							row.priceDinner = pricedinner;
							var pricelunch = item.getElementsByTagName("PriceLunch").item(0).text;
							pricelunch = pricelunch.split(',').join('');	
							row.priceLunch = pricelunch;
							var comment = item.getElementsByTagName("Comment").item(0).text;
							comment = comment.split(',').join('');
							row.comment = comment;
							row.pcSiteUrl = item.getElementsByTagName("PcSiteUrl").item(0).text;
							
							if (i == 0) {
								var nickname = item.getElementsByTagName("NickName").item(0).text;
								//nickname = nickname.replace(':',';');	
								nickname = nickname.split(',').join('');
								selectData.push(nickname);
								selectData.push(item.getElementsByTagName("TotalScore").item(0).text);
								selectData.push(item.getElementsByTagName("TasteScore").item(0).text);
								var title2 = item.getElementsByTagName("Title").item(0).text;
								title2 = title2.split(',').join('');
								//title2 = title2.replace(':',';');	
								selectData.push(title2);
								var visitdate = item.getElementsByTagName("VisitDate").item(0).text;
								visitdate = visitdate.replace('\'','');	
								selectData.push(visitdate);
								var reviewdate = item.getElementsByTagName("ReviewDate").item(0).text;
								reviewdate = reviewdate.replace('\'','');
								selectData.push(reviewdate);
								selectData.push(item.getElementsByTagName("UseType").item(0).text);
								selectData.push(item.getElementsByTagName("ServiceScore").item(0).text);
								selectData.push(item.getElementsByTagName("MoodScore").item(0).text);
								var pricedinner = item.getElementsByTagName("PriceDinner").item(0).text;
								//pricedinner = pricedinner.split('\￥').join('');
								pricedinner = pricedinner.split(',').join('');
								selectData.push(pricedinner);
								var pricelunch = item.getElementsByTagName("PriceLunch").item(0).text;
								//pricelunch = pricelunch.split('\￥').join('');
								pricelunch = pricelunch.split(',').join('');
								selectData.push(pricelunch);
								var comment = item.getElementsByTagName("Comment").item(0).text;
								//comment = comment.replace(':',';');	
								comment = comment.split(',').join('');
								selectData.push(comment);
								selectData.push(item.getElementsByTagName("PcSiteUrl").item(0).text);
							}				
							data[x++] = row;
						}
							
						tableview = Titanium.UI.createTableView(styles["tableRows"]);
						tableview.data = data;
						tableview.addEventListener(EVT_CHANGE, function(e){
							var index = e.index;
							Titanium.API.info(index);
							callNext(e);
						});
						
						tableview.addEventListener(EVT_SINGLETAP, function(e){
							var index = e.index;
							Titanium.API.info(index);
							callNext(e);
						});
						
						function callNext(e) {
							selectData = [];
							selectData.push(e.row.nickName);
							selectData.push(e.row.totalScore);
							selectData.push(e.row.tasteScore);
							selectData.push(e.row.title2);
							selectData.push(e.row.visitDate);
							selectData.push(e.row.reviewDate);
							selectData.push(e.row.useType);
							selectData.push(e.row.serviceScore);
							selectData.push(e.row.moodScore);
							selectData.push(e.row.priceDinner);
							selectData.push(e.row.priceLunch);
							selectData.push(e.row.comment);
							selectData.push(e.row.pcSiteUrl);
							Titanium.App.Properties.setList(KEY_CODE_SELECTDATA_CHK, selectData);			
			
							var win1 = Titanium.UI.createWindow({url:CHK_REGISTR_FILE});
							Titanium.UI.currentTab.open(win1, {animated:true});		
						}
						
						win = Titanium.UI.currentWindow;
						win.add(tableview);
									
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
			});
			
			var pckSearch = Titanium.UI.createPicker(styles["pckSearch"]);
			pckSearch.selectionIndicator = true;
			pckSearch.add(data);
			win.add(pckSearch);
			pckSearch.addEventListener(EVT_CHANGE, function(e) {
				Titanium.API.info(e.rowIndex);
				Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK, e.row.custom_item);
				Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK_XID, xids[e.rowIndex]);
				Titanium.API.info(Titanium.App.Properties.getString(KEY_CODE_PICKER_CHK_XID));
			});			
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
