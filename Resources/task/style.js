var styles = {
    lblTitle: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 48},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    lblUserName: {
        textAlign: 'left',
    	font:{fontSize: 30},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 100,
		left: 100,
        top:100
    },
    btnUserName: {
		left: 100,
      	width: 300,
        height: 100,
        top: 200,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
   	txtReport: {
        color:'#000000',
        top: 350,
        left: 100,
        width: 500,
        height: 200,
		font: {
			fontSize: 30,
			fontWeight: 'bold',
			fontFamily: 'Arial'
		},
        textAlign:'left',
        hintText:'補足情報を入力してください',
        borderWidth:2,
        borderColor:'#bbb',
        borderRadius:5		
    },    
    lblPriority: {
        textAlign: 'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 30},
        height: 50,
		left: 100,
        top:570
    },
   	btnPriority: {
		left: 100,
      	width: 300,
        height: 100,
        top: 650,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnRegiester: {
        width: 300,
        height: 100,
		left: 80,
        top: 800,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnBack: {
        width: 300,
        height: 100,
        left: 400,
        top: 800,
    	font:{fontSize: 30},
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    }
};