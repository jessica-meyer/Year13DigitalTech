MODULENAME = "fb_io.js";
console.log('%c' + MODULENAME + ': ', 'color: lavender;');

/**************************************************************/
// fb_login(_save, _procFunc)
// Called by setup
// Login to Firebase
// Input:  object for login data to save to
// Return: n/a
/**************************************************************/
function fb_login(_save, _procFunc) {
  console.log('%cfb_login: ', 'color: brown;');

  firebase.auth().onAuthStateChanged(newLogin);

  /*-----------------------------------------*/
  // newLogin(user)
  /*-----------------------------------------*/
  function newLogin(user) {
    if (user) {
      // user is signed in, so save Google login details
      loginStatus = 'logged in';
      _procFunc(loginStatus, user, _save);
    }
    else {
      // user NOT logged in, so redirect to Google login
      loginStatus = 'logged out';

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        loginStatus = 'logged in via popup';
        _procFunc(loginStatus, result.user, _save);
      })
        // Catch errors
        .catch(function(error) {
          if (error) {
            loginStatus = 'failed';
            console.log('%cfb_login: ' + error.code + ', ' +
              error.message, 'color: red;');
          }
        });
    }
    console.log('fb_login: status = ' + loginStatus);
  }
}

/**************************************************************/
// fb_logout()
// Logout of Firebase
// Input:  n/a
// Return: n/a
/**************************************************************/
function fb_logout() {
  console.log('%cfb_logout: ', 'color: brown;');

  firebase.auth().signOut();
}

/**************************************************************/
// fb_writeRec(_path, _key, _procfunc)
// Write a specific record & key to the DB
// Input:  path to write to, the key and the data to write
// Return: 
/**************************************************************/
function fb_writeRec(_path, _key, _data, _procfunc) {
  console.log('%cfb_WriteRec: path= ' + _path + '  key= ' + _key,
    'color: brown;');

  writeStatus = 'waiting';
  firebase.database().ref(_path + '/' + _key).set(_data,
    function(_error) {
      console.log('fb_writeRec: write completed');
      console.log(_error);
      if (_procfunc != null) {
        _procfunc(_path, _key, _data, _error);
      } else {
        if (_error) {
          writeStatus = "Failed";
          console.error(_error);
          alert('firebase write error\nsee console log for details')
        } else {
          writeStatus = "Okay";
        }
      }
      console.log('%cfb_writeRec: exit writeStatus = ' + writeStatus, 'color:white');
    });
}

/**************************************************************/
// fb_readAll(_path, _procFunc)
// Read all DB records for the path
// Input:  path to read from & function to process firebase data
// Return:
/**************************************************************/
function fb_readAll(_path, _procFunc) {
  console.log('%cfb_readAll: path= ' + _path, 'color: brown;');

  readStatus = "waiting";
  firebase.database().ref(_path).once("value", gotRecord, readErr);

  function gotRecord(snapshot) {
    _procFunc(_path, snapshot, null);
  }

  function readErr(_error) {
    _procFunc(_path, null, _error);
  }
}

/**************************************************************/
// fb_readRec(_path, _key, _save, _procFunc)
// Read a specific DB record
// Input:  path & key of record to read and where to save the data
// Return:  
/**************************************************************/
function fb_readRec(_path, _key, _save, _procFunc) {
  console.log('%cfb_readRec: path= ' + _path +
    '  key= ' + _key, 'color: brown;');

  readStatus = "waiting";
  firebase.database().ref(_path + '/' + _key).once("value", gotRecord, gotError);

  function gotRecord(snapshot) {
    _procFunc(readStatus, snapshot, _save);

  }

  function gotError(errorMsg) {
    _procFunc(readStatus, null, _save, errorMsg);
  }
}