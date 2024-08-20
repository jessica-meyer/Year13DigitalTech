console.log('%cfbR_manager.js', 'color: pink');

const DETAILS = "userDetails";
const ADMIN = "adminUser";
const CALENDER = "calender";

var htmlData = [];
var htmlIds = {
    0: 'eventTitle',
    1: 'eventDesc',
    2: 'eventDate',
};

var userDetails = {
  uid: '',
  email: '',
  name: '',
  userName: '',
  age: '',
  gender: '',
  phone: '',
  role: ''
};

var eventInfo = {
  desc: '',
  title: '',
  date: '',
  month: '',
  year: ''
};

/**************************************************************/
// fbR_initialise()
// Called by setup
// Initialize firebase
// Input:  n/a
// Return: n/a
/**************************************************************/
function fbR_initialise() {
  console.log('%cfbR_initialise: ', 'color: brown;');

  // PLACE YOUR CONFIG FROM THE FIREBASE CONSOLE BELOW <========
  const FIREBASECONFIG = {
    apiKey: "AIzaSyCorasHsXsS2ASFyjg3033stm6Xh4AfEt0",
  authDomain: "dtech-2024-jessicameyer.firebaseapp.com",
  projectId: "dtech-2024-jessicameyer",
  storageBucket: "dtech-2024-jessicameyer.appspot.com",
  messagingSenderId: "340903380109",
  appId: "1:340903380109:web:212fab29e928ce11000ec4",
  measurementId: "G-75XL2GEM6X"
};

  // Check if firebase already initialised
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASECONFIG);
    database = firebase.database();
  }
}

/**************************************************************/
// fbR_procLogin(_loginStatus, _user, _save)
// Called by fb_login
/**************************************************************/
function fbR_procLogin(_loginStatus, _user, _save) {
  console.log('fbR_procLogin');
  _save.uid = _user.uid;
  _save.email = _user.email;
  _save.name = _user.displayName;
  _save.photoURL = _user.photoURL;

  sessionStorage.setItem('uid', _user.uid);
  sessionStorage.setItem('email', _user.email);
  sessionStorage.setItem('name', _user.displayName);
  sessionStorage.setItem('photoURL', _user.photoURL);
  // _path, _key, _save, _procFunc
  fb_readRec(DETAILS, _save.uid, _save, fbR_procReadUD);
}

/**************************************************************/
// fbR_procWrite()
// Called by fb_write
/**************************************************************/
function fbR_procWrite(_path, _key, _data, _error) {
  console.log("fbR_procWrite");
  if (_error) {
    writeStatus = 'failure';
    console.log(_error);
  }
  else {
    writeStatus = 'OK';
    console.log('fbR_procWrite: path/key = ' + _path + '/' + _key + ',   OK');
  }
}

/**************************************************************/
// fbR_procWriteReg()
// Called by fb_write
/**************************************************************/
function fbR_procWriteReg(_path, _key, _data, _error) {
  console.log("fbR_procWriteReg");
  if (_error) {
    writeStatus = 'failure';
    console.log(_error);
  }
  else {
    writeStatus = 'OK';
    console.log('fbR_procWrite: path/key = ' + _path + '/' + _key + ',   OK');
    window.location.href = "/index.html";
  }
}

/**************************************************************/
// fbR_procReadUD()
// Called by fb_readRec
// Determine if user is registered or not
/**************************************************************/
function fbR_procReadUD(_result, _snapshot, _save) {
  console.log('fbR_procReadUD: result = ' + _result);

  if (_snapshot.val() == null) {
    // User NOT registered
    readStatus = "no record";
    window.location.href = "/registration/reg.html";
  }
  else {
    // user already registered
    readStatus = "OK";
    let dbData = _snapshot.val();
    sessionStorage.setItem('userName', dbData.userName);
  }
}

/**************************************************************/
// fbR_procRead()
// Called by fb_readRec
/**************************************************************/
function fbR_procRead(_result, _snapshot, _save) {
  console.log('fbR_procRead: result = ' + _result);

  if (_snapshot.val() == null) {
    readStatus = "no record";
  }
  else {
    readStatus = "OK";
    let dbData = _snapshot.val();
    eventInfo.title = dbData.title;
    console.log('fbR_procRead ' + eventInfo.title);
    
    returnDesc = dbData.desc;
    returnYear = dbData.year;
    returnMonth = dbData.month;
    returnDate = dbData.date;
    
  }
}

/**************************************************************/
// fbR_procReadAllOn()
// Called by fbR_readAllOn()
/**************************************************************/
function fbR_procReadAllOn(_path, _readStatus, _snapshot) {
    let snapshotData = _snapshot.val();
    if (_snapshot.val() == null) {
        console.log ("data = null");
        document.getElementById("eventTitle").innerHTML = 'No Events On!';
        document.getElementById("eventDesc").innerHTML = '';
        document.getElementById("eventDate").innerHTML = eventKey;
      
    }
    else {
        console.log(snapshotData);
        htmlData[0] = snapshotData.title;
        htmlData[1] = snapshotData.desc;
        htmlData[2] = snapshotData.date + '/' + snapshotData.month + '/' + snapshotData.year;

        for(let i=0; i<htmlData.length; i++){
            inputData(htmlIds[i], htmlData[i]);
    }
}
};

function inputData(_id, _data) {
    let cal_element = document.getElementById(_id);
    let cal_text = `<p id="${_id}">${_data}</p>`;
    cal_element.innerHTML = cal_text;
};

