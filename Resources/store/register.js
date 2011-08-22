Titanium.include('../common/constant.js');
Titanium.include('styleregister.js');
Titanium.include('event.js');

var win = Titanium.UI.currentWindow;

var selectData = [];
selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTDATA);

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("register_title");
win.add(lblTitle);

var lblRestaurantName = Titanium.UI.createLabel(styles["lblRestaurantName"]);
lblRestaurantName.text = Titanium.Locale.getString("register_restaurantname") + selectData[0];
win.add(lblRestaurantName);

var lblAddress = Titanium.UI.createLabel(styles["lblAddress"]);
lblAddress.text = Titanium.Locale.getString("register_address");
win.add(lblAddress);

var lblAddress2 = Titanium.UI.createLabel(styles["lblAddress2"]);
lblAddress2.text = selectData[3];
win.add(lblAddress2);

var lblTel = Titanium.UI.createLabel(styles["lblTel"]);
lblTel.text = Titanium.Locale.getString("register_tel") + selectData[14];
win.add(lblTel);

var lblSalesTime = Titanium.UI.createLabel(styles["lblSalesTime"]);
lblSalesTime.text = Titanium.Locale.getString("register_salestime") + selectData[15];
win.add(lblSalesTime);

var lblCategory = Titanium.UI.createLabel(styles["lblCategory"]);
lblCategory.text = Titanium.Locale.getString("register_category") + selectData[12];
win.add(lblCategory);

var lblURL = Titanium.UI.createLabel(styles["lblURL"]);
lblURL.text = Titanium.Locale.getString("register_url");
win.add(lblURL);

var lblURL2 = Titanium.UI.createLabel(styles["lblURL2"]);
lblURL2.text = selectData[5];
win.add(lblURL2);

var lblTotalScore = Titanium.UI.createLabel(styles["lblTotalScore"]);
lblTotalScore.text = Titanium.Locale.getString("register_totalscore") + selectData[1];
win.add(lblTotalScore);

var lblTasteScore = Titanium.UI.createLabel(styles["lblTasteScore"]);
lblTasteScore.text = Titanium.Locale.getString("register_tastescore") + selectData[2];
win.add(lblTasteScore);

var lblServiceScore = Titanium.UI.createLabel(styles["lblServiceScore"]);
lblServiceScore.text = Titanium.Locale.getString("register_servicescore") + selectData[7];
win.add(lblServiceScore);

var lblMoodScore = Titanium.UI.createLabel(styles["lblMoodScore"]);
lblMoodScore.text = Titanium.Locale.getString("register_moodscore") + selectData[8];
win.add(lblMoodScore);

var txtRcd = Titanium.UI.createTextField(styles["txtRcd"]);
txtRcd.value = selectData[4];
win.add(txtRcd);

var txtLatitude = Titanium.UI.createTextField(styles["txtLatitude"]);
txtLatitude.value = selectData[17];
win.add(txtLatitude);

var txtLongitude = Titanium.UI.createTextField(styles["txtLongitude"]);
txtLongitude.value = selectData[18];
win.add(txtLongitude);

var btnRegiester = Titanium.UI.createButton(styles["btnRegiester"]);
btnRegiester.title = Titanium.Locale.getString("register_btnRegiester");
btnRegiester.addEventListener(EVT_CLICK,insertTrans);
win.add(btnRegiester);

var btnBack = Titanium.UI.createButton(styles["btnBack"]);
btnBack.title = Titanium.Locale.getString("register_btnBack");
btnBack.addEventListener(EVT_CLICK,backList);
win.add(btnBack);

win.open();
