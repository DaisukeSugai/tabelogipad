var styles = {
    lblTitleMain: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 48},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    lblTitleSub: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 36},
        height: 250,
        width:'auto',
        top: "vertical"
    },
    imageView: {
	    image:'1.png',
	    width:300,
	    height:300,
        left: 250,
	    top:300
    },
    btnStart: {
        width: 400,
        height: 100,
        left: 200,
        top: 800,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    lblTitle: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 48},
        height: 100,
        width:'auto',
        top: "vertical"
    },
    lblLoginTitle: {
    	textAlign:'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 30},
        height: 100,
        left: 150,
        top:250
    },
    txtLogin: {
        color:'#336699',
        top: 350,
        left: 150,
        width: 400,
        height: 80,
    	font:{fontSize: 30},
        hintText:'ログインユーザーを入力',
        value: 'admin',
        textAlign: 'left',
        verticalAlign: 'middle',
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        leftButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
        rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
    },
    btnLogin: {
        width: 300,
        height: 100,
        left: 80,
        top: 800,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnReset: {
        width: 300,
        height: 100,
        left: 400,
        top: 800,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    }
};