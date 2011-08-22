Titanium.include('../common/constant.js');
Titanium.include('style.js');

var data = [];
var names = [];
var utf8customs = [];

var win;

var client = Titanium.Network.createHTTPClient({timeout : 100000});
var url = LIST_URL + Titanium.App.Properties.getString(KEY_CODE_URL);	

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
				utf8customs[i] = resData[0].records[i].utf8custom;
				data[i]=Titanium.UI.createPickerRow({
					title:resData[0].records[i].name,
					custom_item:resData[0].records[i].utf8custom
				});
				if (i == 0) {
					Titanium.App.Properties.setString(KEY_CODE_PICKER, resData[0].records[i].utf8custom);
				}
			}
			
			win = Titanium.UI.currentWindow;
			var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
			lblTitle.text = Titanium.Locale.getString("list_title");
			win.add(lblTitle);

			var btnLatest = Titanium.UI.createButton(styles["btnLatest"]);
			btnLatest.title = Titanium.Locale.getString("list_btnLatest");
			win.add(btnLatest);
			btnLatest.addEventListener(EVT_CLICK, function() {
				var win = Titanium.UI.createWindow({url:CHK_LIST_FILE});
				Titanium.UI.currentTab.open(win, {animated:true});		
			});
			
			var btnBack = Titanium.UI.createButton(styles["btnBack"]);
			btnBack.title = Titanium.Locale.getString("list_btnBack");
			win.add(btnBack);
			btnBack.addEventListener(EVT_CLICK, function() {
				Titanium.App.Properties.setList(KEY_CODE_SELECTDATA, null);
				Titanium.App.Properties.setString(KEY_CODE_USERXID, null);
				Titanium.App.Properties.setString(KEY_CODE_USERNAME, null);
				Titanium.App.Properties.setString(KEY_CODE_SELECTDATA_CHK, null);
				Titanium.App.Properties.setString(KEY_CODE_PICKER, null);
				Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK, null);
				Titanium.App.Properties.setString(KEY_CODE_PICKER_CHK_XID, null);
				Titanium.App.Properties.setString(KEY_CODE_MEMO, null);
				Titanium.App.Properties.setString(KEY_CODE_PRIORITY, null);
				Titanium.App.Properties.setString(KEY_CODE_SELECT_XID, null);				
				Titanium.App.Properties.setString(KEY_CODE_URL, null);				
				var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
				Titanium.UI.currentTab.open(win, {animated:true});		
			});
			
			var btnSearch = Titanium.UI.createButton(styles["btnSearch"]);
			btnSearch.title = Titanium.Locale.getString("list_btnSearch");
			win.add(btnSearch);
			btnSearch.addEventListener(EVT_CLICK, function() {
				//Titanium.API.info("click event is " + Titanium.App.Properties.getString(KEY_CODE_PICKER));
				var data = [];
				var selectData = [];
				
				var client = Titanium.Network.createHTTPClient({timeout : 100000});
				var station = Titanium.App.Properties.getString(KEY_CODE_PICKER);
				var url = TABELOG_API_LIST + station;	
				
				client.open(GET_REC, url);
				client.onload = function() {
					try {
						var doc = this.responseXML.documentElement;
						var items = doc.getElementsByTagName("Item");
						var x = 0;
						var doctitle = doc.evaluate("/RestaurantInfo/NumOfResult/text()").item(0).nodeValue;
						for (var i = 0; i < items.length; i++) {
							var item = items.item(i);
							var row = Titanium.UI.createTableViewRow(styles["rows"]);
				
							var restaurantname = item.getElementsByTagName("RestaurantName").item(0).text;
							restaurantname = restaurantname.replace(':',';');	
							row.restaurantName = restaurantname;				
							var lblRestaurantName = Titanium.UI.createLabel(styles["lblRestaurantName"]);
							lblRestaurantName.text = (i + 1) + '：' + restaurantname;
							row.add(lblRestaurantName);
			
							row.totalScore = item.getElementsByTagName("TotalScore").item(0).text;
							var lblTotalScore = Titanium.UI.createLabel(styles["lblTotalScore"]);
							lblTotalScore.text = Titanium.Locale.getString("list_totalscore") + item.getElementsByTagName("TotalScore").item(0).text;
							row.add(lblTotalScore);
				
							row.tasteScore = item.getElementsByTagName("TasteScore").item(0).text;
							var lblTasteScore = Titanium.UI.createLabel(styles["lblTasteScore"]);
							lblTasteScore.text = Titanium.Locale.getString("list_tastescore") + item.getElementsByTagName("TasteScore").item(0).text;
							row.add(lblTasteScore);
							
							var address = item.getElementsByTagName("Address").item(0).text;
							address = address.replace(':',';');	
							row.address = address;
							var lblAddress = Titanium.UI.createLabel(styles["lblAddress"]);
							lblAddress.text = address;
							row.add(lblAddress);
								
							row.rcd = item.getElementsByTagName("Rcd").item(0).text;
							row.tabelogUrl = item.getElementsByTagName("TabelogUrl").item(0).text;
							row.tabelogMobileUrl = item.getElementsByTagName("TabelogMobileUrl").item(0).text;
							row.serviceScore = item.getElementsByTagName("ServiceScore").item(0).text;
							row.moodScore = item.getElementsByTagName("MoodScore").item(0).text;
							row.situation = item.getElementsByTagName("Situation").item(0).text;
							row.dinnerPrice = item.getElementsByTagName("DinnerPrice").item(0).text;
							row.lunchPrice = item.getElementsByTagName("LunchPrice").item(0).text;
							var category = item.getElementsByTagName("Category").item(0).text;
							category = category.replace(':',';');	
							row.category = category;
							row.station = item.getElementsByTagName("Station").item(0).text;
							row.tel = item.getElementsByTagName("Tel").item(0).text;
							row.businessHours = item.getElementsByTagName("BusinessHours").item(0).text;
							row.holiday = item.getElementsByTagName("Holiday").item(0).text;
							row.latitude = item.getElementsByTagName("Latitude").item(0).text;
							row.longitude = item.getElementsByTagName("Longitude").item(0).text;
							
							if (i == 0) {
								var restaurantname = item.getElementsByTagName("RestaurantName").item(0).text;
								restaurantname = restaurantname.replace(':',';');	
								selectData.push(restaurantname);
								selectData.push(item.getElementsByTagName("TotalScore").item(0).text);
								selectData.push(item.getElementsByTagName("TasteScore").item(0).text);
								var address = item.getElementsByTagName("Address").item(0).text;
								address = address.replace(':',';');	
								selectData.push(address);
								selectData.push(item.getElementsByTagName("Rcd").item(0).text);
								selectData.push(item.getElementsByTagName("TabelogUrl").item(0).text);
								selectData.push(item.getElementsByTagName("TabelogMobileUrl").item(0).text);
								selectData.push(item.getElementsByTagName("ServiceScore").item(0).text);
								selectData.push(item.getElementsByTagName("MoodScore").item(0).text);
								selectData.push(item.getElementsByTagName("Situation").item(0).text);
								selectData.push(item.getElementsByTagName("DinnerPrice").item(0).text);
								selectData.push(item.getElementsByTagName("LunchPrice").item(0).text);
								var category = item.getElementsByTagName("Category").item(0).text;
								category = category.replace(':',';');	
								selectData.push(category);
								selectData.push(item.getElementsByTagName("Station").item(0).text);
								selectData.push(item.getElementsByTagName("Tel").item(0).text);
								selectData.push(item.getElementsByTagName("BusinessHours").item(0).text);
								selectData.push(item.getElementsByTagName("Holiday").item(0).text);
								selectData.push(item.getElementsByTagName("Latitude").item(0).text);
								selectData.push(item.getElementsByTagName("Longitude").item(0).text);
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
							selectData.push(e.row.restaurantName);
							selectData.push(e.row.totalScore);
							selectData.push(e.row.tasteScore);
							selectData.push(e.row.address);
							selectData.push(e.row.rcd);
							selectData.push(e.row.tabelogUrl);
							selectData.push(e.row.tabelogMobileUrl);
							selectData.push(e.row.serviceScore);
							selectData.push(e.row.moodScore);
							selectData.push(e.row.situation);
							selectData.push(e.row.dinnerPrice);
							selectData.push(e.row.lunchPrice);
							selectData.push(e.row.category);
							selectData.push(e.row.station);
							selectData.push(e.row.tel);
							selectData.push(e.row.businessHours);
							selectData.push(e.row.holiday);
							selectData.push(e.row.latitude);
							selectData.push(e.row.longitude);
							Titanium.App.Properties.setList(KEY_CODE_SELECTDATA, selectData);			
			
							var win1 = Titanium.UI.createWindow({url:REGISTR_FILE});
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
				Titanium.App.Properties.setString(KEY_CODE_PICKER, e.row.custom_item);
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
