Titanium.include('../common/constant.js');
Titanium.include('styleregister.js');
Titanium.include('event.js');

var win = Titanium.UI.currentWindow;

var selectData = [];
selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTDATA_CHK);

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("chk_register_title");
win.add(lblTitle);

var lblNickName = Titanium.UI.createLabel(styles["lblNickName"]);
lblNickName.text = Titanium.Locale.getString("chk_register_nickname") + selectData[0];
win.add(lblNickName);

var lblVisitDate = Titanium.UI.createLabel(styles["lblVisitDate"]);
lblVisitDate.text = Titanium.Locale.getString("chk_register_visitdate") + selectData[4];
win.add(lblVisitDate);

var lblReviewDate = Titanium.UI.createLabel(styles["lblReviewDate"]);
lblReviewDate.text = Titanium.Locale.getString("chk_register_reviewdate") + selectData[5];
win.add(lblReviewDate);

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

var lblTitle2 = Titanium.UI.createLabel(styles["lblTitle2"]);
lblTitle2.text = Titanium.Locale.getString("chk_register_title2") + selectData[3];
win.add(lblTitle2);

var lblComment = Titanium.UI.createLabel(styles["lblComment"]);
lblComment.text = Titanium.Locale.getString("chk_register_comment");
win.add(lblComment);

var lblComment2 = Titanium.UI.createLabel(styles["lblComment2"]);
lblComment2.text = selectData[11];
win.add(lblComment2);

var lblURL = Titanium.UI.createLabel(styles["lblURL"]);
lblURL.text = Titanium.Locale.getString("chk_register_url");
win.add(lblURL);

var lblURL2 = Titanium.UI.createLabel(styles["lblURL2"]);
lblURL2.text = selectData[12];
win.add(lblURL2);


var btnRegiester = Titanium.UI.createButton(styles["btnRegiester"]);
btnRegiester.title = Titanium.Locale.getString("chk_register_btnRegiester");
btnRegiester.addEventListener(EVT_CLICK,insertTrans);
win.add(btnRegiester);

var btnBack = Titanium.UI.createButton(styles["btnBack"]);
btnBack.title = Titanium.Locale.getString("chk_register_btnBack");
btnBack.addEventListener(EVT_CLICK,backList);
win.add(btnBack);

win.open();
