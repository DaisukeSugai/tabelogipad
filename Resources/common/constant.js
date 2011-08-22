
var REGISTR_FILE = '/store/register.js';
var LIST_FILE = '/store/list.js';
var CHK_REGISTR_FILE = '/check/register.js';
var CHK_LIST_FILE = '/check/list.js';
var TASK_REGISTR_FILE = '/task/register.js';
var LOGIN_FILE = 'login.js';
var LOGIN_FILE2 = '../login.js';
var START_FILE = 'start.js';

var EVT_CLICK = 'click';
var EVT_SINGLETAP = 'singletap';
var EVT_LOCATION = 'location';
var EVT_FOCUS = 'focus';
var EVT_CHANGE = 'change';
var EVT_BLUR = 'blur';

var GET_REC = 'GET';
var POST_REC = 'POST';

var ERROR_RESULT = '<records></records>';

var KEY_CODE_USERNAME = 'user';
var KEY_CODE_USERXID = 'userxid';
var KEY_CODE_URL = 'url';
var KEY_CODE_SELECTDATA = 'targetdata';
var KEY_CODE_SELECTDATA_CHK = 'targetdatacheck';
var KEY_CODE_PICKER = 'pickerkey';
var KEY_CODE_PICKER_CHK = 'pickerkeycheck';
var KEY_CODE_PICKER_CHK_XID = 'pickerkeycheckxid';
var KEY_CODE_MEMO = 'memo';
var KEY_CODE_PRIORITY = 'priority';
var KEY_CODE_SELECT_XID = 'selectuserxid';


var LOGIN_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=chargeselectuser&restype=JSON&databasetype=XRM';
//var LOGIN_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=chargeselectuser&restype=JSON&databasetype=XRM';
//var LOGIN_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=chargeselectuser&restype=JSON&databasetype=XRM';
//var LOGIN_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=chargeselectuser&restype=JSON';
//var LOGIN_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=selectintaliouser&restype=JSON';
var LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allstoreplace&restype=JSON&databasetype=XRM';
//var LIST_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allstoreplace&restype=JSON&databasetype=XRM';
//var LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=allstoreplace&restype=JSON&databasetype=XRM';
//var LIST_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=allstoreplace&restype=JSON';
var REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=inserttabelog&restype=JSON&databasetype=XRM';
//var REGISTER_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=inserttabelog&restype=JSON&databasetype=XRM';
// var REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=inserttabelog&restype=JSON&databasetype=XRM';
//var REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=inserttabelog&restype=JSON';
var USERS_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
//var USERS_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
// var USERS_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
//var USERS_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=allemailusers&restype=JSON';

var KUCHIKOMI_REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=insertkuchikomi&restype=JSON&databasetype=XRM';
//var KUCHIKOMI_REGISTER_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=insertkuchikomi&restype=JSON&databasetype=XRM';
// var KUCHIKOMI_REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=insertkuchikomi&restype=JSON&databasetype=XRM';
//var KUCHIKOMI_REGISTER_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=insertkuchikomi&restype=JSON';
var TABELOG_LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=alltabelog&restype=JSON&databasetype=XRM';
//var TABELOG_LIST_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=alltabelog&restype=JSON&databasetype=XRM';
// var TABELOG_LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=alltabelog&restype=JSON&databasetype=XRM';
//var TABELOG_LIST_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=alltabelog&restype=JSON';

var TABELOG_API_LIST = 'http://api.tabelog.com/Ver2.1/RestaurantSearch/?Key=74f9a86d2fac23e7add87cecc5079da042d44d86&Prefecture=tokyo&ResultSet=large&PageNum=1&SearchRange=medium&Station=';
var TUCHIKOMI_API_LIST = 'http://api.tabelog.com/Ver1/ReviewSearch/?Key=74f9a86d2fac23e7add87cecc5079da042d44d86&Rcd=';

var USER_LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
//var USER_LIST_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
// var USER_LIST_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=allemailusers&restype=JSON&databasetype=XRM';
//var USER_LIST_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=allemailusers&restype=JSON';
var TASK_REG_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=insertemertask&restype=JSON&databasetype=XRM';
//var TASK_REG_URL = 'http://intaliocloudpublicmobile.appspot.com/cloudtest/?ipaddress=49.212.27.161&portnum=4105&uri=insertemertask&restype=JSON&databasetype=XRM';
// var TASK_REG_URL = 'http://convertintaliocloud.appspot.com/cloudtest/?ipaddress=27.112.107.135&portnum=4105&uri=insertemertask&restype=JSON&databasetype=XRM';
//var TASK_REG_URL = 'http://convertintaliocloud.appspot.com/cloud/?ipaddress=27.112.107.135&portnum=4105&uri=insertemertask&restype=JSON';
