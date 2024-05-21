MODULENAME = "html_manager.js";
console.log('%c' + MODULENAME + ': ', 'color: orange;');

function html_load() {
  console.log('%chtml_load', 'color:green');
  fbR_initialise();
  userDetails.uid = sessionStorage.getItem('uid');
  userDetails.email = sessionStorage.getItem('email');
  userDetails.name = sessionStorage.getItem('name');
  userDetails.photo = sessionStorage.getItem('photoURL');
  userDetails.gameName = sessionStorage.getItem('userName');
  userDetails.age = sessionStorage.getItem('age');
  userDetails.phone = sessionStorage.getItem('phone');
}

/*------------------------------------------------------------*/
var html_leaderArray = [];