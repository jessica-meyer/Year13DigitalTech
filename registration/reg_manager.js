MODULENAME = "reg_manager.js";
console.log('%c' + MODULENAME, 'color: blue');

/**************************************************************/
// These two lines need to be executed only after the                   //<=======
//  registration page is displayed                                      //<=======
// Save name & email into the form
// ENSURE THE OBJECT NAME IS CORRECT; its currently details             //<=======
/**************************************************************/
function reg_getElement() {
  document.getElementById("p_regName").innerHTML = userDetails.name          //<=======
  document.getElementById("p_regEmail").innerHTML = userDetails.email        //<=======
}

/**************************************************************/
// reg_regDetailsEntered()
// Input event; called when user clicks ?????????? button               //<========
// Write user's details to DB
// Input:   
// Return:
/**************************************************************/
function reg_regDetailsEntered() {
  console.log('%creg_regDetailsEntered: ', 'color: brown;');

  // Save player's details from the form into your details object
  //  ENSURE THE OBJECT NAME THE PROGRAM SAVES TO IS CORRECT; 
  //    its currently details    
  userDetails.userName = reg_getFormItemValue("f_reg", 0);
  userDetails.age = Number(reg_getFormItemValue("f_reg", 2));
  userDetails.gender = reg_getFormItemValue("f_reg", 1);

  sessionStorage.setItem('userName', userDetails.userName);

  console.log("reg_regDetailsEntered: form passed html validation - " +
    document.getElementById('f_reg').checkValidity());

  // Only write record to DB if all the fom's input passed html validation
  if (document.getElementById('f_reg').checkValidity()) {
    // call your function to write to details record firebase         //<=======
    fb_writeRec(DETAILS, userDetails.uid, userDetails, fbR_procWriteReg);
  }
}

/**************************************************************/
// reg_getFormItemValue(_elementId, _item)
// Called by reg_regDetailsEntered
// Returns the value of the form's item
// Input:  element id & form item number
// Return: form item's value
/**************************************************************/
function reg_getFormItemValue(_elementId, _item) {
  console.log('%creg_getFormItemValue: _elementId=' + _elementId +
    ',  _item= ' + _item, 'color: brown;');

  return document.getElementById(_elementId).elements.item(_item).value;
}

/**************************************************************/
//    END OF PROG
/**************************************************************/